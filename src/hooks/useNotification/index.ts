import {useEffect, useState} from 'react';
import {API_ENDPOINTS, GET} from '../../api';
import {Notification} from '../../models';

const useNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isFetchingMoreNotifications, setIsFetchingMoreNotifications] =
    useState(false);

  const fetchNotifications = async (page = 1) => {
    if (page > totalPages || isLoading) return;

    if (page === 1) setIsLoading(true);
    else setIsFetchingMoreNotifications(true);

    try {
      const response = await GET(API_ENDPOINTS.GET_PROMOTIONS, {
        page: page,
      });

      console.log('CHECK NOTIFICATION', response.data);

      const fetchedNotifications = response.data.map(
        (item: any) =>
          new Notification(
            item.id,
            item.title,
            item.description,
            item.images,
            item.promotion_type,
            item.discount_type,
            Number(item.amount),
            Number(item.percent),
            item.brands || [],
            item.products || [],
          ),
      );

      setNotifications(prevNotifications =>
        page === 1
          ? fetchedNotifications
          : [...prevNotifications, ...fetchedNotifications],
      );

      setCurrentPage(response.current_page);
      setTotalPages(response.last_page);
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE FETCHING NOTIFICATIONS:', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      setIsFetchingMoreNotifications(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return {
    notifications,
    isLoading,
    fetchNotifications,
    fetchMoreNotifications: () => fetchNotifications(currentPage + 1),
    isFetchingMoreNotifications,
  };
};
export default useNotification;
