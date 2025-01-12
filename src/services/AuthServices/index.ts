import {API_ENDPOINTS, POST} from '../../api';
import {User} from '../../models';

const login = async (user: User) => {
  try {
    const response = await POST(API_ENDPOINTS.LOGIN, {
      uid: user.uid,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      image: user.image,
      password: user.password,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error('ERROR DURING LOGIN:', error);
  }
};

const generateOTP = async (phoneNumber: string) => {
  console.log('CHECK PHONE NUMBER WHEN CALL API', phoneNumber);
  try {
    const response = await POST(API_ENDPOINTS.GENERATE_OTP, {
      phone_number: phoneNumber,
    });
    return response;
  } catch (error) {
    console.error('ERROR DURING GENERATE OTP:', error);
  }
};
export {login, generateOTP};
