import { RECEIVE_POST } from "../actions/types";

export const post = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_POST:
			return Object.assign({}, state, action.post);
		default:
			return Object.assign({}, state, 
				{ title: "Now", body: "Loading..." }
			);
	}
};