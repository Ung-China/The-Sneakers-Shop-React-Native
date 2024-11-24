import {ActionTypes} from '../../../constants';
import {ChangeLanguageAction, LanguageState} from '../../types/languageTypes';

const initialState: LanguageState = {
  languageCode: 'en',
};

export default function languageReducer(
  state = initialState,
  action: ChangeLanguageAction,
): LanguageState {
  switch (action.type) {
    case ActionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        languageCode: action.languageCode,
      };
    default:
      return state;
  }
}
