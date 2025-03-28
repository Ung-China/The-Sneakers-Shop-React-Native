import {useEffect, useState} from 'react';
import {API_ENDPOINTS, GET} from '../../api';
import {Product} from '../../models';

const useSearchProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isFetchingMoreProducts, setIsFetchingMoreProducts] = useState(false);
  const [name, setName] = useState('');

  const fetchProducts = async (page = 1, name?: string) => {
    if (page > totalPages || isLoading) return;

    if (page === 1) setIsLoading(true);
    else setIsFetchingMoreProducts(true);

    try {
      const response = await GET(API_ENDPOINTS.SEARCH_PRODUCTS, {
        name: name,
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
            item.product_info,
          ),
      );

      setProducts(prevProducts =>
        page === 1 ? fetchedProducts : [...prevProducts, ...fetchedProducts],
      );

      setCurrentPage(response.current_page);
      setTotalPages(response.last_page);
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE FETCHING SEARCH PRODUCTS:', error);
      setProducts([]);
    } finally {
      setIsLoading(false);
      setIsFetchingMoreProducts(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!name) return;

    const delaySearch = setTimeout(() => {
      setName(name);
      fetchProducts(1, name);
      setIsLoading(true);
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [name]);

  return {
    products,
    isLoading,
    fetchProducts,
    fetchMoreProducts: () => fetchProducts(currentPage + 1),
    isFetchingMoreProducts,
    name,
    setName,
  };
};
export default useSearchProduct;
