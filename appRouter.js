import React, { Component } 	from "react";
import { render }				from "react-dom";
import { Router, Route } 	from "react-router";

import List from "./src/components/List";
import Content from "./src/components/Ctnt";

class AppRouter extends Component {
	render() {
		return (
			<Router>
				<Route path="/" component={List} />
				<Route path="/content/:id" component={Content} />
			</Router>
		);
	}
}

export default AppRouter;