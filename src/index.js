import 'core-js/shim';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import NotFound from '~/components/pages/NotFound';
import store from '~/redux/store';
import history from '~/redux/history';
import asyncContainerLoader from '~/utils/asyncContainerLoader';

const Repos = asyncContainerLoader('pages/Repos');
const Loading = asyncContainerLoader('overlays/Loading');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Loading />
        <Switch>
          <Route path="/" component={Repos} exact />
          <Route path="/users/:user" component={Repos} />
          <Route render={() => <NotFound />} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react'),
);

if (module.hot) {
  module.hot.accept();
}
