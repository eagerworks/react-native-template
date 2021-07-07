import axios from 'axios';
// import applyConverters from 'axios-case-converter';
import env from 'react-native-config';

const axiosClient = () => {
  console.log(env.API_BASE_URL);
  let headers: any = {
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
