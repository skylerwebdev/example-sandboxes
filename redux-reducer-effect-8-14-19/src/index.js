import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { titleReducer } from './reducers';

import App from './App';
import './styles.css';
// STEP 1 - Create a store! Pass our store object into the Redux Provider component that is wrapped around <App />
export const store = createStore(titleReducer);

console.log(store);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
