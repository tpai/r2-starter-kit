import React from "react";
import {
    Router,
    Route,
    IndexRoute,
    browserHistory,
} from "react-router";

import App from "App";
import ArticleList from "containers/ArticleList";
import ArticleContent from "containers/ArticleContent";
import store from "redux/store";

import * as listActions from "redux/modules/list";
import * as postActions from "redux/modules/post";

const init = {
    list: ( nextState, replace, cb ) => {
        const { dispatch } = store;
        dispatch( listActions.getList( cb ) );
    },
    content: ( nextState, replace, cb ) => {
        const { dispatch } = store;
        dispatch( listActions.getList( () => {
            store.dispatch( postActions.getPost( nextState.params.id, cb ) );
        } ) );
    },
};

const routes = (
    <Route
      path="/"
      component={ App }
    >
        <IndexRoute
          component={ ArticleList }
          onEnter={ init.list }
        />
        <Route
          path="/posts/:id"
          component={ ArticleContent }
          onEnter={ init.content }
        />
    </Route>
);

function AppRouter() {
    return (
        <Router history={ browserHistory } routes={ routes } />
    );
}

export default AppRouter;
