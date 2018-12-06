import { combineReducers } from 'redux';

import { reducer as posts } from './posts';
import { reducer as post } from './post';
import { reducer as user } from './user';

export default combineReducers({
  posts,
  post,
  user,
});
