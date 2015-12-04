import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Route } from "react-router";

import PostList from "./src/containers/PostList";
import PostContent from "./src/containers/PostContent";

export default class AppRouter extends Component {
	render() {
		return (
			<Router history={this.props.history}>
				<Route path="/" component={PostList} />
				<Route path="/post/:id" component={PostContent} />
			</Router>
		);
	}
}