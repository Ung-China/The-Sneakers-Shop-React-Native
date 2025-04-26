const getTranslatedStatus = (
  status: string | null,
  t: (key: string) => string,
): string => {
  if (status === null) return t('pickup');

  switch (status) {
    case 'pending':
      return t('pending');
    case 'confirmed':
      return t('confirmed');
    case 'packaging':
      return t('packed');
    case 'out_for_delivery':
      return t('shipped');
    case 'delivered':
      return t('completed');
    case 'cancelled':
      return t('canceled');
    case 'failed_to_deliver':
      return t('failedToDeliver');
    default:
      return status || t('unknown');
  }
};

export default getTranslatedStatus;
