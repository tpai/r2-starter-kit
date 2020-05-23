import { createAction, createReducer } from '@reduxjs/toolkit';

export const addData = createAction(`response/repos/ADD_DATA`, (value) => ({
  payload: value,
}));
export const setData = createAction(`response/repos/SET_DATA`, (value) => ({
  payload: value,
}));
export const setTotal = createAction(`response/repos/SET_TOTAL`, (value) => ({
  payload: value,
}));
export const setCurrent = createAction(
  `response/repos/SET_CURRENT`,
  (value) => ({ payload: value }),
);

export const defaultState = {
  data: [],
  total: 0,
  current: 0,
};

export const reducer = createReducer(defaultState, {
  [addData]: (state, { payload }) => ({
    ...state,
    data: [].concat(state.data, payload),
  }),
  [setData]: (state, { payload }) => ({
    ...state,
    data: payload,
  }),
  [setTotal]: (state, { payload }) => ({
    ...state,
    total: payload,
  }),
  [setCurrent]: (state, { payload }) => ({
    ...state,
    current: payload,
  }),
});
