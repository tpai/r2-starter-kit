import nock from 'nock';
import expect, { createSpy } from 'expect';
import deepFreeze from 'deep-freeze';

import reducer, {
    GET,
    FAILED,
    getList,
    gotList,
    getListFailed
} from 'redux/modules/list';

import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

describe('Modules::List', () => {

    const mockStore = configureStore([thunk]);

    it('should return default state if did not match any action type', () => {
        const stateBefore = undefined;
        const action = {};
        const stateAfter = [];
        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    })
    it('should return correct state if match GET type', () => {
        const stateBefore = [];
        const action = {
            type: GET,
            data: [{
                id: 1,
                title: 'Title A',
                body: 'Body A'
            }]
        };
        const stateAfter = [{
            id: 1,
            title: 'Title A',
            link: '/posts/1',
            desc: 'Body A',
            img: 'http://lorempixel.com/320/180?t=1'
        }];
        expect(reducer(stateBefore, action)[0]).toIncludeKeys([
            'id', 'title', 'link', 'desc', 'img'
        ]);
    })
    it('should return correct state if match FAILED type', () => {
        const stateBefore =[];
        const action = {
            type: FAILED
        };
        const stateAfter = [{
            id: 0,
            title: 'Fetch Failed...',
            link: '#',
            desc: 'Fetch Failed...',
            img: `http://placehold.it/320x180`
        }];
        expect(reducer(stateBefore, action)[0]).toIncludeKeys([
            'id', 'title', 'link', 'desc', 'img'
        ]);
    })
    it('should dispatch GET type if fetch data success', () => {
        nock(`http://jsonplaceholder.typicode.com`)
            .get(`/posts`)
            .reply(200, []);

        const store = mockStore({});
        store.dispatch(getList())
            .then(() => {
                const action = store.getActions()[0];
                expect(action).toEqual(gotList());
            });
    })
    it('should dispatch FAILED type if fetch data fail', () => {
        nock(`http://jsonplaceholder.typicode.com`)
            .get(`/posts`)
            .reply(404);

        const store = mockStore({});
        store.dispatch(getList())
            .then(() => {
                const action = store.getActions()[0];
                expect(action).toEqual(getListFailed());
            });
    })
    it('should call cb() after async request', () => {
        nock(`http://jsonplaceholder.typicode.com`)
            .get(`/posts`)
            .reply(200, []);

        const spy = createSpy();
        expect(spy).toNotHaveBeenCalled();

        const store = mockStore({});
        store.dispatch(getList(spy))
            .then(() => {
                expect(spy).toHaveBeenCalled();
            });
    })
})
