import promise from "es6-promise";
import fetch from "isomorphic-fetch";
promise.polyfill();

import _ from "lodash";

export const GET = "app/post/GET";

const reducer = (state = {}, action) => {
    switch (action.type) {
        case GET:
            return _.assign({}, state, action.post);
        default:
            return _.assign({}, state, { id: -1, title: "Now", body: "Loading..." });
    }
};

export default reducer;

export const getPost = id => {
    return async dispatch => {
        const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`);
        const json = await res.json();
        dispatch(gotPost(json));
    }
}

export const gotPost = json => {
    return {
        type: GET,
        post: {
            id: json.id,
            title: json.title,
            body: json.body
        }
    }
}

