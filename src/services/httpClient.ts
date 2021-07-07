import axios, { AxiosInstance } from 'axios';
// import applyConverters from 'axios-case-converter';
import env from 'react-native-config';

interface Headers {
  Accept: string;
  'Content-Type': string;
}

const axiosClient = (): AxiosInstance => {
  const headers: Headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const client = axios.create({
    baseURL: env.API_BASE_URL,
    headers,
  });

  return client;
};

export default axiosClient;
