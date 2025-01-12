import {useDispatch, useSelector} from 'react-redux';
import {ColorSchemeName} from 'react-native';
import {useCallback, useMemo} from 'react';
import {
  darkMapStyle,
  DarkTheme,
  lightMapStyle,
  LightTheme,
} from '../../constants';
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

  const mapColors = useMemo(
    () => (theme === 'dark' ? darkMapStyle : lightMapStyle),
    [theme],
  );

  return {
    theme,
    setColorTheme,
    colors,
    mapColors,
  };
};

export default useTheme;
