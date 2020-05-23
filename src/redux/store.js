import createSaga from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from '~/redux/reducers';
import history from '~/redux/history';
import rootSaga from '~/sagas';

const saga = createSaga();
const logger = createLogger({ diff: true });
const router = routerMiddleware(history);

const middleware = process.env.NODE_ENV === 'development'
  ? [saga, router, logger]
  : [saga, router];

const store = configureStore({
  reducer: createRootReducer(history),
  middleware,
});

saga.run(rootSaga);

export default store;
