import 'babel-polyfill';
import _ from 'lodash';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from 'AppRouter';

import store from 'redux/store';

render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('react')
);
