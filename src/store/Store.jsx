import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistState } from 'redux-devtools';
import reducers from "../reducers";
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

const Store = initialState => {
    const storeWithMiddleware = createStoreWithMiddleware(reducers, initialState);

    if (module.hot) {
        module.hot.accept("../reducers", () => {
            const nextReducer = require("../reducers");
            storeWithMiddleware.replaceReducer(nextReducer);
        });
    }

    return storeWithMiddleware;
}

export default Store;
