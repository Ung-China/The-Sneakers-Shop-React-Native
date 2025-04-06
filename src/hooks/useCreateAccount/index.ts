import {useCallback, useState} from 'react';
import {Validator} from '../../helpers';
import {useTranslation} from 'react-i18next';
import {API_ENDPOINTS, POST} from '../../api';

const useCreateAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('');
  const [OTP, setOTP] = useState('');
  const [errorOTP, setErrorOTP] = useState('');
  const [resOTP, setResOTP] = useState('123456');
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  const {t} = useTranslation();

  const toggleModal = () => {
    setIsModalVisible(prev => !prev);
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
    }

    if (confirmPassword === '') {
      valid = false;
      setErrorConfirmPassword(t('Confirmpasswordisrequired'));
    }

    return valid;
  }, [name, password, confirmPassword]);

  const sendOTP = async () => {
    // if (!validatePhoneNumber()) {
    //   return;
    // }

    // const numberWithCountryCode = Validator.numberWithCountryCode(phoneNumber);

    // try {
    //   setIsLoading(true);

    //   const response = await POST(API_ENDPOINTS.SEND_OTP, {
    //     phone: numberWithCountryCode,
    //   });

    //   setResOTP(response.otp);
    // } catch (error) {
    //   console.log('[DEBUG] ERROR WHILE SEND OTP', error);
    // } finally {
    //   setIsLoading(false);
    //   setIsModalVisible(true);
    // }
    setIsModalVisible(true);
  };

  const verifyOTP = async () => {
    if (!validateOTP()) {
      return;
    }
    try {
      setIsLoading(true);

      if (OTP !== resOTP) {
        setErrorOTP(t('pleaseentervalidotp'));
        return;
      }

      setIsVerified(true);
      toggleModal();
      setErrorOTP('');
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE SEND OTP', error);
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
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE SEND OTP', error);
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
  };
};

export default useCreateAccount;
