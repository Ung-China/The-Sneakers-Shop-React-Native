import {useMemo} from 'react';
import {CartItem, Notification} from '../../models';
import {ProductPromotionChecker} from '../../helpers';

const useCalculateTotalPrice = (
  products: CartItem[],
  promotions: Notification[],
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

  return {totalPrice};
};

export default useCalculateTotalPrice;
