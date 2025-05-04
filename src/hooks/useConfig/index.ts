import {useState} from 'react';
import {API_ENDPOINTS, GET} from '../../api';

const useConfig = () => {
  const [isLoading, setIsLoading] = useState(true);

  const getConfig = async () => {
    try {
      setIsLoading(true);

      const response = await GET(API_ENDPOINTS.GET_CONFIG);

      console.log('CHECK RESPONSE', response);
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE GET CONFIG', error);
    } finally {
      setIsLoading(false);
    }
  };
  return {getConfig};
};

export default useConfig;
