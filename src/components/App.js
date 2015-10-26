import React, { Component } from "react";
import { connect } from "react-redux";

import Pager from "./Pager";

class App extends Component {
	render() {
		return (
			<div>
				<Pager />
			</div>
		);
	}
}

export default connect()(App);