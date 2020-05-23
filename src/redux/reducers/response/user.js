import { createAction, createReducer } from '@reduxjs/toolkit';

export const setData = createAction(`response/user/SET_DATA`, (value) => ({
  payload: value,
}));

export const defaultState = {
  data: {},
};

export const reducer = createReducer(defaultState, {
  [setData]: (state, { payload }) => ({
    ...state,
    data: payload,
  }),
});
