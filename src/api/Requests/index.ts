import axios from 'axios';
import {ApiRequestProps} from '../../types';

const apiInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 5000,
});

const apiRequest = async ({
  method,
  endpoint,
  data = {},
  params = {},
  headers = {},
}: ApiRequestProps & {headers?: any}) => {
  try {
    const config: any = {
      method,
      url: endpoint,
      params,
      headers,
    };

    if (['post', 'put', 'patch', 'delete'].includes(method)) {
      if (data instanceof FormData) {
        config.data = data;
        config.headers = {
          ...headers,
          'Content-Type': 'multipart/form-data',
        };
      } else {
        config.data = data;
      }
    }

    const response = await apiInstance(config);
    return response.data;
  } catch (error: any) {
    console.error('API Request Error:', error);
    throw new Error(error.response?.data?.message || 'Network or server error');
  }
};

const POST = (
  endpoint: string,
  data: object | FormData,
  params = {},
  headers = {},
) => apiRequest({method: 'post', endpoint, data, params, headers});

const GET = (endpoint: string, params = {}, headers = {}) =>
  apiRequest({method: 'get', endpoint, params, headers});

const UPDATE = (endpoint: string, data: object, params = {}) =>
  apiRequest({method: 'put', endpoint, data, params});

const DELETE = (endpoint: string, params = {}) =>
  apiRequest({method: 'delete', endpoint, params});

export {POST, GET, UPDATE, DELETE};
