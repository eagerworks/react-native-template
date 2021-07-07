import { call, take, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as constants from './constants';
import * as actions from './actions';

import exampleServices from '@services/exampleServices';

function* fetchData() {
  while (true) {
    yield take(constants.FETCH_DATA);

    try {
      const data: Response = yield call(exampleServices.getExample);

      yield put(actions.setData(data));
    } catch (error) {
      Alert.alert('Something went wrong...', error);
    }
  }
}

export default [fetchData];
