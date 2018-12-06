import { runWatchers } from 'utils/redux-saga-helpers';

import { watchers as post } from './post';
import { watchers as posts } from './posts';

export default [
  ...runWatchers(post),
  ...runWatchers(posts),
];
