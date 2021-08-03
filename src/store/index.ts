/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import env from 'react-native-config';

import authReducer from './authReducer';

import rootSaga from './sagas';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  authReducer,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (env.NODE_ENV === 'development' &&
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose)) ||
  compose;

export const store: any = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
// export const store: any = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export type RootState = ReturnType<typeof rootReducer>;

rootSaga.map((saga: any) => sagaMiddleware.run(saga));

export const persistor = persistStore(store);
