const GetTranslatedStatus = (
  status: string | null,
  t: (key: string) => string,
): string => {
  if (status === null || status === 'pickup') return t('pickup');

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
    case 'unpaid':
      return t('unPaid');
    case 'paid':
      return t('paid');
    case 'VET Express':
      return t('VET Express');
    case 'J&T Express':
      return t('J&T Express');
    case 'Capitol Express':
      return t('Capitol Express');
    default:
      return status || t('unknown');
  }
};

export default GetTranslatedStatus;
