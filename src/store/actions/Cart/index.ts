import {ActionTypes} from '../../../constants';
import {CartItem} from '../../../models';

export const addToCart = (item: CartItem) => ({
  type: ActionTypes.ADD_TO_CART,
  payload: item,
});

export const increaseQuantity = (productId: number, variantId: number) => ({
  type: ActionTypes.INCREASE_QUANTITY,
  payload: {productId, variantId},
});

export const decreaseQuantity = (productId: number, variantId: number) => ({
  type: ActionTypes.DECREASE_QUANTITY,
  payload: {productId, variantId},
});

export const removeFromCart = (productId: number, variantId: number) => ({
  type: ActionTypes.REMOVE_FROM_CART,
  payload: {productId, variantId},
});

export const clearCart = () => ({
  type: ActionTypes.CLEAR_CART,
});
