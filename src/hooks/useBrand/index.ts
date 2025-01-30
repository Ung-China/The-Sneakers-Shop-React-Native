import {useEffect, useState} from 'react';
import {API_ENDPOINTS, GET} from '../../api';
import {Brand} from '../../models';

const useBrand = () => {
  const [brands, setBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const fetchBrands = async (page = 1) => {
    if (page > totalPages || isLoading) return;

    if (page === 1) setIsLoading(true);
    else setIsFetchingMore(true);

    try {
      const response = await GET(API_ENDPOINTS.GET_BRANDS, {
        page: page,
      });

      const fetchedBrands = response.data.map(
        (item: {id: number; name: string; image: string}) =>
          new Brand(item.id, item.name, item.image),
      );

      setBrands(prevBrands =>
        page === 1 ? fetchedBrands : [...prevBrands, ...fetchedBrands],
      );
      setCurrentPage(response.current_page);
      setTotalPages(response.last_page);
    } catch (error) {
      console.error('[DEBUG] ERROR WHILE FETCHING BRAND:', error);
    } finally {
      setIsLoading(false);
      setIsFetchingMore(false);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return {
    brands,
    isLoading,
    fetchBrands,
    fetchMoreBrands: () => fetchBrands(currentPage + 1),
    isFetchingMore,
  };
};

export default useBrand;
