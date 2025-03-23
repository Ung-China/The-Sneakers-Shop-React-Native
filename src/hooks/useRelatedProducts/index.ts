import {useEffect, useState} from 'react';
import {API_ENDPOINTS, GET} from '../../api';
import {Product} from '../../models';

const useRelatedProducts = (brandId?: number) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingMoreProducts, setIsFetchingMoreProducts] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async (page = 1) => {
    if (page > totalPages || isLoading) return;

    if (page === 1) {
      setIsLoading(true);
    } else {
      setIsFetchingMoreProducts(true);
    }

    try {
      const response = await GET(API_ENDPOINTS.GET_PRODUCTS_BY_BRAND, {
        brand_id: brandId,
        page: page,
      });

      const fetchedProducts = response.data.map(
        (item: any) =>
          new Product(
            item.id,
            item.name,
            Number(item.price),
            item.rating,
            item.image,
            '',
            [],
            item.brand_id,
          ),
      );

      setProducts(prevProducts =>
        page === 1 ? fetchedProducts : [...prevProducts, ...fetchedProducts],
      );

      setCurrentPage(response.current_page);
      setTotalPages(response.last_page);
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE FETCHING RELATED PRODUCTS:', error);
    } finally {
      setIsLoading(false);
      setIsFetchingMoreProducts(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [brandId]);

  return {
    products,
    isLoading,
    isFetchingMoreProducts,
    fetchProducts,
    fetchMoreProducts: () => fetchProducts(currentPage + 1),
  };
};

export default useRelatedProducts;
