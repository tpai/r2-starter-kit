import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistState } from 'redux-devtools';
import reducer from "../reducers";
let createStoreWithMiddleware;

if(__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
	const DevTools = require('./DevTools');
	createStoreWithMiddleware = compose(
		applyMiddleware(thunk),
		DevTools.instrument(),
		persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
	)(createStore);
} else {
	createStoreWithMiddleware = compose(
		applyMiddleware(thunk)
	)(createStore);
}

export default function theStore(initialState) {
	const store = createStoreWithMiddleware(reducer, initialState);

	if (module.hot) {
		module.hot.accept("../reducers", () => {
			const nextReducer = require("../reducers");
			store.replaceReducer(nextReducer);
		});
	}

	return store;
}
