import React from 'react';
import ReactDOM from 'react-dom/client';

import  {createStore} from 'redux'
import {Provider} from 'react-redux';

import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {PersistGate} from 'redux-persist/integration/react'
import './index.css';
import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const persistConfig ={
  key:'root',
  storage: storage
}



const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let persistor = persistStore(store)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <BaseLayout>
          <Routes>
            <Route path="/" element={<App/>}/>
          </Routes>
          </BaseLayout>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


