// import {Notification} from '../../models';

// const ProductPromotionChecker = ({
//   productId,
//   defaultPrice,
//   promotions,
//   brandId,
// }: {
//   productId: number;
//   defaultPrice: number;
//   promotions: Notification[];
//   brandId: number;
// }) => {
//   const promotion = promotions.find(promo => {
//     const isProductPromo = promo.products?.some(
//       product => product.id === productId,
//     );
//     const isBrandPromo =
//       promo.promotionType === 'brand' &&
//       promo.brands?.some(brand => Number(brand.id) === Number(brandId));

//     return isProductPromo || isBrandPromo;
//   });

//   if (!promotion) {

//     return {
//       hasProductPromotion: false,
//       productDiscountAmount: 0,
//       finalPrice: defaultPrice,
//       discountType: null,
//       discountValue: 0,
//     };
//   }

//   const isFixedDiscount = promotion.discountType === 'amount';
//   const discountValue = isFixedDiscount ? promotion.amount : promotion.percent;

//   const finalPrice = isFixedDiscount
//     ? defaultPrice - discountValue
//     : defaultPrice - (defaultPrice * discountValue) / 100;

//   return {
//     hasProductPromotion: true,
//     finalPrice,
//     discountType: isFixedDiscount ? 'amount' : 'percent',
//     discountValue,
//   };
// };

// export default ProductPromotionChecker;

import {Notification} from '../../models';

interface Variant {
  id: number;
  price: number;
  quantity: number;
  size: string;
}

const ProductPromotionChecker = ({
  productId,
  defaultPrice,
  promotions,
  brandId,
  variants = [],
}: {
  productId: number;
  defaultPrice: number;
  promotions: Notification[];
  brandId: number;
  variants?: Variant[];
}) => {
  const promotion = promotions.find(promo => {
    const isProductPromo = promo.products?.some(
      product => product.id === productId,
    );
    const isBrandPromo =
      promo.promotionType === 'brand' &&
      promo.brands?.some(brand => Number(brand.id) === Number(brandId));

    return isProductPromo || isBrandPromo;
  });

  if (!promotion) {
    return {
      hasProductPromotion: false,
      productDiscountAmount: 0,
      finalPrice: defaultPrice,
      discountType: null,
      discountValue: 0,
      variantsAfterCheckPromotion: variants.map(variant => ({
        ...variant,
        finalPrice: variant.price,
        hasVariantPromotion: false,
      })),
    };
  }

  const isFixedDiscount = promotion.discountType === 'amount';
  const discountValue = isFixedDiscount ? promotion.amount : promotion.percent;

  const applyDiscount = (price: number) =>
    isFixedDiscount
      ? price - discountValue
      : price - (price * discountValue) / 100;

  return {
    hasProductPromotion: true,
    productDiscountAmount: discountValue,
    finalPrice: applyDiscount(defaultPrice),
    discountType: isFixedDiscount ? 'amount' : 'percent',
    discountValue,
    variantsAfterCheckPromotion: variants.map(variant => {
      const finalPrice = applyDiscount(variant.price);
      return {
        ...variant,
        finalPrice,
        hasVariantPromotion: finalPrice !== variant.price,
      };
    }),
  };
};

export default ProductPromotionChecker;
