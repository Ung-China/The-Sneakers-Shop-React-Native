import {ActionTypes} from '../../../constants';
import {User} from '../../../models';

export interface UserState {
  user: User | null;
  isLoggedIn: boolean;
}

export interface FetchUserSuccessAction {
  type: typeof ActionTypes.FETCH_USER_SUCCESS;
  payload: User;
}

export interface LoginUserSuccessAction {
  type: typeof ActionTypes.LOGIN_USER_SUCCESS;
  payload: User;
}

export interface LogoutUserSuccessAction {
  type: typeof ActionTypes.LOGOUT_USER_SUCCESS;
}
