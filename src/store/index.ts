/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import authReducer from './authReducer';

import rootSaga from './sagas';

const rootReducer = combineReducers({
  authReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store: any = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export type RootState = ReturnType<typeof rootReducer>;

rootSaga.map((saga: any) => sagaMiddleware.run(saga));

export const persistor = persistStore(store);
