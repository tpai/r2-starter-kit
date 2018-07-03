/* global describe it */
import expect from 'expect';
import nock from 'nock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import reducer, {
  LOADING,
  IDLE,
  FAILURE,
  stateLoading,
  stateIdle,
  stateFailure,
} from 'redux/modules/state';

const mockStore = configureStore([thunk]);

describe('Modules::List', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('should return default state if did not match any action type', () => {
    const stateBefore = undefined;
    const action = {};
    const stateAfter = 'idle';
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });
  it('should return correct state if match LOADING type', () => {
    const stateBefore = [];
    const action = {
      type: LOADING,
    };
    const stateAfter = 'loading';
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });
  it('should return correct state if match IDLE type', () => {
    const stateBefore = [];
    const action = {
      type: IDLE,
    };
    const stateAfter = 'idle';
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });
  it('should return correct state if match FAILURE type', () => {
    const state = [];
    const action = {
      type: FAILURE,
    };
    const stateAfter = 'failure';
    expect(reducer(state, action)).toEqual(stateAfter);
  });
  it('Action::stateLoading', () => {
    const store = mockStore({ state: 'idle' });
    store.dispatch(stateLoading());
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'app/state/LOADING' });
  });
  it('Action::stateIdle', () => {
    const store = mockStore({ state: 'idle' });
    store.dispatch(stateIdle());
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'app/state/IDLE' });
  });
  it('Action::stateFailure', () => {
    const store = mockStore({ state: 'idle' });
    store.dispatch(stateFailure());
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: 'app/state/FAILURE' });
  });
});
