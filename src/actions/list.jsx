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