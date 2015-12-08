import { RECEIVE_POST } from "../actions/post";
import { UPDATE_PATH } from "redux-simple-router";

export const post = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_POST:
        case UPDATE_PATH:
            return Object.assign({}, state, action.post);
        default:
            return Object.assign({}, state, { id: -1, title: "Now", body: "Loading..." });
    }
};
