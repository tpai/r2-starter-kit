import promise from "es6-promise";
import fetch from "isomorphic-fetch";
promise.polyfill();

export const RECEIVE_POST = "RECEIVE_POST";

export const fetchPost = id => {
	return dispatch => {
		return fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
			.then(response => response.json())
			.then(json => dispatch(receivePost (json)));
	}
}

const receivePost = json => {
	return {
		type: RECEIVE_POST,
		post: {
			id: json.id,
			title: json.title,
			body: json.body
		}
	}
}