import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { ReduxCall, State } from './types';
import * as constants from './constants';

const initialState: State = { token: '', error: '', loading: false };

const authReducer = (state = initialState, { type, payload }: ReduxCall): State => {
  switch (type) {
    case constants.SIGN_IN_REQUEST: {
      return { ...state, loading: true, token: '', error: '' };
    }
    case constants.SIGN_IN_SUCCESS: {
      return { ...state, loading: false, ...payload };
    }
    case constants.SIGN_IN_ERROR: {
      return { ...state, loading: false, ...payload };
    }
    case constants.SIGN_UP_REQUEST: {
      return { ...state, loading: true, token: '', error: '' };
    }
    case constants.SIGN_UP_SUCCESS: {
      return { ...state, loading: false, ...payload };
    }
    case constants.SIGN_UP_ERROR: {
      return { ...state, loading: false, ...payload };
    }
  }

  return state;
};

const authPersistConfig = {
  key: 'app',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

export default persistReducer(authPersistConfig, authReducer);
