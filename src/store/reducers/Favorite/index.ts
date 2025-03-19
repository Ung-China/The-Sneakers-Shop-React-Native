import {FavoriteState, FavoriteActionTypes} from '../../types';
import {ActionTypes} from '../../../constants';
import {Product} from '../../../models';

const initialState: FavoriteState = {
  favorites: [],
};

const favoriteReducer = (
  state = initialState,
  action: FavoriteActionTypes,
): FavoriteState => {
  switch (action.type) {
    case ActionTypes.SET_FAVORITES:
      return {...state, favorites: action.payload};

    case ActionTypes.TOGGLE_FAVORITE: {
      const product = action.payload;
      const exists = state.favorites.some(item => item.id === product.id);

      let updatedFavorites: Product[];

      if (exists) {
        updatedFavorites = state.favorites.filter(
          item => item.id !== product.id,
        );
      } else {
        updatedFavorites = [...state.favorites, product];
      }

      return {...state, favorites: updatedFavorites};
    }

    default:
      return state;
  }
};

export default favoriteReducer;
