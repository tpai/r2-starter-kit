import { RECEIVE_POST } from "actions/post";

export const post = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_POST:
            return Object.assign({}, state, action.post);
        default:
            return Object.assign({}, state, { id: -1, title: "Now", body: "Loading..." });
    }
};
