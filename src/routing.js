import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import asyncContainerLoader from 'utils/asyncContainerLoader';

const Posts = asyncContainerLoader('Posts');
const Post = asyncContainerLoader('Post');

export const history = createHistory();

const Root = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={Posts} exact />
        <Route path="/post/:id" component={Post} />
        <Route render={() => <h1>404 not found</h1>} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Root;
