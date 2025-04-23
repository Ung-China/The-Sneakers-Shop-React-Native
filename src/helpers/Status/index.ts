import {useTranslation} from 'react-i18next';

const {t} = useTranslation();
const getTranslatedStatus = (status: string): string => {
  switch (status) {
    case 'pending':
      return t('pending');
    case 'prepare':
      return t('prepare');
    case 'delivery':
      return t('delivery');
    case 'delivered':
      return t('delivered');
    case 'cancelled':
      return t('cancelled');
    case 'total':
      return t('total');
    default:
      return status;
  }
};

export default getTranslatedStatus;
