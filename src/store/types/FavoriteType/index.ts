import {ActionTypes} from '../../../constants';
import {Product} from '../../../models';

export interface FavoriteState {
  favorites: Product[];
}

export interface SetFavoritesAction {
  type: typeof ActionTypes.SET_FAVORITES;
  payload: Product[];
}

export interface ToggleFavoriteAction {
  type: typeof ActionTypes.TOGGLE_FAVORITE;
  payload: Product;
}

export type FavoriteActionTypes = SetFavoritesAction | ToggleFavoriteAction;
