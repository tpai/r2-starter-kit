/* global describe it */

import expect from 'expect';

import reducer, { GET, FAILED } from 'redux/modules/post';

describe('Modules::Post', () => {
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
    it('should return correct state if match FAILED type', () => {
        const stateBefore = undefined;
        const action = {
            type: FAILED
        };
        const stateAfter = {};
        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });
});
