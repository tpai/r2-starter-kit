import nock from 'nock';
import expect, { createSpy } from 'expect';
import { describe, it } from 'mocha';

import reducer, {
    GET,
    getPost,
    gotPost,
    getPostFailed,
} from 'redux/modules/post';

import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

describe('Modules::Post', () => {
    const mockStore = configureStore([thunk]);

    it('should return default state if did not match any action type', () => {
        const stateBefore = undefined;
        const action = {};
        const resultState = reducer(stateBefore, action);
        expect(resultState).toIncludeKeys([
            'title', 'author', 'body',
        ]);
        expect(resultState.author).toIncludeKeys(['name', 'email']);
    });
    it('should return correct state if match GET type', () => {
        const stateBefore = undefined;
        const action = {
            type: GET,
            post: {
                title: 'Title A',
                author: { name: 'Adam', email: 'adam@blogg.er' },
                body: 'Body A',
            },
        };
        const stateAfter = {
            title: 'Title A',
            author: { name: 'Adam', email: 'adam@blogg.er' },
            body: 'Body A',
        };
        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });
    it('should dispatch GET type if fetch data success', () => {
        nock(`http://jsonplaceholder.typicode.com`)
            .get(`/posts/1`)
            .reply(200, {});
        nock(`http://jsonplaceholder.typicode.com`)
            .get(`/users/1`)
            .reply(200, {});

        const store = mockStore({});
        store.dispatch(getPost())
            .then(() => {
                const action = store.getActions()[0];
                expect(action).toEqual(gotPost());
            });
    });
    it('should dispatch FAILED type if fetch data fail', () => {
        nock(`http://jsonplaceholder.typicode.com`)
            .get(`/posts/1`)
            .reply(404);
        nock(`http://jsonplaceholder.typicode.com`)
            .get(`/users/1`)
            .reply(404);

        const store = mockStore({});
        store.dispatch(getPost())
            .then(() => {
                const action = store.getActions()[0];
                expect(action).toEqual(getPostFailed());
            });
    });
    it('should call cb() after async request', () => {
        nock(`http://jsonplaceholder.typicode.com`)
            .get(`/posts/1`)
            .reply(200, {});
        nock(`http://jsonplaceholder.typicode.com`)
            .get(`/users/1`)
            .reply(200, {});

        const spy = createSpy();
        expect(spy).toNotHaveBeenCalled();

        const store = mockStore({});
        store.dispatch(getPost(spy))
            .then(() => {
                expect(spy).toHaveBeenCalled();
            });
    });
});
