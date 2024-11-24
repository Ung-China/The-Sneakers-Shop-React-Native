import {ColorSchemeName} from 'react-native';
import {ActionTypes} from '../../constants';

export interface ThemeState {
  theme: ColorSchemeName;
}

export interface SetThemeAction {
  type: typeof ActionTypes.SET_THEME;
  theme: ColorSchemeName;
}
