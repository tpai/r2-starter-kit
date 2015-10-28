import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./appRouter";
import theStore from "./src/store/theStore";
import "./src/styles/header.scss";

const store = theStore ();
let tools;
if((__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__)) {
	const DevTools = require('./src/store/DevTools');
	tools = (<DevTools />);
}

render(

	<Provider store={store}>
		<div>
			<AppRouter />
			{tools}
		</div>
	</Provider>,
	document.getElementById("react")
);
