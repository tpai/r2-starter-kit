import expect from "expect";
import deepFreeze from "deep-freeze";

import * as reducers from "src/reducers/list";
import * as actions from "src/actions/list";

describe("Reducer::List", () => {
	it("#list(undefined, {})", () => {
		expect(
			reducers.list(undefined, {})
		).toEqual([])
	})
	it("#list([], {type: RECEIVE_LIST})",  () => {
		const stateBefore = [];
		const action = {
			type: actions.RECEIVE_LIST,
			list: [{ userId: 1, id: 1, title: "yo", body: "man" }]
		};
		const stateAfter = [{ userId: 1, id: 1, title: "yo", body: "man" }];
		
		deepFreeze(stateBefore);
		deepFreeze(action);
		
		expect(
			reducers.list(stateBefore, action)
		).toEqual(
			stateAfter
		)
	})
})