import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from 'redux/reducers';

const logger = createLogger();

const middleware = process.env.NODE_ENV === 'development'
  ? [thunk, logger]
  : [thunk];

export default createStore(
  combineReducers(reducers),
  undefined,
  composeWithDevTools(applyMiddleware(...middleware)),
);
