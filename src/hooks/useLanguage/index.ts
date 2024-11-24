import {useSelector, useDispatch} from 'react-redux';
import {Icons} from '../../constants';
import {Language} from '../../models';
import {useTranslation} from 'react-i18next';
import {useCallback} from 'react';
import {changeLanguageActions} from '../../store/actions';
import {AppDispatch, RootState} from '../../store';

const useLanguage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {t, i18n} = useTranslation();

  const languages = [
    new Language(1, t('cambodia'), 'kh', Icons.CAMBODIA),
    new Language(2, t('english'), 'en', Icons.UK),
  ];

  const languageCode = useSelector(
    (state: RootState) => state.language.languageCode,
  );

  const isSelected = useCallback(
    (code: string) => code === languageCode,
    [languageCode],
  );

  const onLanguageSelected = useCallback(
    (code: string) => {
      if (code === languageCode) return;
      dispatch(changeLanguageActions(code));
      i18n.changeLanguage(code);
    },
    [languageCode],
  );

  return {
    languages,
    languageCode,
    isSelected,
    onLanguageSelected,
  };
};

export default useLanguage;
