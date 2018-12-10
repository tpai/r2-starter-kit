import {
  SET_DATA,
  setData,
  defaultState,
  reducer,
} from 'redux/reducers/response/user';

describe('actions', () => {
  it('setData', () => {
    const payload = 'aaa';
    expect(setData(payload)).toEqual({
      type: SET_DATA,
      payload,
    });
  });
});

describe('reducer', () => {
  it('defatulState', () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });
  it('setData', () => {
    const payload = 'aaa';
    expect(reducer(defaultState, setData(payload))).toEqual({
      ...defaultState,
      data: payload,
    });
  });
});
