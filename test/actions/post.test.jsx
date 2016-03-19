import expect from "expect";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import { RECEIVE_POST, fetchPost } from "actions/post";

const mockStore = configureStore([thunk]);

describe("Action::Post", () => {
    it("#fetchPost(id)", done => {
        const store = mockStore({});
        store.dispatch(fetchPost(1))
        .then(() => {
                const action = store.getActions()[0];
                expect(action.type).toEqual(RECEIVE_POST);
                expect(action.post.id).toBeA("number");
                expect(action.post.title).toBeA("string");
                expect(action.post.body).toBeA("string");
            }).then(done).catch(done);
    })
})
