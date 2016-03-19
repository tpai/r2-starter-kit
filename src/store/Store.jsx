import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import createLogger from "redux-logger";

import reducers from "reducers/";

let middleware = __DEVELOPMENT__ ? [thunk, promise, logger] : [thunk, promise];
const logger = createLogger();

const createStoreWithMiddleware = createStore(
    combineReducers(reducers),
    {},
    applyMiddleware(...middleware)
);

export default createStoreWithMiddleware;
