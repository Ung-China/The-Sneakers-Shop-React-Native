import {useCallback, useState} from 'react';
import {Validator} from '../../helpers';
import {useTranslation} from 'react-i18next';
import {API_ENDPOINTS, POST} from '../../api';
import Snackbar from 'react-native-snackbar';
import {colors} from '../../constants/colors/colorTypes';
import {Fonts} from '../../constants';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import {User} from '../../models';
import {loginUserSuccess} from '../../store/actions';
import {useNavigation} from '@react-navigation/native';
import {BottomTabParamList} from '../../types';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);

  const {t} = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigation =
    useNavigation<BottomTabNavigationProp<BottomTabParamList>>();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const clearErrorLogin = useCallback(() => {
    setErrorPhoneNumber('');
  }, []);

  const validateLogin = useCallback(() => {
    let valid = true;
    clearErrorLogin();

    if (phoneNumber === '') {
      valid = false;
      setErrorPhoneNumber(t('phoneisrequired'));
    } else if (Validator.validatePhoneNumber(phoneNumber)) {
      valid = false;
      setErrorPhoneNumber(t('pleaseenteravalidphonenumber'));
    }

    if (password === '') {
      valid = false;
      setErrorPassword(t('passwordisrequired'));
    } else if (password.length < 8) {
      valid = false;
      setErrorPassword(t('passwordmustbeatleast8characters'));
    }

    return valid;
  }, [phoneNumber, password]);

  const login = async () => {
    if (!validateLogin()) {
      return;
    }
    try {
      setIsLoading(true);

      const numberWithCountryCode =
        Validator.numberWithCountryCode(phoneNumber);

      const response = await POST(API_ENDPOINTS.LOGIN, {
        phone: numberWithCountryCode,
        password: password,
      });

      const user = new User(
        response.customer_info.id,
        response.customer_info.name,
        response.customer_info.email,
        response.customer_info.phone,
        response.customer_info.image_url,
        response.customer_info.token,
      );

      dispatch(loginUserSuccess(user));
      navigation.navigate('Profile');

      Snackbar.show({
        text: t('loginSuccess'),
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.success,
        fontFamily: Fonts.REGULAR,
      });
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE CHANGE PASSWORD', error);
      Snackbar.show({
        text: t('loginFailed'),
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.error,
        fontFamily: Fonts.REGULAR,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    phoneNumber,
    setPhoneNumber,
    errorPhoneNumber,
    password,
    setPassword,
    errorPassword,
    passwordVisible,
    togglePasswordVisibility,
    login,
  };
};

export default useLogin;
