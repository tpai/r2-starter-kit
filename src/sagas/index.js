import { all } from 'redux-saga/effects';

import pages from './pages';

export default function * rootSaga () {
  yield all([
    ...pages,
  ]);
}
