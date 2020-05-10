import { createAction, handleActions } from 'redux-actions';

export const SET_LOADING = `ui/state/SET_LOADING`;
export const setLoading = createAction(SET_LOADING, (value) => value);

export const defaultState = {
  isLoading: false,
};

export const reducer = handleActions(
  {
    [SET_LOADING]: (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }),
  },
  defaultState,
);
