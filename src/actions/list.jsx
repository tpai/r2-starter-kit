import promise from "es6-promise";
import fetch from "isomorphic-fetch";
promise.polyfill();

import { RECEIVE_LIST } from "./types";

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