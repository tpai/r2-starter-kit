import fetch from "isomorphic-fetch";

export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const REQUEST_POST = "REQUEST_POST";
export const RECEIVE_POST = "RECEIVE_POST";

export function nextPage (nowPage) {
	return {
		type: NEXT_PAGE,
		nowPage
	};
}
export function prevPage (nowPage) {
	return {
		type: PREV_PAGE,
		nowPage
	};
}

function requestPost () {
	return {
		type: REQUEST_POST
	};
}

function receivePost (json) {
	return {
		type: RECEIVE_POST,
		post: {
			title: json.title,
			body: json.body
		}
	}
}

export function fetchPost (id) {
	return dispatch => {
		dispatch(requestPost ());
		return fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
			.then(response => response.json())
			.then(json => dispatch(receivePost (json)));
	}
}