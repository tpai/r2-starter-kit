import { takeLatest, put, call, select } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import { push, createMatchSelector } from 'connected-react-router';

import { getPost as getPostAPI } from 'api/posts';
import { getUser as getUserAPI } from 'api/users';
import { setData as setPost } from 'redux/reducers/response/post';
import { setData as setUser } from 'redux/reducers/response/user';
import {
  setIdle,
  setLoading,
  setFailure,
} from 'redux/reducers/ui/state';

export const HANDLE_DID_MOUNT = `post/HANDLE_DID_MOUNT`;
export const CLICK_ROOT_PATH = `post/CLICK_ROOT_PATH`;

export const handleDidMount = createAction(HANDLE_DID_MOUNT);
export const clickRootPath = createAction(CLICK_ROOT_PATH);

export const sagas = {
  * handleDidMount () {
    try {
      const matchSelector = createMatchSelector({ path: '/posts/:id' });
      const match = yield select(matchSelector);
      const id = parseInt(match.params.id, 10);

      yield put(setLoading());
      const { success, error } = yield call(getPostAPI, id);
      if (success) {
        yield put(setPost(success.body));
        yield call(sagas.getUser, success.body.userId);
      } else {
        console.log(error);
        yield put(setFailure());
      }
    } catch (err) {
      console.log(err);
    }
  },
  * getUser (id) {
    try {
      const { success, error } = yield call(getUserAPI, id);
      if (success) {
        yield put(setUser(success.body));
        yield put(setIdle());
      } else {
        console.log(error);
        yield put(setFailure());
      }
    } catch (err) {
      console.log(err);
    }
  },
  * clickRootPath () {
    yield put(push('/'));
  },
};

export const watchers = {
  * handleDidMount () {
    yield takeLatest(HANDLE_DID_MOUNT, sagas.handleDidMount);
  },
  * clickRootPath () {
    yield takeLatest(CLICK_ROOT_PATH, sagas.clickRootPath);
  },
};
