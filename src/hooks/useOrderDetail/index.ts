import {useTranslation} from 'react-i18next';
import {useEffect, useState} from 'react';
import {Icons} from '../../constants';
import {TrackingStep, OrderDetail} from '../../models';
import useUser from '../useUser';
import {API_ENDPOINTS, GET} from '../../api';

const useOrderDetail = (id?: number) => {
  const {t} = useTranslation();
  const {user} = useUser();

  const [isLoading, setIsLoading] = useState(false);
  const [orderDetail, setOrderDetail] = useState<OrderDetail | null>(null);
  const [trackingSteps, setTrackingSteps] = useState<TrackingStep[]>([]);

  const steps = [
    {
      key: 'pending',
      icon: Icons.PENDING,
      title: t('pending'),
      desc: t('watingForAdminConfirmed'),
    },
    {
      key: 'preparing',
      icon: Icons.PREPARING,
      title: t('preparing'),
      desc: t('orderIsPreparing'),
    },
    {
      key: 'packed',
      icon: Icons.PACKED,
      title: t('packed'),
      desc: t('orderIsPacked'),
    },
    {
      key: 'shipped',
      icon: Icons.DELIVERY,
      title: t('shipped'),
      desc: t('orderIsShipped'),
    },
    {
      key: 'completed',
      icon: Icons.COMPLETED,
      title: t('completed'),
      desc: t('orderCompleted'),
    },
    {
      key: 'ready_to_pickup',
      icon: Icons.SHOP,
      title: t('readyToPickup'),
      desc: t('orderIsReadyToPickup'),
    },
    {
      key: 'cancelled',
      icon: Icons.CANCELED,
      title: t('cancelled'),
      desc: t('orderCancelled'),
    },
  ];

  const fetchedOrderDetail = async () => {
    if (!id) return;

    setIsLoading(true);
    try {
      const response = await GET(
        API_ENDPOINTS.GET_ORDER_HISTORY_DETAIL,
        {order_id: id},
        {
          Authorization: `Bearer ${user?.token}`,
        },
      );

      if (response.success && response.data) {
        const order = new OrderDetail(response.data);
        setOrderDetail(order);

        const trackingData = response.data.tracking ?? [];

        const mappedSteps = trackingData
          .map((trackItem: any, index: number) => {
            const matchedStep = steps.find(
              step => step.key === trackItem.status?.toLowerCase(),
            );

            if (!matchedStep) return null;

            return new TrackingStep(
              index + 1,
              new Date(trackItem.timestamp).getTime(),
              matchedStep.icon,
              matchedStep.title,
              matchedStep.desc,
            );
          })
          .filter(Boolean);

        setTrackingSteps(mappedSteps);
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
    isLoading,
    orderDetail,
    trackingSteps,
    fetchedOrderDetail,
  };
};

export default useOrderDetail;
