import {CartItem} from '../../models';

const StockChecker = ({
  cartItems,
  productId,
  variantId,
  stock,
}: {
  cartItems: CartItem[];
  productId: number;
  variantId: number;
  stock: number;
}) => {
  const cartItem = cartItems.find(
    item => item.id === productId && item.variantId === variantId,
  );

  const cartQuantity = cartItem?.quantity ?? 0;

  const availableStock = stock - cartQuantity;

  const isOutOfStock = stock <= 0;

  const isCartExceedStock = cartQuantity >= stock;

  return {
    hasStock: !isOutOfStock && !isCartExceedStock,
    isOutOfStock,
    isCartExceedStock,
    stockQuantity: availableStock,
  };
};

export default StockChecker;
