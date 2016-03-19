import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import PostList from "containers/PostList";
import PostContent from "containers/PostContent";

export default class AppRouter extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={PostList} />
                <Route path="/post/:id" component={PostContent} />
            </Router>
        );
    }
}
