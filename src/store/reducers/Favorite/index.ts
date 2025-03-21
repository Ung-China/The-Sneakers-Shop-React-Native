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
      const item = action.payload;
      const exists = state.favorites.some(favorite => favorite.id === item.id);

      let updatedFavorites: Product[];

      if (exists) {
        updatedFavorites = state.favorites.filter(
          favorite => favorite.id !== item.id,
        );
      } else {
        updatedFavorites = [...state.favorites, item];
      }

      return {...state, favorites: updatedFavorites};
    }

    default:
      return state;
  }
};

export default favoriteReducer;
