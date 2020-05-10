import { runWatchers } from '~/utils/redux-saga-helpers';

import { watchers as repos } from './repos';

export default [
  ...runWatchers(repos),
];
