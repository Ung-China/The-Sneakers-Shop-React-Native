import {ActionTypes} from '../../../constants';
import {CartItem} from '../../types/Cart';

export const addToCart = (item: CartItem) => ({
  type: ActionTypes.ADD_TO_CART,
  payload: item,
});

export const increaseQuantity = (id: number) => ({
  type: ActionTypes.INCREASE_QUANTITY,
  payload: id,
});

export const decreaseQuantity = (id: number) => ({
  type: ActionTypes.DECREASE_QUANTITY,
  payload: id,
});
export const removeFromCart = (id: number) => ({
  type: ActionTypes.REMOVE_FROM_CART,
  payload: id,
});
