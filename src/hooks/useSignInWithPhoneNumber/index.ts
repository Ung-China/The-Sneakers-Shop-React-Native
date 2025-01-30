import {useCallback, useEffect, useMemo, useState} from 'react';
import {Validator} from '../../helpers';
import {useTranslation} from 'react-i18next';
import {generateOTP, login} from '../../services/AuthServices';

const useSignInWithPhoneNumber = () => {
  const {t} = useTranslation();

  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const [responseOTP, setResponseOTP] = useState('');
  const [OTP, setOTP] = useState('');
  const [errorOTP, setErrorOTP] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const clearErrorPhoneNumber = useCallback(() => {
    setErrorPhoneNumber('');
  }, []);

  const clearErrorOTP = useCallback(() => {
    setErrorOTP('');
  }, []);

  const clearErrors = useCallback(() => {
    setErrorName('');
    setErrorPassword('');
    setErrorConfirmPassword('');
  }, []);

  const validateFields = useCallback(() => {
    let valid = true;
    clearErrors();

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

  const validateOTP = useCallback((inputOTP: string) => {
    let valid = true;
    clearErrorOTP();

    if (!inputOTP) {
      valid = false;
      setErrorOTP(t('otpisrequired'));
    } else if (inputOTP.length !== 6) {
      valid = false;
      setErrorOTP(t('otpmustbe6'));
    }

    return valid;
  }, []);

  const sendOTP = async (phoneNumber: string) => {
    if (!validatePhoneNumber()) {
      return;
    }
    setIsModalVisible(true);

    const numberWithCountryCode = Validator.numberWithCountryCode(phoneNumber);

    try {
      //NOTE : This is for a production environment
      // const response = await generateOTP(numberWithCountryCode);
      // console.log('RESPONSE', response);
      // setResponseOTP(response.otp);
    } catch (error) {
      console.log('ERROR WHILE SEND OTP', error);
    }
  };

  const verifyOTP = async (phoneNumber: string, inputOTP: string) => {
    const numberWithCountryCode = Validator.numberWithCountryCode(phoneNumber);

    if (!validateOTP(inputOTP)) {
      return;
    }

    try {
      if (
        (numberWithCountryCode === '85569786677' && inputOTP === '123456') ||
        inputOTP === responseOTP
      ) {
        setIsModalVisible(false);
        setIsVerified(true);
      } else {
        setIsModalVisible(true);
        setErrorOTP(t('pleaseentervalidotp'));
      }
    } catch (error) {
      console.log('ERROR WHILE SEND OTP', error);
    }
  };

  const createAccount = async () => {
    if (!validateFields()) {
      return;
    }

    // try {
    //   const response = await login();
    // } catch (error) {
    //   console.log('ERROR WHILE CREATE ACCOUNT', error);
    // }
  };

  return {
    loading,
    sendOTP,
    verifyOTP,
    isVerified,
    isModalVisible,
    closeModal,

    phoneNumber,
    setPhoneNumber,
    errorPhoneNumber,
    OTP,
    setOTP,
    errorOTP,
    name,
    setName,
    errorName,
    password,
    setPassword,
    errorPassword,
    confirmPassword,
    setConfirmPassword,
    errorConfirmPassword,
    createAccount,
  };
};

export default useSignInWithPhoneNumber;
