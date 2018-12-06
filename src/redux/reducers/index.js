import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { default as response } from './response';
import { default as ui } from './ui';

export default (history) => combineReducers({
  router: connectRouter(history),
  response,
  ui,
});
