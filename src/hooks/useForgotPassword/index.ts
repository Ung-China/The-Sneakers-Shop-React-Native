import {useCallback, useState} from 'react';
import {Validator} from '../../helpers';
import {useTranslation} from 'react-i18next';
import {API_ENDPOINTS, POST} from '../../api';
import Snackbar from 'react-native-snackbar';
import {colors} from '../../constants/colors/colorTypes';
import {Fonts} from '../../constants';
import {User} from '../../models';
import {loginUserSuccess} from '../../store/actions';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import {useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../../types';
const useForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('');
  const [OTP, setOTP] = useState('');
  const [errorOTP, setErrorOTP] = useState('');
  const [resOTP, setResOTP] = useState('');
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

  const clearErrorChangePassword = useCallback(() => {
    setErrorPassword('');
    setErrorConfirmPassword('');
  }, []);

  const validateChangePassword = useCallback(() => {
    let valid = true;
    clearErrorChangePassword();

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
  }, [password, confirmPassword]);

  const sendOTP = async () => {
    if (!validatePhoneNumber()) {
      return;
    }

    const numberWithCountryCode = Validator.numberWithCountryCode(phoneNumber);

    try {
      setIsLoading(true);

      const response = await POST(API_ENDPOINTS.SEND_OTP_FORGOT_PASSWORD, {
        phone: numberWithCountryCode,
      });

      console.log('[DEBUG] OTP RESPONSE', response);

      setResOTP(response.otp);
      setIsModalVisible(true);
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE SEND OTP', error);
      Snackbar.show({
        text: t('userNotFound'),
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.error,
        fontFamily: Fonts.REGULAR,
      });
    } finally {
      setIsLoading(false);
    }
  };

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

      setIsModalVisible(false);
      setErrorOTP('');
      setIsVerified(true);
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE VERIFY OTP', error);
    } finally {
      setIsLoading(false);
    }
  };

  const changePassword = async () => {
    if (!validateChangePassword()) {
      return;
    }
    try {
      setIsLoading(true);

      const numberWithCountryCode =
        Validator.numberWithCountryCode(phoneNumber);

      console.log('CHECK PHONE', numberWithCountryCode);
      console.log('CHECK OTP', OTP);
      console.log('CEHCK PASSWORD', password);
      console.log('CHECK CONFIRM PASSWORD', confirmPassword);

      const response = await POST(API_ENDPOINTS.CHANGE_PASSWORD, {
        phone: numberWithCountryCode,
        otp: OTP,
        new_password: password,
        confirm_password: confirmPassword,
      });

      navigation.navigate('Profile');
      Snackbar.show({
        text: t('passwordChanged'),
        textColor: 'white',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.success,
        fontFamily: Fonts.REGULAR,
      });
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE CHANGE PASSWORD', error);
      Snackbar.show({
        text: t('passwordChangeFailed'),
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

    changePassword,

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
export default useForgotPassword;
