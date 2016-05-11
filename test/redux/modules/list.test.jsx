import nock from "nock";
import expect from "expect";
import deepFreeze from "deep-freeze";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import reducer, { GET, getList } from "redux/modules/list";

const mockStore = configureStore([thunk]);

describe("Modules::List", () => {
    it("should return empty array if no action type", () => {
        expect(reducer(undefined, {})).toEqual([]);
    })
    it ("should return correct state if action type is GET", () => {
        const stateBefore = [];
        const action = {
            type: GET,
            list: [{ userId: 1, id: 1, title: "yo", body: "man" }]
        };
        const stateAfter = [{ userId: 1, id: 1, title: "yo", body: "man" }];

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    })
    it ("should get a list after action", done => {
        nock(`http://jsonplaceholder.typicode.com`)
            .get(`/posts`)
            .reply(200, [{ userId: 1, id: 1, title: "yo", body: "man" }])
        const store = mockStore({});
        store.dispatch(getList())
        .then(() => {
            const action = store.getActions()[0];
            expect(action.type).toEqual(GET);
            expect(action.list.length).toBeGreaterThan(0);
        }).then(done).catch(done);
    })
})
