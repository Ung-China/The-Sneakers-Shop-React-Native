const GetTranslatedStatus = (
  status: string | null,
  t: (key: string) => string,
): string => {
  if (status === null || status === 'pickup') return t('pickup');

  switch (status) {
    case 'pending':
      return t('pending');
    case 'preparing':
      return t('preparing');
    case 'packed':
      return t('packed');
    case 'shipped':
      return t('shipped');
    case 'completed':
      return t('completed');
    case 'cancelled':
      return t('cancelled');
    case 'ready_to_pickup':
      return t('readyToPickup');
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
