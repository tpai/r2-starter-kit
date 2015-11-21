import { RECEIVE_POST } from "./types";

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
			title: json.title,
			body: json.body
		}
	}
}