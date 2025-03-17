import Notification from '../../models/Notification';

const ProductPromotionChecker = ({
  productId,
  defaultPrice,
  promotions,
}: {
  productId: number;
  defaultPrice: number;
  promotions: Notification[];
}) => {
  console.log('CHECK PRODUCT ID', productId);
  console.log('CHECK DEFAULT PRICE', defaultPrice);
  console.log('CHECK PROMOTION', promotions);

  const promotion = promotions.find(promo =>
    promo.products?.some(product => product.id === productId),
  );

  if (!promotion) {
    return {
      hasProductPromotion: false,
      productDiscountAmount: 0,
    };
  }

  const isFixedDiscount = promotion.discountType === 'amount';
  const discountValue = isFixedDiscount
    ? parseFloat(promotion.amount ?? '0')
    : (parseFloat(promotion.percent ?? '0') / 100) * defaultPrice;

  return {
    hasProductPromotion: true,
    productDiscountAmount: discountValue,
  };
};

export default ProductPromotionChecker;
