import {ActionTypes} from '../../../constants';
import {ChangeLanguageAction} from '../../types';

export const changeLanguageActions = (
  languageCode: string,
): ChangeLanguageAction => ({
  type: ActionTypes.CHANGE_LANGUAGE,
  languageCode,
});
