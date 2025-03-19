import {ActionTypes} from '../../../constants';
import {CartActionTypes, CartState} from '../../types';

const initialState: CartState = {
  cart: [],
};

const cartReducer = (
  state = initialState,
  action: CartActionTypes,
): CartState => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const newItem = action.payload;

      // Check if item with the same id and variantId already exists in the cart
      const existingItem = state.cart.find(
        item => item.id === newItem.id && item.variantId === newItem.variantId,
      );

      let updatedCart;
      if (existingItem) {
        // If item exists, increase quantity
        updatedCart = state.cart.map(item =>
          item.id === newItem.id && item.variantId === newItem.variantId
            ? {...item, quantity: item.quantity + 1} // Increase quantity
            : item,
        );
      } else {
        // If item doesn't exist, add it with default quantity 1
        updatedCart = [...state.cart, {...newItem, quantity: 1}];
      }

      return {...state, cart: updatedCart};
    }

    case ActionTypes.INCREASE_QUANTITY: {
      const {productId, variantId} = action.payload;
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === productId && item.variantId === variantId
            ? {...item, quantity: item.quantity + 1} // Increase quantity
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
              ? {...item, quantity: item.quantity - 1} // Decrease quantity
              : item,
          )
          .filter(item => item.quantity > 0), // Remove items with 0 quantity
      };
    }

    case ActionTypes.REMOVE_FROM_CART: {
      const {productId, variantId} = action.payload;
      return {
        ...state,
        cart: state.cart.filter(
          item => !(item.id === productId && item.variantId === variantId), // Remove item matching productId and variantId
        ),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
