import {ActionTypes} from '../../../constants';
import {
  FetchUserSuccessAction,
  LoginUserSuccessAction,
  LogoutUserSuccessAction,
  UserState,
} from '../../types';

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
};

const userReducer = (
  state: UserState = initialState,
  action:
    | FetchUserSuccessAction
    | LoginUserSuccessAction
    | LogoutUserSuccessAction,
): UserState => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: (action as FetchUserSuccessAction).payload,
        isLoggedIn: true,
      };

    case ActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: (action as LoginUserSuccessAction).payload,
        isLoggedIn: true,
      };

    case ActionTypes.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default userReducer;
