import * as constants from './constants';

import SignInInfo from '@models/SignInInfo';

export const signIn = (userInfo: SignInInfo) => ({
  type: constants.SIGN_IN_REQUEST,
  payload: { userInfo },
});
export const signInSuccess = (token: string) => ({
  type: constants.SIGN_IN_SUCCESS,
  payload: { token },
});
export const signInError = (error: string) => ({
  type: constants.SIGN_IN_ERROR,
  payload: { error },
});

export const signUp = (userInfo: SignInInfo) => ({
  type: constants.SIGN_UP_REQUEST,
  payload: { userInfo },
});
export const signUpSuccess = (token: string) => ({
  type: constants.SIGN_UP_SUCCESS,
  payload: { token },
});
export const signUpError = (error: string) => ({
  type: constants.SIGN_UP_ERROR,
  payload: { error },
});
