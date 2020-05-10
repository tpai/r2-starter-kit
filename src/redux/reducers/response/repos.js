import { createAction, handleActions } from 'redux-actions';

export const ADD_DATA = `response/repos/ADD_DATA`;
export const SET_DATA = `response/repos/SET_DATA`;
export const SET_TOTAL = `response/repos/SET_TOTAL`;
export const SET_CURRENT = `response/repos/SET_CURRENT`;
export const addData = createAction(ADD_DATA, (value) => value);
export const setData = createAction(SET_DATA, (value) => value);
export const setTotal = createAction(SET_TOTAL, (value) => value);
export const setCurrent = createAction(SET_CURRENT, (value) => value);

export const defaultState = {
  data: [],
  total: 0,
  current: 0,
};

export const reducer = handleActions(
  {
    [ADD_DATA]: (state, { payload }) => ({
      ...state,
      data: [].concat(state.data, payload),
    }),
    [SET_DATA]: (state, { payload }) => ({
      ...state,
      data: payload,
    }),
    [SET_TOTAL]: (state, { payload }) => ({
      ...state,
      total: payload,
    }),
    [SET_CURRENT]: (state, { payload }) => ({
      ...state,
      current: payload,
    }),
  },
  defaultState,
);
