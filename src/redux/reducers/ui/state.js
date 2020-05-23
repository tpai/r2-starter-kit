import { createAction, createReducer } from '@reduxjs/toolkit';

export const setLoading = createAction(`ui/state/SET_LOADING`, (value) => ({
  payload: value,
}));

export const defaultState = {
  isLoading: false,
};

export const reducer = createReducer(defaultState, {
  [setLoading]: (state, { payload }) => ({
    ...state,
    isLoading: payload,
  }),
});
