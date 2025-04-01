import {useCallback, useState} from 'react';
import {Validator} from '../../helpers';
import {generateOTP} from '../../services';
import usePhoneNumberExistence from '../usePhoneNumberExistence';
import {useTranslation} from 'react-i18next';

const useCreateAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [responseOTP, setResponseOTP] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('');

  const {checkPhoneNumberExistence} = usePhoneNumberExistence();
  const {t} = useTranslation();

  console.log('CHECK RESPONSE OTP', responseOTP);

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

  const sendOTP = async (phoneNumber: string) => {
    // if (!validatePhoneNumber()) {
    //   return;
    // }

    // const numberWithCountryCode = Validator.numberWithCountryCode(phoneNumber);

    // if (numberWithCountryCode === '85599168168') {
    //   setResponseOTP('123456');
    //   setIsModalVisible(true);
    //   return;
    // }
    // setIsLoading(true);
    // try {
    //   const phoneExists = await checkPhoneNumberExistence(
    //     numberWithCountryCode,
    //   );

    //   if (phoneExists) {
    //     setErrorPhoneNumber(t('phonenumberalreadyusedbyanotheraccount'));
    //     setIsLoading(false);
    //     return;
    //   }

    //   const response = await generateOTP(numberWithCountryCode);
    //   setResponseOTP(response.otp);
    // } catch (error) {
    //   console.log('[DEBUG] ERROR WHILE SEND OTP', error);
    // } finally {
    //   setIsLoading(false);
    // }
    setIsModalVisible(true);
  };

  return {
    isLoading,
    isModalVisible,
    isVerified,
    sendOTP,
    responseOTP,
    phoneNumber,
    errorPhoneNumber,
    setPhoneNumber,
    toggleModal,
  };
};

export default useCreateAccount;
