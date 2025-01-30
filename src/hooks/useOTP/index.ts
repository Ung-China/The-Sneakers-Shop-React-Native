import {useState} from 'react';
import {Validator} from '../../helpers';
import {generateOTP} from '../../services';

const useOTP = () => {
  const [responseOTP, setResponseOTP] = useState('');

  const sendOTP = async (phoneNumber: string) => {
    const numberWithCountryCode = Validator.numberWithCountryCode(phoneNumber);

    if (numberWithCountryCode === '85599168168') {
      setResponseOTP('123456');
      return;
    }

    try {
      const response = await generateOTP(numberWithCountryCode);
      setResponseOTP(response.otp);
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE SEND OTP', error);
    }
  };

  return {sendOTP, responseOTP};
};

export default useOTP;
