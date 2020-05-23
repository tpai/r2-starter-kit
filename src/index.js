import 'core-js/shim';
import 'regenerator-runtime/runtime';

import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import NotFound from '~/components/pages/NotFound';
import store from '~/redux/store';
import history from '~/redux/history';

const Repos = lazy(() => import('~/components/pages/Repos/container'));
const Loading = lazy(() => import('~/components/overlays/Loading/container'));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Suspense fallback={null}>
        <Loading />
        <Switch>
          <Route exact path="/" component={Repos} />
          <Route path="/users/:user" component={Repos} />
          <Route render={() => <NotFound />} />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react'),
);

if (module.hot) {
  module.hot.accept();
}
