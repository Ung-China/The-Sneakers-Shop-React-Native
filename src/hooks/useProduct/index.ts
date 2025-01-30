// import {useState} from 'react';

// const useProduct = () => {
//   const [activeVariant, setActiveVariant] = useState(0);

//   const toggleVariant = (id: number) => {
//     setActiveVariant(prev => (prev === id ? 0 : id));
//   };
//   return {
//     activeVariant,
//     setActiveVariant,
//     toggleVariant,
//   };
// };

// export default useProduct;

import {useEffect, useState} from 'react';
import {API_ENDPOINTS, GET} from '../../api';
import {Product} from '../../models';

const useProduct = () => {
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
      const response = await GET(API_ENDPOINTS.GET_PRODUCTS, {
        params: {
          page: page,
        },
      });

      const fetchedProducts = response.data.map(
        (item: {
          id: number;
          name: string;
          price: number;
          rating: string;
          image: string;
        }) =>
          new Product(item.id, item.name, item.price, item.rating, item.image),
      );

      setProducts(prevProducts =>
        page === 1 ? fetchedProducts : [...prevProducts, ...fetchedProducts],
      );
      setCurrentPage(response.current_page);
      setTotalPages(response.last_page);
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE FETCHING PRODUCTS:', error);
    } finally {
      setIsLoading(false);
      setIsFetchingMoreProducts(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    isLoading,
    fetchProducts,
    fetchMoreProducts: () => fetchProducts(currentPage + 1),
    isFetchingMoreProducts,
  };
};

export default useProduct;
