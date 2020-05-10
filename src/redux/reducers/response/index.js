import { combineReducers } from 'redux';

import { reducer as repos } from './repos';
import { reducer as user } from './user';

export default combineReducers({
  repos,
  user,
});
