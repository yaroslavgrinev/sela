import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './containers';

import './styles';

import configureStore from './store';

const initialState = {};
const store = configureStore(initialState);

const renderApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(renderApp(), document.getElementById('root'));
