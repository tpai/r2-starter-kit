import promise from "es6-promise";
import fetch from "isomorphic-fetch";
promise.polyfill();

export const RECEIVE_LIST = "RECEIVE_LIST";

export const fetchList = () => {
    return dispatch => {
        return fetch(`http://jsonplaceholder.typicode.com/posts`)
            .then(response => response.json())
            .then(json => dispatch(receiveList (json)));
    }
}

const receiveList = json => {
    return {
        type: RECEIVE_LIST,
        list: json
    }
}
