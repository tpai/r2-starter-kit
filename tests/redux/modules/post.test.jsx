/* global describe it */
import expect from 'expect';
import nock from 'nock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import reducer, {
  GET,
  FAILED,
  getPost,
  gotPost,
  getPostFailed
} from 'redux/modules/post';

const mockStore = configureStore([thunk]);

describe('Modules::Post', () => {
  afterEach(() => {
    nock.cleanAll()
  })
  it('should return default state if did not match any action type', () => {
    const stateBefore = undefined;
    const action = {};
    const stateAfter = {};
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });
  it('should return correct state if match GET type', () => {
    const stateBefore = undefined;
    const action = {
      type: GET,
      post: {
        title: 'Title A',
        author: {
          name: 'Adam',
          email: 'adam@blogg.er'
        },
        body: 'Body A',
      },
    };
    const stateAfter = {
      title: 'Title A',
      author: {
        name: 'Adam',
        email: 'adam@blogg.er'
      },
      body: 'Body A',
    };
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });
  it('should return correct state if match FAILED type', () => {
    const stateBefore = undefined;
    const action = {
      type: FAILED
    };
    const stateAfter = {};
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });
  it('Action::getPost() success', () => {
    nock('https://jsonplaceholder.typicode.com/')
      .get('/posts/1')
      .reply(200, {
        "userId": 1,
        "id": 1,
        "title": "title",
        "body": "body"
      });
    nock('https://jsonplaceholder.typicode.com/')
      .get('/users/1')
      .reply(200, {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
      });
    const store = mockStore({
      post: []
    });
    return store.dispatch(getPost(1))
      .then(() => {
        const actions = store.getActions();
        const action = actions[0];
        const expectedResult = gotPost({
          "userId": 1,
          "id": 1,
          "title": "title",
          "body": "body",
          "author": {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz"
          }
        });
        expect(action).toEqual(expectedResult);
      });
  });
  it('Action::getPost() failed', () => {
    nock('https://jsonplaceholder.typicode.com/')
      .get('/posts/1')
      .replyWithError('API crashed');
    nock('https://jsonplaceholder.typicode.com/')
      .get('/users/1')
      .replyWithError('API crashed');
    const store = mockStore({
      post: []
    });
    return store.dispatch(getPost(1))
      .then(() => {
        const actions = store.getActions();
        const action = actions[0];
        const expectedResult = getPostFailed();
        expect(action).toEqual(expectedResult);
      });
  });
});
