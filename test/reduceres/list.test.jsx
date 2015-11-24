import expect from "expect";

import * as reducer from "src/reducers/list";
import * as types from "src/actions/types";

describe("Reducer::List", () => {
	it("#list(undefined, {})", () => {
		expect(
			reducer.list(undefined, {})
		).toEqual([])
	})
	it("#list([], {type: RECEIVE_LIST})",  () => {
		expect(
			reducer.list([], {
				type: types.RECEIVE_LIST,
				list: [{ userId: 1, id: 1, title: "yo", body: "man" }]
			})
		).toEqual(
			[{ userId: 1, id: 1, title: "yo", body: "man" }]
		)
	})
})