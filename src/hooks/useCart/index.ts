import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {CartItem} from '../../models';
import {addToCart} from '../../store/actions';

const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  const addProductToCart = (product: CartItem) => {
    dispatch(addToCart(product));
  };

  return {addProductToCart, cartItems};
};

export default useCart;
