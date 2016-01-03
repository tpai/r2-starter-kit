import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import createLogger from "redux-logger";

import reducers from "../reducers";

const logger = createLogger({
    predicate: (getState, action) => process.env.NODE_ENV === `development`
});

const createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(createStore);

const Store = initialState => {
    const storeWithMiddleware = createStoreWithMiddleware(reducers, initialState);
    return storeWithMiddleware;
}

export default Store;
