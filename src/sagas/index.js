import { all } from 'redux-saga/effects';

import panels from './panels';

export default function * rootSaga () {
  yield all([
    ...panels,
  ]);
}
