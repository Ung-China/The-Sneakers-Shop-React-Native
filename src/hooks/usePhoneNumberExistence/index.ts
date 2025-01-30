import {CheckPhoneNumberExistence} from '../../services';
import {Validator} from '../../helpers';

const usePhoneNumberExistence = () => {
  const checkPhoneNumberExistence = async (phoneNumber: string) => {
    const numberWithCountryCode = Validator.numberWithCountryCode(phoneNumber);

    try {
      const response = await CheckPhoneNumberExistence(numberWithCountryCode);
      return response.exists;
    } catch (error) {
      console.log(
        '[DEBUG] ERROR WHILE CHECK PHONE NUMBER EXISTENCE OTP',
        error,
      );
    }
  };
  return {checkPhoneNumberExistence};
};
export default usePhoneNumberExistence;
