import { SET_PAGE, NEXT_PAGE, PREV_PAGE, RECEIVE_POST, RECEIVE_LIST } from "../actions/actions";

export function nowPage(state = 1, action) {
	switch (action.type) {
		case SET_PAGE:
			return action.nowPage * 1;
		case NEXT_PAGE:
			return action.nowPage + 1;
		case PREV_PAGE:
			return (action.nowPage > 1)?(action.nowPage - 1):1;
		default:
			return state;
	}
};

export function post(state = {}, action) {
	switch (action.type) {
		case RECEIVE_POST:
			return Object.assign({}, state, action.post);
		default:
			return Object.assign({}, state, {
				title: "Now",
				body: "Loading..."
			});
	}
};

export function list(state = [], action) {
	switch (action.type) {
		case RECEIVE_LIST:
			return action.list;
		default:
			return state;
	}
}