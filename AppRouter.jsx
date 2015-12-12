import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Route, History } from "react-router";

import PostList from "./src/containers/PostList";
import PostContent from "./src/containers/PostContent";

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={PostList} />
                <Route path="/post/:id" component={PostContent} history={History} />
            </Router>
        );
    }
}
