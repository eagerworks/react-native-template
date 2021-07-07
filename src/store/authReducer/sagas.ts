import { call, put, take } from 'redux-saga/effects';

import AuthServices from '@services/authServices';

import SignInInfo from '@models/SignInInfo';
import SignInResponse from '@models/SignInResponse';

import * as RootNavigation from '@navigation/RootNavigation';

import * as actions from './actions';
import * as constants from './constants';

function* signIn() {
  while (true) {
    const {
      payload: { userInfo },
    }: { payload: { userInfo: SignInInfo } } = yield take(constants.SIGN_IN_REQUEST);

    try {
      const { token }: SignInResponse = yield call(AuthServices.singIn, userInfo);

      RootNavigation.navigate('Welcome');
      yield put(actions.signInSuccess(token));
    } catch (errorResponse) {
      let errorMessage = '';

      if (errorResponse?.response?.data?.error) {
        const {
          response: {
            data: { error },
          },
        } = errorResponse;
        console.log(error);

        if (typeof error === 'string') {
          errorMessage = error;
        }
      }

      yield put(actions.signInError(errorMessage));
    }
  }
}

function* signUp() {
  while (true) {
    const {
      payload: { userInfo },
    }: { payload: { userInfo: SignInInfo } } = yield take(constants.SIGN_UP_REQUEST);

    try {
      const { token }: SignInResponse = yield call(AuthServices.signUp, userInfo);

      RootNavigation.navigate('Welcome');
      yield put(actions.signUpSuccess(token));
    } catch (errorResponse) {
      let errorMessage = '';

      if (errorResponse?.response?.data?.error) {
        const {
          response: {
            data: { error },
          },
        } = errorResponse;

        if (typeof error === 'string') {
          errorMessage = error;
        }
      }

      yield put(actions.signUpError(errorMessage));
    }
  }
}

export default [signIn, signUp];
