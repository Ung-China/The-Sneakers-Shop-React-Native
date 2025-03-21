import {ActionTypes} from '../../../constants';
import {Product} from '../../../models';
import {FavoriteActionTypes} from '../../types';

export const setFavorites = (item: Product): FavoriteActionTypes => ({
  type: ActionTypes.SET_FAVORITES,
  payload: item,
});

export const toggleFavorite = (product: Product): FavoriteActionTypes => ({
  type: ActionTypes.TOGGLE_FAVORITE,
  payload: product,
});
