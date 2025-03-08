import {ActionTypes} from '../../../constants';
import {Product} from '../../../models';
import {FavoriteActionTypes} from '../../types';

export const setFavorites = (favorites: Product[]): FavoriteActionTypes => ({
  type: ActionTypes.SET_FAVORITES,
  payload: favorites,
});

export const toggleFavorite = (product: Product): FavoriteActionTypes => ({
  type: ActionTypes.TOGGLE_FAVORITE,
  payload: product,
});
