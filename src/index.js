import 'core-js/shim';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Root from './routing';
import store from 'redux/store';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('react'),
);

if (module.hot) {
  module.hot.accept();
}
