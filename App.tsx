import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '@store';

import MainStackNavigator from '@navigation/MainStackNavigator';

import './src/i18n';

const App: React.FC<{}> = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <MainStackNavigator />
    </PersistGate>
  </Provider>
);

export default App;
