import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

import App from 'containers/App';
import PostList from 'containers/PostList';
import PostContent from 'containers/PostContent';
import store from 'redux/store';

import { SET_NAV_TITLE } from 'redux/modules/navTitle';
import * as listActions from 'redux/modules/list';
import * as postActions from 'redux/modules/post';

const init = {
    list: function(nextState, replace, cb) {
        const { dispatch } = store;
        dispatch({ type: SET_NAV_TITLE, title: 'Post List' });
        dispatch(listActions.getList(cb));
    },
    content: function(nextState, replace, cb) {
        const { dispatch } = store;
        dispatch({ type: SET_NAV_TITLE, title: 'Post Content' });
        dispatch(listActions.getList(() => {
            store.dispatch(postActions.getPost(nextState.params.id, cb));
        }));
    }
};

const routes = (
    <Route
        path="/"
        component={App}>
        <IndexRoute
            component={PostList}
            onEnter={init.list} />
        <Route
            path="/posts/:id"
            component={PostContent}
            onEnter={init.content} />
    </Route>
);

class AppRouter extends Component {
    render() {
        return (
            <Router history={browserHistory} routes={routes} />
        );
    }
}

export default AppRouter;
