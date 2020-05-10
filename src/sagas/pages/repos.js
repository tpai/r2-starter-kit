import { takeLatest, all, put, call, select } from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import { createMatchSelector } from 'connected-react-router';

import {
  getUserInfo as getUserInfoAPI,
  getRepos as getReposAPI,
} from '~/api/github';
import { REPOS_PAGE_LIMIT } from '~/constants/pagination';
import {
  addData as addRepos,
  setData as setRepos,
  setTotal as setReposTotal,
  setCurrent as setReposCurrent,
} from '~/redux/reducers/response/repos';
import { setData as setUser } from '~/redux/reducers/response/user';
import { setLoading } from '~/redux/reducers/ui/state';
import { getNextPage as getReposNextPage } from '~/selectors/response/repos';
import { getLogin as getUserLogin } from '~/selectors/response/user';
import { getIsLoading } from '~/selectors/ui/state';

export const HANDLE_DID_MOUNT = `repos/HANDLE_DID_MOUNT`;
export const LOAD_MORE = `repos/LOAD_MORE`;
export const handleDidMount = createAction(HANDLE_DID_MOUNT);
export const loadMore = createAction(LOAD_MORE);

export const sagas = {
  * handleDidMount () {
    try {
      const matchSelector = createMatchSelector({ path: '/users/:user' });
      const match = yield select(matchSelector);
      const { params = {} } = match || {};
      const { user = 'tpai' } = params;

      yield put(setLoading(true));

      const [userInfo, repos] = yield all([
        call(getUserInfoAPI, user),
        call(getReposAPI, user, {page: 1, limit: REPOS_PAGE_LIMIT}),
      ]);

      if (userInfo.success) {
        yield put(setUser(userInfo.success.body));
      }
      if (repos.success) {
        yield put(setRepos(repos.success.body));
        yield put(setReposTotal(repos.success.total));
        yield put(setReposCurrent(1));
      }
    } catch (err) {
      console.log(err);
    } finally {
      yield put(setLoading(false));
    }
  },
  * loadMore() {
    const isLoading = yield select(getIsLoading);
    const nextPage = yield select(getReposNextPage);
    if (isLoading || !nextPage)return;

    try {
      yield put(setLoading(true));
      const user = yield select(getUserLogin);
      const { success } = yield call(
        getReposAPI,
        user,
        {page: nextPage, limit: REPOS_PAGE_LIMIT}
      );
      if (success) {
        yield put(addRepos(success.body));
        yield put(setReposTotal(success.total));
        yield put(setReposCurrent(nextPage));
      }
    } catch (err) {
      console.log(err);
    } finally {
      yield put(setLoading(false));
    }
  }
};

export const watchers = {
  * handleDidMount () {
    yield takeLatest(HANDLE_DID_MOUNT, sagas.handleDidMount);
  },
  * loadMore () {
    yield takeLatest(LOAD_MORE, sagas.loadMore);
  },
};
