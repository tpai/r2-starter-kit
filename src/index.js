import 'core-js/shim';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import Header from 'components/blocks/Header';
import Footer from 'components/blocks/Footer';
import store from 'redux/store';
import history from 'redux/history';
import asyncContainerLoader from 'utils/asyncContainerLoader';
import styles from './index.scss';

const Posts = asyncContainerLoader('panels/Posts');
const Post = asyncContainerLoader('panels/Post');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className={styles.container}>
        <Route component={Header} />
        <Switch>
          <Route path="/" component={Posts} exact />
          <Route path="/posts/:id" component={Post} />
          <Route render={() => <h1>404 not found</h1>} />
        </Switch>
        <Route component={Footer} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react'),
);

if (module.hot) {
  module.hot.accept();
}
