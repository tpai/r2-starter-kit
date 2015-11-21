import { RECEIVE_LIST } from "../actions/types";

export const list = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_LIST:
			return action.list;
		default:
			return state;
	}
}