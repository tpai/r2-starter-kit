import nock from "nock";
import expect from "expect";
import deepFreeze from "deep-freeze";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import reducer, { GET, getPost } from "redux/modules/post";

const mockStore = configureStore([thunk]);

describe("Modules::Post", () => {
    it("should return default object if no action type", () => {
        expect(reducer(undefined, {})).toEqual({ id: -1, title: "Now", body: "Loading..." })
    })
    it("should return correct state if action type is GET", () => {
        const stateBefore = {};
        const action = {
            type: GET,
            post: { id: 1, title: "yo", body: "man" }
        };
        const stateAfter = { id: 1, title: "yo", body: "man" };

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    })
    it("should get a post after action", done => {
        nock(`http://jsonplaceholder.typicode.com`)
            .get(`/posts/1`)
            .reply(200, { userId: 1, id: 1, title: "yo", body: "man" })
        const store = mockStore({});
        store.dispatch(getPost(1))
        .then(() => {
            const action = store.getActions()[0];
            expect(action.type).toEqual(GET);
            expect(action.post.id).toBeA("number");
            expect(action.post.title).toBeA("string");
            expect(action.post.body).toBeA("string");
        }).then(done).catch(done);
    })
})
