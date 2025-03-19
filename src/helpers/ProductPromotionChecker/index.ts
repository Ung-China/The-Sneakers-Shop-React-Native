import {Notification} from '../../models';

const ProductPromotionChecker = ({
  productId,
  defaultPrice,
  promotions,
  brandId,
}: {
  productId: number;
  defaultPrice: number;
  promotions: Notification[];
  brandId: number;
}) => {
  const promotion = promotions.find(promo => {
    const isProductPromo = promo.products?.some(
      product => product.id === productId,
    );
    const isBrandPromo =
      promo.promotionType === 'brand' &&
      promo.brands?.some(brand => brand.id === brandId);

    return isProductPromo || isBrandPromo;
  });

  if (!promotion) {
    return {
      hasProductPromotion: false,
      productDiscountAmount: 0,
      finalPrice: defaultPrice,
      discountType: null,
      discountValue: 0,
    };
  }

  const isFixedDiscount = promotion.discountType === 'amount';
  const discountValue = isFixedDiscount
    ? promotion.amount
    : (promotion.percent / 100) * defaultPrice;

  const finalPrice = discountValue
    ? defaultPrice - discountValue
    : defaultPrice;

  return {
    hasProductPromotion: true,
    finalPrice,
    discountType: isFixedDiscount ? 'amount' : 'percent',
    discountValue,
  };
};

export default ProductPromotionChecker;
