import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./src/components/App.js";
import theStore from "./src/store/theStore";
import "./src/styles/header.scss";

const store = theStore ();

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById("react")
);