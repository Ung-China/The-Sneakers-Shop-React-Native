import {ActionTypes} from '../../../constants';
import {CartItem} from '../../../models';

export interface CartState {
  cart: CartItem[];
}

interface AddToCartAction {
  type: typeof ActionTypes.ADD_TO_CART;
  payload: CartItem;
}

interface IncreaseQuantityAction {
  type: typeof ActionTypes.INCREASE_QUANTITY;
  payload: {productId: number; variantId: number};
}

interface DecreaseQuantityAction {
  type: typeof ActionTypes.DECREASE_QUANTITY;
  payload: {productId: number; variantId: number};
}

interface RemoveFromCartAction {
  type: typeof ActionTypes.REMOVE_FROM_CART;
  payload: {productId: number; variantId: number};
}

interface ClearCartAction {
  type: typeof ActionTypes.CLEAR_CART;
}

export type CartActionTypes =
  | AddToCartAction
  | IncreaseQuantityAction
  | DecreaseQuantityAction
  | RemoveFromCartAction
  | ClearCartAction;
