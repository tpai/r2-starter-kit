import { NEXT_PAGE, PREV_PAGE } from "../actions/PagerAction";

export function nowPage(state = 1, action) {
	switch (action.type) {
		case NEXT_PAGE:
			return state + 1;
		case PREV_PAGE:
			return (state > 0)?(state - 1):0;
		default:
			return state;
	}
};