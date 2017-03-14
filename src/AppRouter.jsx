import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    IndexRoute
} from 'react-router-dom';

import App from 'App';
import ArticleList from 'containers/ArticleList';
import ArticleContent from 'containers/ArticleContent';
import store from 'redux/store';

function AppRouter() {
    return (
        <Router>
            <div>
                <Route
                  exact
                  path="/"
                  component={ArticleList}
                />
                <Route
                  path="/posts/:id"
                  component={ArticleContent}
                />
            </div>
        </Router>
    );
}

export default AppRouter;
