import {ColorSchemeName} from 'react-native';
import {ActionTypes} from '../../../constants';
import {SetThemeAction} from '../../types';

export const setThemeActions = (theme: ColorSchemeName): SetThemeAction => ({
  type: ActionTypes.SET_THEME,
  theme,
});
