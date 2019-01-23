/** @format */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

const AppWithStore = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App /> 
    </PersistGate>
  </Provider>
)


AppRegistry.registerComponent(appName, () => AppWithStore);
