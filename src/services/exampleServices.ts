import axiosClient from './httpClient';

type Response = {};

class exampleServices {
  static getExample = () => axiosClient().get<Response>('example');

  static getByIdExample = (id: number | string) => axiosClient().get<Response>(`example/${id}`);

  static postExample = (data: any) => axiosClient().post<Response>('example', { data });
}

export default exampleServices;
