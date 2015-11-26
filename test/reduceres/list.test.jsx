import expect from "expect";

import * as reducers from "src/reducers/list";
import * as actions from "src/actions/list";

describe("Reducer::List", () => {
	it("#list(undefined, {})", () => {
		expect(
			reducers.list(undefined, {})
		).toEqual([])
	})
	it("#list([], {type: RECEIVE_LIST})",  () => {
		expect(
			reducers.list([], {
				type: actions.RECEIVE_LIST,
				list: [{ userId: 1, id: 1, title: "yo", body: "man" }]
			})
		).toEqual(
			[{ userId: 1, id: 1, title: "yo", body: "man" }]
		)
	})
})