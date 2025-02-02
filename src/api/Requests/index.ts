import axios from 'axios';
import {ApiRequestProps} from '../../types';
import API_ENDPOINTS from '../Endpoints';

const apiInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 5000,
});

const apiRequest = async ({
  method,
  endpoint,
  data = {},
  params = {},
}: ApiRequestProps) => {
  try {
    const config: any = {
      method,
      url: endpoint,
      params,
    };

    if (['post', 'put', 'patch', 'delete'].includes(method)) {
      config.data = data;
    }

    const response = await apiInstance(config);
    return response.data;
  } catch (error: any) {
    console.error('API Request Error:', error);
    throw new Error(error.response?.data?.message || 'Network or server error');
  }
};

const POST = (endpoint: string, data: object, params = {}) =>
  apiRequest({method: 'post', endpoint, data, params});

const GET = (endpoint: string, params = {}) =>
  apiRequest({method: 'get', endpoint, params});

const UPDATE = (endpoint: string, data: object, params = {}) =>
  apiRequest({method: 'put', endpoint, data, params});

const DELETE = (endpoint: string, params = {}) =>
  apiRequest({method: 'delete', endpoint, params});

export {POST, GET, UPDATE, DELETE};
