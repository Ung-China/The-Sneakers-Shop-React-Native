import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {CartItem} from '../../models';
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../../store/actions';
import {useState} from 'react';

const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{
    id: number;
    variantId: number;
  } | null>(null);

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

  const handleDeletePress = (id: number, variantId: number) => {
    setSelectedItem({id, variantId});
    setAlertVisible(true);
  };

  const confirmDelete = () => {
    if (selectedItem) {
      removeProductFromCart(selectedItem.id, selectedItem.variantId);
      setSelectedItem(null);
    }
    setAlertVisible(false);
  };

  return {
    addProductToCart,
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    cartItems,
    handleDeletePress,
    confirmDelete,
    isAlertVisible,
    setAlertVisible,
  };
};

export default useCart;
