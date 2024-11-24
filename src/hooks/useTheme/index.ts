import {useDispatch, useSelector} from 'react-redux';
import {ColorSchemeName} from 'react-native';
import {useCallback, useMemo} from 'react';
import {DarkTheme, LightTheme} from '../../constants';
import {setThemeActions} from '../../store/actions';
import {AppDispatch, RootState} from '../../store';
const useTheme = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();

  const setColorTheme = useCallback(
    (themeName: ColorSchemeName) => {
      dispatch(setThemeActions(themeName));
    },
    [dispatch],
  );

  const colors = useMemo(
    () => (theme === 'dark' ? DarkTheme : LightTheme),
    [theme],
  );

  return {
    theme,
    setColorTheme,
    colors,
  };
};

export default useTheme;
