import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import * as constants from './constants';

const initialState = {
  data: null,
};

interface ReduxCall {
  type: string;
  payload: { data: any };
}

const appReducer = (state = initialState, { type, payload }: ReduxCall) => {
  switch (type) {
    case constants.SET_DATA: {
      return {
        ...state,
        data: payload.data,
      };
    }
    default:
      return state;
  }
};

const appPersistConfig = {
  key: 'app',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

export default persistReducer(appPersistConfig, appReducer);
