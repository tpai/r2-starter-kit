import { NEXT_PAGE, PREV_PAGE, RECEIVE_POST } from "../actions/PagerAction";

export function nowPage(state = 1, action) {
	switch (action.type) {
		case NEXT_PAGE:
			return action.nowPage + 1;
		case PREV_PAGE:
			return (action.nowPage > 0)?(action.nowPage - 1):0;
		default:
			return state;
	}
};

export function post(state = {}, action) {
	switch (action.type) {
		case RECEIVE_POST:
			return Object.assign({}, state, action.post);
		default:
			return state;
	}
};