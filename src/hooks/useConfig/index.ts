import {useEffect, useState} from 'react';
import {API_ENDPOINTS, GET} from '../../api';
import Config from '../../models/Config';

const useConfig = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [configs, setConfigs] = useState<Config | null>(null);

  const getConfig = async () => {
    try {
      setIsLoading(true);

      const response = await GET(API_ENDPOINTS.GET_CONFIG);

      const parsedConfig = new Config(response);
      setConfigs(parsedConfig);
    } catch (error) {
      console.log('[DEBUG] ERROR WHILE GET CONFIG', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getConfig();
  }, []);

  return {getConfig, configs, isLoading};
};

export default useConfig;
