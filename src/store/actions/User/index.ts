import {ActionTypes} from '../../../constants';
import {User} from '../../../models';
import {
  FetchUserSuccessAction,
  LoginUserSuccessAction,
  LogoutUserSuccessAction,
} from '../../types';

export const fetchUserSuccess = (user: User): FetchUserSuccessAction => ({
  type: ActionTypes.FETCH_USER_SUCCESS,
  payload: user,
});

export const loginUserSuccess = (user: User): LoginUserSuccessAction => ({
  type: ActionTypes.LOGIN_USER_SUCCESS,
  payload: user,
});

export const logoutUserSuccess = (): LogoutUserSuccessAction => ({
  type: ActionTypes.LOGOUT_USER_SUCCESS,
});
