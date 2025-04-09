import {ProfileMenu} from '../../models';
import {Icons} from '../../constants';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../types';
import {useCallback, useRef, useState} from 'react';
import {Alert} from 'react-native';
import useTheme from '../useTheme';
import useUser from '../useUser';
const useProfile = () => {
  const {t} = useTranslation();
  const {theme, setColorTheme} = useTheme();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');
  const {isLoggedIn} = useUser();

  const menuItems = [
    new ProfileMenu(9, 'Cart', Icons.CART, t('cart'), Icons.ARROWRIGHT, false),
    new ProfileMenu(
      1,
      'OrderHistory',
      Icons.HISTORY,
      t('orderHistory'),
      Icons.ARROWRIGHT,
      false,
    ),
    new ProfileMenu(
      2,
      'Notification',
      Icons.NOTIFICATION,
      t('notifications'),
      Icons.ARROWRIGHT,
      false,
    ),
    new ProfileMenu(
      3,
      'Favorite',
      Icons.HEART,
      t('favorite'),
      Icons.ARROWRIGHT,
      false,
    ),
    new ProfileMenu(
      4,
      'Appearance',
      Icons.APPEARANCE,
      t('appearance'),
      undefined,
      false,
      true,
    ),
    new ProfileMenu(
      5,
      'Language',
      Icons.TRANSLATE,
      t('language'),
      Icons.ARROWRIGHT,
      false,
    ),
    new ProfileMenu(
      6,
      'AboutUs',
      Icons.ME,
      t('aboutUs'),
      Icons.ARROWRIGHT,
      false,
    ),
    new ProfileMenu(7, 'Login', undefined, t('login'), undefined, false),
    new ProfileMenu(
      8,
      'DeleteAccountModal',
      undefined,
      t('deleteMyAccount'),
      undefined,
      true,
    ),
  ];

  const toggleTheme = (value: boolean) => {
    setIsDarkMode(value);
    setColorTheme(value ? 'dark' : 'light');
  };

  const handleLoginSheetChanges = useCallback((index: number) => {
    console.log('Login Sheet changed to index', index);
  }, []);

  const handleNavigateToEditProfile = useCallback(() => {
    navigation.navigate('EditProfile');
  }, []);

  const handleNavigateToLogin = useCallback(() => {
    navigation.navigate('LoginScreen');
  }, []);

  const handleNavigateToCreateAccount = useCallback(() => {
    navigation.navigate('CreateAccount');
  }, []);

  const handleNavigateToForgotPassword = useCallback(() => {
    navigation.navigate('ForgotPassword');
  }, []);

  const handleMenuPress = useCallback(
    (screenName?: string) => {
      if (screenName === 'Login') {
        handleNavigateToLogin();
      } else if (screenName === 'DeleteAccountModal') {
        Alert.alert('Delete Account');
      } else if (screenName === 'Appearance') {
        toggleTheme(!isDarkMode);
      } else {
        navigation.navigate(screenName);
      }
    },
    [navigation, toggleTheme, handleNavigateToLogin, isDarkMode],
  );

  return {
    menuItems,
    toggleTheme,
    isDarkMode,
    handleMenuPress,
    handleNavigateToEditProfile,
    handleLoginSheetChanges,
    handleNavigateToCreateAccount,
    handleNavigateToForgotPassword,
  };
};

export default useProfile;
