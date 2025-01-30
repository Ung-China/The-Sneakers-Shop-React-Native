import {API_ENDPOINTS, POST} from '../../api';

const CheckPhoneNumberExistence = async (phoneNumber: string) => {
  try {
    const response = await POST(API_ENDPOINTS.CHECK_PHONE_NUMBER_EXISTENCE, {
      phone_number: phoneNumber,
    });
    return response;
  } catch (error) {
    console.error('[DEBUG] ERROR DURING CHECK PHONE NUMBER EXISTENCE:', error);
  }
};
export {CheckPhoneNumberExistence};
