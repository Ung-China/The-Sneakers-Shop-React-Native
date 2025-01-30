import {API_ENDPOINTS, GET} from '../../api';

const getShoesSliders = async () => {
  try {
    const response = await GET(API_ENDPOINTS.GET_SHOES_SLIDER);
    return response;
  } catch (error) {
    console.error('[DEBUG] ERROR DURING GET SLIDERS:', error);
  }
};

export {getShoesSliders};
