import { createStore, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from 'redux/reducers';
import history from 'redux/history';
import rootSaga from 'sagas';

const saga = createSaga();
const logger = createLogger({ diff: true });
const router = routerMiddleware(history);

const middleware = process.env.NODE_ENV === 'development'
  ? [saga, router, logger]
  : [saga, router];

const store = createStore(
  createRootReducer(history),
  undefined,
  composeWithDevTools(applyMiddleware(...middleware)),
);

saga.run(rootSaga);

export default store;
