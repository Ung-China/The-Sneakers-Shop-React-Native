import {ProfileMenu} from '../../models';
import {Icons} from '../../constants';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../types';
import {useCallback, useRef, useState} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {Alert} from 'react-native';
import useTheme from '../useTheme';
const useProfile = () => {
  const {t} = useTranslation();
  const {theme, setColorTheme} = useTheme();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const bottomSheetLogincModalRef = useRef<BottomSheetModal>(null);

  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

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
    new ProfileMenu(7, 'LoginModal', undefined, t('login'), undefined, true),
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

  const toggleLoginSheet = useCallback(() => {
    bottomSheetLogincModalRef.current?.present();
  }, []);

  const handleLoginSheetChanges = useCallback((index: number) => {
    console.log('Login Sheet changed to index', index);
  }, []);

  const handleLoginSheetDismiss = useCallback(() => {
    bottomSheetLogincModalRef.current?.close();
  }, []);

  const handleNavigateToEditProfile = useCallback(() => {
    navigation.navigate('EditProfile');
  }, []);

  const handleNavigateToCreateAccount = useCallback(() => {
    bottomSheetLogincModalRef.current?.close();
    navigation.navigate('CreateAccount');
  }, []);

  const handleNavigateToForgotPassword = useCallback(() => {
    bottomSheetLogincModalRef.current?.close();
    navigation.navigate('ForgotPassword');
  }, []);

  const handleMenuPress = useCallback(
    (screenName?: string) => {
      if (screenName === 'LoginModal') {
        toggleLoginSheet();
      } else if (screenName === 'DeleteAccountModal') {
        Alert.alert('Delete Account');
      } else if (screenName === 'Appearance') {
        toggleTheme(!isDarkMode);
      } else {
        navigation.navigate(screenName);
      }
    },
    [navigation, toggleTheme, toggleLoginSheet, isDarkMode],
  );

  return {
    menuItems,
    toggleTheme,
    isDarkMode,
    handleMenuPress,
    handleNavigateToEditProfile,
    bottomSheetLogincModalRef,
    handleLoginSheetChanges,
    handleLoginSheetDismiss,
    handleNavigateToCreateAccount,
    handleNavigateToForgotPassword,
  };
};

export default useProfile;
