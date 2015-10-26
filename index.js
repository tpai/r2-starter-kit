import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import AppRouter from "./appRouter";
import theStore from "./src/store/theStore";
import "./src/styles/header.scss";

const store = theStore ();

render(
	<Provider store={store}>
		<AppRouter />
	</Provider>, 
	document.getElementById("react")
);