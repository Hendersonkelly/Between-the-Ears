import React from 'react';
import ReactDOM from 'react-dom';


import  {createStore} from 'redux'
import {Provider} from 'react-redux';

import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {PersistGate} from 'redux-persist/integration/react'

// import 'semantic-ui-css/semantic.min.css'
import App from './App';


import Movies from './components/Movies';
import Rides from './components/Rides';
import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import rootReducer from './reducers/index'

import Experiences from './components/Experiences';

const persistConfig ={
  key:'root',
  storage: storage
}



const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let persistor = persistStore(store)
ReactDOM.render(
  
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <BaseLayout>
          <Routes>
            <Route path="/" element={<App/>}/>
            
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/rides' element={<Rides/>}/>
            <Route path='/experiences' element={<Experiences/>}/>

          </Routes>
          </BaseLayout>
        </Router>
      </PersistGate>
    </Provider>
 ,
  document.getElementById('root')
);


