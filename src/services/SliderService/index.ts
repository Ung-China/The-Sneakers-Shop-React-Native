import {API_ENDPOINTS, GET} from '../../api';

const getSliders = async () => {
  try {
    const response = await GET(API_ENDPOINTS.GET_SLIDERS);
    console.log('[DEBUG] RESPONSE:', response);
    return response;
  } catch (error) {
    console.error('[DEBUG] ERROR DURING GET SLIDERS:', error);
  }
};

export {getSliders};
