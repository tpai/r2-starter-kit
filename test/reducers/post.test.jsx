import expect from "expect";
import deepFreeze from "deep-freeze";
import { UPDATE_PATH } from "redux-simple-router";

import * as reducers from "src/reducers/post";
import * as actions from "src/actions/post";

describe("Reducer::Post", () => {
    it("#post(undefined, {})", () => {
        expect(
            reducers.post(undefined, {})
        ).toEqual({ id: -1, title: "Now", body: "Loading..." })
    })
    it("#post({...}, {type: RECEIVE_POST})",  () => {
        const beforeState = {};
        const action = {
            type: actions.RECEIVE_POST,
            post: { id: 1, title: "yo", body: "man" }
        };
        const afterState = { id: 1, title: "yo", body: "man" };

        deepFreeze(beforeState);
        deepFreeze(action);

        expect(
            reducers.post(beforeState, action)
        ).toEqual(
            afterState
        )
    })
    it("#post({...}, {type: UPDATE_PATH})",  () => {
        const beforeState = {};
        const action = {
            type: UPDATE_PATH,
            post: { id: 1, title: "yo", body: "man" }
        };
        const afterState = { id: 1, title: "yo", body: "man" }; 

        deepFreeze(beforeState);
        deepFreeze(action);

        expect(
            reducers.post(beforeState, action)
        ).toEqual(
            afterState
        )
    })
})
