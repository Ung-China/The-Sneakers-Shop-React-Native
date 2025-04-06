import {useCallback, useState} from 'react';
import {Validator} from '../../helpers';
import {generateOTP} from '../../services';
import usePhoneNumberExistence from '../usePhoneNumberExistence';
import {useTranslation} from 'react-i18next';
import {API_ENDPOINTS, POST} from '../../api';
import axios from 'axios';

const useCreateAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('');

  const [OTP, setOTP] = useState('');
  const [errorOTP, setErrorOTP] = useState('');

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

  const sendOTP = async () => {
    if (!validatePhoneNumber()) {
      return;
    }

    const numberWithCountryCode = Validator.numberWithCountryCode(phoneNumber);

    console.log('CHECK PHONE NUMBER', phoneNumber);

    // setIsModalVisible(true);

    // if (numberWithCountryCode === '85599168168') {
    //   setResponseOTP('123456');
    //   setIsModalVisible(true);
    //   return;
    // }

    try {
      setIsLoading(true);

      const response = await POST(API_ENDPOINTS.SEND_OTP, {
        phone: numberWithCountryCode,
      });

      console.log('CHECK RESPONSE', response);
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE SEND OTP', error);
    } finally {
      setIsLoading(false);
      setIsModalVisible(true);
    }
  };

  return {
    isLoading,
    isModalVisible,
    isVerified,
    sendOTP,

    toggleModal,

    setPhoneNumber,
    phoneNumber,
    errorPhoneNumber,

    setOTP,
    OTP,
    errorOTP,
  };
};

export default useCreateAccount;
