import {ActionTypes} from '../../../constants';
import {SetThemeAction, ThemeState} from '../../types/themeTypes';

const initialState: ThemeState = {
  theme: 'light',
};

export default function themeReducer(
  state = initialState,
  action: SetThemeAction,
): ThemeState {
  switch (action.type) {
    case ActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
}
