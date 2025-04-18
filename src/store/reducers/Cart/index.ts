import {ActionTypes} from '../../../constants';
import {CartActionTypes, CartState} from '../../types';

const initialState: CartState = {
  cart: [],
};

const cartReducer = (state = initialState, action: any): CartState => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const newItem = action.payload;

      const existingItem = state.cart.find(
        item => item.id === newItem.id && item.variantId === newItem.variantId,
      );

      return {
        ...state,
        cart: existingItem
          ? state.cart.map(item =>
              item.id === newItem.id && item.variantId === newItem.variantId
                ? {...item, quantity: item.quantity + 1}
                : item,
            )
          : [...state.cart, {...newItem, quantity: 1}],
      };
    }

    case ActionTypes.INCREASE_QUANTITY: {
      const {productId, variantId} = action.payload;
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === productId && item.variantId === variantId
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      };
    }

    case ActionTypes.DECREASE_QUANTITY: {
      const {productId, variantId} = action.payload;
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.id === productId && item.variantId === variantId
              ? {...item, quantity: item.quantity - 1}
              : item,
          )
          .filter(item => item.quantity > 0),
      };
    }

    case ActionTypes.REMOVE_FROM_CART: {
      const {productId, variantId} = action.payload;
      return {
        ...state,
        cart: state.cart.filter(
          item => !(item.id === productId && item.variantId === variantId),
        ),
      };
    }
    case ActionTypes.CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
