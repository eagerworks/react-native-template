import SignInInfo from '@models/SignInInfo';
import axiosClient from './httpClient';

import SignInResponse from '@models/SignInResponse';

class AuthServices {
  static singIn = (userInfo: SignInInfo) => axiosClient().post<SignInResponse>('login', userInfo);
  static signUp = (userInfo: SignInInfo) =>
    axiosClient().post<SignInResponse>('register', userInfo);
}

export default AuthServices;
