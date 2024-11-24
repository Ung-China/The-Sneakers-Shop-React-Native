import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import useLanguage from '../useLanguage';
import useTheme from '../useTheme';
import {setThemeActions} from '../../store/actions';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';

const useStartUp = () => {
  const {i18n} = useTranslation();
  const {languageCode} = useLanguage();
  const {theme} = useTheme();
  const dispatch = useDispatch<AppDispatch>();

  const [isInitialized, setIsInitialized] = useState(false);

  const initializeLanguage = async () => {
    await i18n.changeLanguage(languageCode);
  };

  const initializeTheme = async () => {
    dispatch(setThemeActions(theme));
  };

  const ensureInitialization = async () => {
    await initializeLanguage();
    await initializeTheme();

    setIsInitialized(true);
  };

  useEffect(() => {
    ensureInitialization();
  }, []);

  return {
    isInitialized,
  };
};

export default useStartUp;
