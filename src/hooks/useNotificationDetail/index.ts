import {useEffect, useState} from 'react';
import {API_ENDPOINTS, GET} from '../../api';
import {Notification} from '../../models';

const useNotificationDetail = (id?: number) => {
  const [notificationDetail, setNotificationDetail] =
    useState<Notification | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchedNotificationDetail = async () => {
    setIsLoading(true);

    try {
      const response = await GET(API_ENDPOINTS.GET_PROMOTION_DETAIL, {
        id: id,
      });

      const fetchedNotificationDetail = new Notification(
        response.id,
        response.title,
        response.description,
        response.images,
      );

      setNotificationDetail(fetchedNotificationDetail);
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE FETCHING NOTIFICATION DETAIL:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchedNotificationDetail();
  }, [id]);

  return {isLoading, notificationDetail, fetchedNotificationDetail};
};

export default useNotificationDetail;
