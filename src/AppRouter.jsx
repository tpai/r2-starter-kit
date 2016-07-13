import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import PostList from "containers/PostList";
import PostContent from "containers/PostContent";

import * as listActions from 'redux/modules/list';
import * as postActions from 'redux/modules/post';

class AppRouter extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired
    }
    listInit = (nextState, replace, cb) => {
        const { getList } = this.props.actions;
        getList(cb);
    }
    contentInit = (nextState, replace, cb) => {
        const { getList, getPost } = this.props.actions;
        getList(() => {
            getPost(nextState.params.id, cb);
        });
    }
    render() {
        return (
            <Router history={browserHistory}>
                <Route
                    path="/"
                    component={PostList}
                    onEnter={this.listInit}/>
                <Route
                    path="/posts/:id"
                    component={PostContent}
                    onEnter={this.contentInit} />
            </Router>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            Object.assign({},
                listActions,
                postActions
            ),
        dispatch)
    }
};

export default connect(null, mapDispatchToProps)(AppRouter);
