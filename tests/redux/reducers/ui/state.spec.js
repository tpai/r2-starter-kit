import {
  SET_IDLE,
  SET_LOADING,
  SET_FAILURE,
  setIdle,
  setLoading,
  setFailure,
  defaultState,
  reducer,
} from 'redux/reducers/ui/state';

describe('actions', () => {
  it('setIdle', () => {
    const payload = 'idle';
    expect(setIdle(payload)).toEqual({
      type: SET_IDLE,
      payload,
    });
  });
  it('setLoading', () => {
    const payload = 'loading';
    expect(setLoading(payload)).toEqual({
      type: SET_LOADING,
      payload,
    });
  });
  it('setFailure', () => {
    const payload = 'failure';
    expect(setFailure(payload)).toEqual({
      type: SET_FAILURE,
      payload,
    });
  });
});

describe('reducer', () => {
  it('defatulState', () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });
  it('setIdle', () => {
    const payload = 'idle';
    expect(reducer(defaultState, setIdle(payload))).toEqual({
      ...defaultState,
      data: payload,
    });
  });
  it('setLoading', () => {
    const payload = 'loading';
    expect(reducer(defaultState, setLoading(payload))).toEqual({
      ...defaultState,
      data: payload,
    });
  });
  it('setFailure', () => {
    const payload = 'failure';
    expect(reducer(defaultState, setFailure(payload))).toEqual({
      ...defaultState,
      data: payload,
    });
  });
});
