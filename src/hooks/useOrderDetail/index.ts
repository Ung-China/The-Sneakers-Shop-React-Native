import {useTranslation} from 'react-i18next';
import {Icons} from '../../constants';
import {TrackingStep} from '../../models';

const useOrderDetail = () => {
  const {t} = useTranslation();
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
  return {trackingSteps};
};
export default useOrderDetail;
