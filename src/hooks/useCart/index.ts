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
import {StockChecker} from '../../helpers';
import Snackbar from 'react-native-snackbar';
import {useTranslation} from 'react-i18next';
import {colors} from '../../constants/colors/colorTypes';
import {Fonts} from '../../constants';

const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {t} = useTranslation();
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

  const increaseProductQuantity = (
    productId: number,
    variantId: number,
    stock: number,
  ) => {
    const {isOutOfStock, isCartExceedStock} = StockChecker({
      cartItems: cartItems,
      productId: productId,
      variantId: variantId,
      stock: stock,
    });

    if (isOutOfStock) {
      Snackbar.show({
        text: t('outOfStock'),
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.error,
        fontFamily: Fonts.REGULAR,
      });
      return;
    }

    if (isCartExceedStock) {
      Snackbar.show({
        text: t('notEnoughStock'),
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.error,
        fontFamily: Fonts.REGULAR,
      });
      return;
    }

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

  const cartItemsCount = cartItems.length;

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
    cartItemsCount,
  };
};

export default useCart;
