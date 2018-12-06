import { createAction, handleActions } from 'redux-actions';

export const SET_IDLE = `ui/state/SET_IDLE`;
export const SET_LOADING = `ui/state/SET_LOADING`;
export const SET_FAILURE = `ui/state/SET_FAILURE`;

export const setIdle = createAction(SET_IDLE, (value) => value);
export const setLoading = createAction(SET_LOADING, (value) => value);
export const setFailure = createAction(SET_FAILURE, (value) => value);

export const defaultState = {
  data: 'idle',
};

export const reducer = handleActions(
  {
    [SET_IDLE]: (state) => ({
      ...state,
      data: 'idle',
    }),
    [SET_LOADING]: (state) => ({
      ...state,
      data: 'loading',
    }),
    [SET_FAILURE]: (state) => ({
      ...state,
      data: 'failure',
    }),
  },
  defaultState,
);
