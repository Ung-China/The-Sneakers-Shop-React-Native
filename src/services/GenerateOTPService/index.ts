import {API_ENDPOINTS, POST} from '../../api';

const generateOTP = async (phoneNumber: string) => {
  try {
    const response = await POST(API_ENDPOINTS.GENERATE_OTP, {
      phone_number: phoneNumber,
    });
    return response;
  } catch (error) {
    console.error('[DEBUG] ERROR DURING GENERATE OTP:', error);
  }
};
export {generateOTP};
