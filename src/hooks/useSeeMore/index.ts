import {useEffect, useState} from 'react';
import {GET} from '../../api';
import {Product, Variant} from '../../models';

const useSeeMore = (endPointName: string) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isFetchingMoreProducts, setIsFetchingMoreProducts] = useState(false);

  const fetchProducts = async (page = 1) => {
    if (page > totalPages || isLoading) return;

    if (page === 1) setIsLoading(true);
    else setIsFetchingMoreProducts(true);

    try {
      const response = await GET(`${endPointName}`, {page: page});

      // const fetchedProducts = response.data.map(
      //   (item: any) =>
      //     new Product(
      //       item.id,
      //       item.name,
      //       Number(item.price),
      //       item.rating,
      //       item.image,
      //       '',
      //       [],
      //       item.brand_id,
      //       item.product_info,
      //     ),
      // );

      const fetchedProducts = response.data.map((item: any) => {
        const variants =
          item.product_info?.map(
            (variantItem: any, index: number) =>
              new Variant(
                index + 1,
                variantItem.product_size,
                Number(variantItem.product_price),
                Number(variantItem.product_qty),
              ),
          ) || [];

        return new Product(
          item.id,
          item.name,
          Number(item.price),
          item.rating,
          item.image,
          '',
          [],
          item.brand_id,
          variants,
        );
      });

      setProducts(prevProducts =>
        page === 1 ? fetchedProducts : [...prevProducts, ...fetchedProducts],
      );
      setCurrentPage(response.current_page);
      setTotalPages(response.last_page);
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE FETCHING SEE MORE PRODUCTS:', error);
    } finally {
      setIsLoading(false);
      setIsFetchingMoreProducts(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [endPointName]);

  return {
    products,
    isLoading,
    fetchProducts,
    fetchMoreProducts: () => fetchProducts(currentPage + 1),
    isFetchingMoreProducts,
  };
};

export default useSeeMore;
