import fetch from 'isomorphic-fetch';

import { stateLoading, stateIdle, stateFailure } from 'redux/modules/state';

export const GET = 'app/post/GET';
export const FAILED = 'app/post/FAILED';

const reducer = (state = {}, action) => {
  switch (action.type) {
  case GET:
    return Object.assign({}, state, action.post);
  case FAILED:
    return {};
  default:
    return state;
  }
};

export default reducer;

export function getPost(id, cb = () => {}) {
  return async (dispatch) => {
    dispatch(stateLoading());
    try {
      const postRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      const post = await postRes.json();
      const userRes = await fetch(
        `https://jsonplaceholder.typicode.com/users/${post.userId}`,
      );
      const user = await userRes.json();
      dispatch(gotPost(Object.assign({}, post, { author: user })));
      dispatch(stateIdle());
      cb();
    } catch (err) {
      dispatch(getPostFailed());
      dispatch(stateFailure());
      cb();
    }
  };
}

export function gotPost(json) {
  return {
    type: GET,
    post: json,
  };
}

export function getPostFailed() {
  return {
    type: FAILED,
  };
}