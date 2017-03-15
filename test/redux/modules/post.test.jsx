import expect from 'expect';

import reducer, { GET } from 'redux/modules/post';

describe('Modules::Post', () => {
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
});
