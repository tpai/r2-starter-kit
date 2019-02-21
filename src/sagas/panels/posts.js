import { takeLatest, put, call } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import { push } from 'connected-react-router';

import { getPosts as getPostsAPI } from 'api/posts';
import { setData as setPosts } from 'redux/reducers/response/posts';
import {
  setIdle,
  setLoading,
  setFailure,
} from 'redux/reducers/ui/state';
import { fixPosts } from 'utils/normalizer';

export const HANDLE_DID_MOUNT = `posts/HANDLE_DID_MOUNT`;
export const CLICK_POST       = `posts/CLICK_POST`;

export const handleDidMount = createAction(HANDLE_DID_MOUNT);
export const clickPost      = createAction(CLICK_POST, value => value);

export const sagas = {
  * handleDidMount () {
    try {
      yield put(setLoading());
      const { success, error } = yield call(getPostsAPI);
      if (success) {
        yield put(setPosts(fixPosts(success.body.slice(0, 10))));
        yield put(setIdle());
      } else {
        console.log(error);
        yield put(setFailure());
      }
    } catch (err) {
      console.log(err);
    }
  },
  * clickPost ({ payload: id }) {
    yield put(push(`/posts/${id}`));
  },
};

export const watchers = {
  * handleDidMount () {
    yield takeLatest(HANDLE_DID_MOUNT, sagas.handleDidMount);
  },
  * clickPost () {
    yield takeLatest(CLICK_POST, sagas.clickPost);
  },
};
