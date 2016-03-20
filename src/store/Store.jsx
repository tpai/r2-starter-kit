import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";

import reducers from "reducers/";

const logger = createLogger();

let middleware = __DEVELOPMENT__ ? [thunk, logger] : [thunk];

const createStoreWithMiddleware = createStore(
    combineReducers(reducers),
    {},
    applyMiddleware(...middleware)
);

export default createStoreWithMiddleware;
