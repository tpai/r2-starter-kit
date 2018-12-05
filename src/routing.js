import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import asyncContainerLoader from 'utils/asyncContainerLoader';

const Posts = asyncContainerLoader('Posts');
const Post = asyncContainerLoader('Post');

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Posts} exact />
        <Route path="/post/:id" component={Post} />
        <Route render={() => <h1>404 not found</h1>} />
      </Switch>
    </Router>
  );
};

export default Root;
