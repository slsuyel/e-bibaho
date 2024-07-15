/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from 'axios';

const API_KEY = '#@!EbibaH$';

export const callApi = async (
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  dataObj: Record<string, any> | null = null,
  headers: Record<string, string> = {},
  useBaseUrl: boolean = true
): Promise<any | null> => {
  const apiUrl = useBaseUrl ? `https://admin.ebibah.com/api/v1${url}` : url;

  headers.Authorization = `Bearer ${localStorage.getItem('token') || ''}`;
  headers['X-API-KEY'] = API_KEY;

  const config: AxiosRequestConfig = {
    method: method,
    url: apiUrl,
    data: dataObj,
    headers: headers,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error('API call error:', error.response);
      return error.response;
    } else {
      console.error('Error making API call:', error.message || error);
      return null;
    }
  }
};
