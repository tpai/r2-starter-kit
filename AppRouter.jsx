import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Route } from "react-router";

import List from "./src/components/List";
import Post from "./src/components/Post";

export default class AppRouter extends Component {
	render() {
		return (
			<Router history={this.props.history}>
				<Route path="/" component={List} />
				<Route path="/post/:id" component={Post} />
			</Router>
		);
	}
}