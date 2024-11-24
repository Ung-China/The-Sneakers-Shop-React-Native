import {ActionTypes} from '../../constants';

export interface LanguageState {
  languageCode: string;
}

export interface ChangeLanguageAction {
  type: typeof ActionTypes.CHANGE_LANGUAGE;
  languageCode: string;
}
