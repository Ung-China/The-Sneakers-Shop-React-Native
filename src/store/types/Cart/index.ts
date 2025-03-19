import {ActionTypes} from '../../../constants';

export interface CartItem {
  id: number;
  brandId: number;
  name: string;
  image: string;
  price: number;
  variantName: string;
  variantId: number;
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
}

interface AddToCartAction {
  type: typeof ActionTypes.ADD_TO_CART;
  payload: CartItem;
}

interface IncreaseQuantityAction {
  type: typeof ActionTypes.INCREASE_QUANTITY;
  payload: number;
}

interface DecreaseQuantityAction {
  type: typeof ActionTypes.DECREASE_QUANTITY;
  payload: number;
}

interface RemoveFromCartAction {
  type: typeof ActionTypes.REMOVE_FROM_CART;
  payload: number;
}

export type CartActionTypes =
  | AddToCartAction
  | IncreaseQuantityAction
  | DecreaseQuantityAction
  | RemoveFromCartAction;
