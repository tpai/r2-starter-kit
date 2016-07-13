import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducers from 'redux/reducer';

const logger = createLogger();

let middleware = __DEVELOPMENT__ ? [thunk, logger] : [thunk];

const createStoreWithMiddleware = createStore(
    combineReducers(reducers),
    {},
    compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default createStoreWithMiddleware;
