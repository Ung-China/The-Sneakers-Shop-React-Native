import {useCallback, useState} from 'react';
import {Validator} from '../../helpers';
import {useTranslation} from 'react-i18next';
import {API_ENDPOINTS, POST} from '../../api';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import Snackbar from 'react-native-snackbar';
import {colors} from '../../constants/colors/colorTypes';
import {Fonts} from '../../constants';
import {User} from '../../models';
import {loginUserSuccess} from '../../store/actions';
import {useNavigation} from '@react-navigation/native';
import {BottomTabParamList} from '../../types';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

const useCreateAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('');
  const [OTP, setOTP] = useState('');
  const [errorOTP, setErrorOTP] = useState('');
  const [resOTP, setResOTP] = useState('');
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true);

  const {t} = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigation =
    useNavigation<BottomTabNavigationProp<BottomTabParamList>>();

  const toggleModal = () => {
    setIsModalVisible(prev => !prev);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const clearErrorPhoneNumber = useCallback(() => {
    setErrorPhoneNumber('');
  }, []);

  const validatePhoneNumber = useCallback(() => {
    let valid = true;
    clearErrorPhoneNumber();

    if (phoneNumber === '') {
      valid = false;
      setErrorPhoneNumber(t('phoneisrequired'));
    } else if (Validator.validatePhoneNumber(phoneNumber)) {
      valid = false;
      setErrorPhoneNumber(t('pleaseenteravalidphonenumber'));
    }

    return valid;
  }, [phoneNumber]);

  const clearErrorOTP = useCallback(() => {
    setErrorOTP(' ');
  }, []);

  const validateOTP = useCallback(() => {
    let valid = true;
    clearErrorOTP();

    if (OTP === '') {
      valid = false;
      setErrorOTP(t('otpisrequired'));
    } else if (OTP.length !== 6) {
      valid = false;
      setErrorOTP(t('otpmustbe6'));
    }

    return valid;
  }, [OTP]);

  const clearErrorCreateAccount = useCallback(() => {
    setErrorName('');
    setErrorPassword('');
    setErrorConfirmPassword('');
  }, []);

  const validateCreateAccount = useCallback(() => {
    let valid = true;
    clearErrorCreateAccount();

    if (name === '') {
      valid = false;
      setErrorName(t('Nameisrequired'));
    }

    if (password === '') {
      valid = false;
      setErrorPassword(t('Passwordisrequired'));
    } else if (password.length < 8) {
      valid = false;
      setErrorPassword(t('passwordmustbeatleast8characters'));
    }

    if (confirmPassword === '') {
      valid = false;
      setErrorConfirmPassword(t('Confirmpasswordisrequired'));
    } else if (confirmPassword.length < 8) {
      valid = false;
      setErrorPassword(t('passwordmustbeatleast8characters'));
    }

    return valid;
  }, [name, password, confirmPassword]);

  const sendOTP = async () => {
    if (!validatePhoneNumber()) {
      return;
    }

    const numberWithCountryCode = Validator.numberWithCountryCode(phoneNumber);

    try {
      setIsLoading(true);

      const response = await POST(API_ENDPOINTS.SEND_OTP, {
        phone: numberWithCountryCode,
      });

      console.log('[DEBUG] OTP RESPONSE', response);

      setResOTP(response.otp);
      setIsModalVisible(true);
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE SEND OTP', error);
      Snackbar.show({
        text: t('phoneNumberAlreadyUsed'),
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.error,
        fontFamily: Fonts.REGULAR,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOTP = async () => {
    if (!validateOTP()) {
      return;
    }

    try {
      setIsLoading(true);

      if (OTP !== String(resOTP).trim()) {
        setErrorOTP(t('pleaseentervalidotp'));
        return;
      }

      setIsVerified(true);
      setErrorOTP('');
      setIsModalVisible(false);
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE VERIFY OTP', error);
    } finally {
      setIsLoading(false);
    }
  };

  const createAccount = async () => {
    if (!validateCreateAccount()) {
      return;
    }
    try {
      setIsLoading(true);

      const numberWithCountryCode =
        Validator.numberWithCountryCode(phoneNumber);

      const response = await POST(API_ENDPOINTS.CREATE_ACCOUNT, {
        phone: numberWithCountryCode,
        otp: OTP,
        name: name,
        password: password,
        confirm_password: confirmPassword,
      });

      const user = new User(
        response.customer_info.id,
        response.customer_info.name,
        response.customer_info.email,
        response.customer_info.phone,
        response.customer_info.image_url,
        response.customer_info.token,
        response.customer_info.is_google_login,
      );

      dispatch(loginUserSuccess(user));
      navigation.navigate('Profile');
      Snackbar.show({
        text: t('accountCreated'),
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.success,
        fontFamily: Fonts.REGULAR,
      });
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE SEND OTP', error);
      Snackbar.show({
        text: t('accountCreationFailed'),
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
    isModalVisible,
    isVerified,
    sendOTP,
    verifyOTP,
    toggleModal,
    setPhoneNumber,
    phoneNumber,
    errorPhoneNumber,
    setOTP,
    OTP,
    errorOTP,
    createAccount,

    name,
    setName,
    errorName,
    password,
    setPassword,
    errorPassword,
    confirmPassword,
    setConfirmPassword,
    errorConfirmPassword,

    togglePasswordVisibility,
    passwordVisible,
    toggleConfirmPasswordVisibility,
    confirmPasswordVisible,
  };
};

export default useCreateAccount;
