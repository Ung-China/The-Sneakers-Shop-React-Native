import {useTranslation} from 'react-i18next';
import {Icons} from '../../constants';
import {TrackingStep, OrderDetail} from '../../models';
import useUser from '../useUser';
import {useEffect, useState} from 'react';
import {API_ENDPOINTS, GET} from '../../api';

const useOrderDetail = (id?: number) => {
  const {t} = useTranslation();
  const {user} = useUser();

  console.log('CHECK USER TOKEN', user?.token);
  console.log('ORDER ID', id);

  const [isLoading, setIsLoading] = useState(false);
  const [orderDetail, setOrderDetail] = useState<OrderDetail | null>(null);

  const trackingSteps = [
    new TrackingStep(
      1,
      Date.now(),
      Icons.PENDING,
      t('pending'),
      t('watingForAdminConfirmed'),
    ),
    new TrackingStep(
      2,
      null,
      Icons.CONFIRMED,
      t('confirmed'),
      t('orderHasBeenConfirmedByAdmin'),
    ),
    new TrackingStep(
      3,
      null,
      Icons.PREPARING,
      t('preparing'),
      t('orderIsPreparing'),
    ),
    new TrackingStep(
      4,
      null,
      Icons.DELIVERY,
      t('delivery'),
      t('orderIsDelivering'),
    ),
    new TrackingStep(
      5,
      null,
      Icons.COMPLETED,
      t('completed'),
      t('orderCompleted'),
    ),
  ];

  const fetchedOrderDetail = async () => {
    if (!id) return;

    setIsLoading(true);
    try {
      const response = await GET(
        API_ENDPOINTS.GET_ORDER_HISTORY_DETAIL,
        {
          order_id: id,
        },
        {
          Authorization: `Bearer ${user?.token}`,
        },
      );

      console.log('CHECK RESPONSE', response.data.tracking);

      if (response.success && response.data) {
        const order = new OrderDetail(response.data);
        setOrderDetail(order);
      }
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE FETCHING ORDER DETAIL:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchedOrderDetail();
  }, [id]);

  return {
    trackingSteps,
    isLoading,
    orderDetail,
    fetchedOrderDetail,
  };
};

export default useOrderDetail;
