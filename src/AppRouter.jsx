import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import ArticleList from 'containers/ArticleList';
import ArticleContent from 'containers/ArticleContent';

function AppRouter() {
    return (
        <Router>
            <div className="ts text container" style={{ margin: '1rem' }}>
                <Route
                  exact
                  path="/"
                  component={ArticleList}
                />
                <Route
                  path="/article/:id"
                  component={ArticleContent}
                />
            </div>
        </Router>
    );
}

export default AppRouter;
