/* global document, module */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './AppRouter';
import store from 'redux/store';
import 'index.css';

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('react'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./AppRouter', () => {
    render(App);
  });
}
