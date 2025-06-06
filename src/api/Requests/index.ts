import axios from 'axios';
import {ApiRequestProps} from '../../types';

const apiInstance = axios.create({
  baseURL: 'https://thesneakersshop.site/api',
  timeout: 1000000,
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

const DELETE = (
  endpoint: string,
  data: object | FormData,
  params = {},
  headers = {},
) => apiRequest({method: 'delete', endpoint, data, params, headers});

export {POST, GET, UPDATE, DELETE};
