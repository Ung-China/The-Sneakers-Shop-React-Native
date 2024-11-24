import {ColorSchemeName} from 'react-native';
import {SetThemeAction} from '../../types/themeTypes';
import {ActionTypes} from '../../../constants';

export const setThemeActions = (theme: ColorSchemeName): SetThemeAction => ({
  type: ActionTypes.SET_THEME,
  theme,
});
