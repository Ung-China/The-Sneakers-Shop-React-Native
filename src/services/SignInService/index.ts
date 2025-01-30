import {API_ENDPOINTS, POST} from '../../api';
import {User} from '../../models';

const singIn = async (user: User) => {
  try {
    const response = await POST(API_ENDPOINTS.LOGIN, {
      uid: user.uid,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      image: user.image,
      password: user.password,
    });
    console.log('CHECK RESPONSE AFTER LOGIN', response);
    return response;
  } catch (error) {
    console.error('[DEBUG] ERROR DURING LOGIN:', error);
  }
};

export {singIn};
