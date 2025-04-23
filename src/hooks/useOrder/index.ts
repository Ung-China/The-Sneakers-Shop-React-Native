import {useEffect, useState} from 'react';
import {API_ENDPOINTS, GET} from '../../api';
import Order from '../../models/Order';
import useUser from '../useUser';

const useOrder = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isFetchingMoreOrders, setIsFetchingMoreOrders] = useState(false);

  const {user} = useUser();

  const fetchOrders = async (page = 1) => {
    if (page > totalPages || isLoading) return;

    if (page === 1) setIsLoading(true);
    else setIsFetchingMoreOrders(true);

    try {
      const response = await GET(
        API_ENDPOINTS.GET_ORDER_HISTORY,
        {page: page},
        {
          Authorization: `Bearer ${user?.token}`,
        },
      );

      const fetchedOrders = response.data.data.map(
        (item: any) =>
          new Order(
            item.id,
            item.invoice_ref,
            item.created_at,
            item.order_status,
            Number(item.total),
          ),
      );

      setOrders(prevOrders =>
        page === 1 ? fetchedOrders : [...prevOrders, ...fetchedOrders],
      );
      setCurrentPage(response.data.current_page);
      setTotalPages(response.data.last_page);
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE FETCHING ORDERS:', error);
    } finally {
      setIsLoading(false);
      setIsFetchingMoreOrders(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return {
    activeTabIndex,
    setActiveTabIndex,
    isLoading,
    orders,
    isFetchingMoreOrders,
    fetchOrders,
    fetchMoreOrders: () => fetchOrders(currentPage + 1),
  };
};

export default useOrder;
