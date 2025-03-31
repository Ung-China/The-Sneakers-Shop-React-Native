import {useMemo} from 'react';
import {CartItem, Notification} from '../../models';
import {ProductPromotionChecker} from '../../helpers';

const useCalculateTotalPrice = (
  products: CartItem[],
  promotions: Notification[],
  deliveryFee: number = 0,
) => {
  const totalPrice = useMemo(() => {
    return products.reduce((total, product) => {
      const {finalPrice} = ProductPromotionChecker({
        productId: product.id,
        defaultPrice: product.price,
        promotions,
        brandId: product.brandId,
      });

      return total + finalPrice * product.quantity;
    }, 0);
  }, [products, promotions]);

  const totalPriceWithDelivery = useMemo(() => {
    return totalPrice + deliveryFee;
  }, [totalPrice, deliveryFee]);

  const totalDiscount = useMemo(() => {
    return products.reduce((total, product) => {
      const {discountValue} = ProductPromotionChecker({
        productId: product.id,
        defaultPrice: product.price,
        promotions,
        brandId: product.brandId,
      });

      return total + discountValue * product.quantity;
    }, 0);
  }, [products, promotions]);

  return {totalPrice, totalPriceWithDelivery, totalDiscount};
};

export default useCalculateTotalPrice;
