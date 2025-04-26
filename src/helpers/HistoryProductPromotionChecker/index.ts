const HistoryProductPromotionChecker = ({
  price,
  discount,
  discountType,
}: {
  price: number;
  discount: number;
  discountType: string;
}) => {
  if (!discountType || discount === 0) {
    return {
      hasProductPromotion: false,
      finalPrice: price,
    };
  }

  const finalPrice =
    discountType === 'amount'
      ? price - discount
      : price - (price * discount) / 100;

  return {
    hasProductPromotion: true,
    finalPrice,
  };
};

export default HistoryProductPromotionChecker;
