import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {CartItem} from '../../models';
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../../store/actions';

const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  const addProductToCart = (product: CartItem) => {
    dispatch(addToCart(product));
  };

  const removeProductFromCart = (productId: number, variantId: number) => {
    dispatch(removeFromCart(productId, variantId));
  };

  const increaseProductQuantity = (productId: number, variantId: number) => {
    dispatch(increaseQuantity(productId, variantId));
  };

  const decreaseProductQuantity = (productId: number, variantId: number) => {
    dispatch(decreaseQuantity(productId, variantId));
  };

  return {
    addProductToCart,
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    cartItems,
  };
};

export default useCart;
