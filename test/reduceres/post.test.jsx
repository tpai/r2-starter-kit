import expect from "expect";

import * as reducer from "src/reducers/post";
import * as types from "src/actions/types";

describe("Reducer::Post", () => {
	it("#post(undefined, {})", () => {
		expect(
			reducer.post(undefined, {})
		).toEqual({ title: "Now", body: "Loading..." })
	})
	it("#post([], {type: RECEIVE_POST})",  () => {
		expect(
			reducer.post({}, {
				type: types.RECEIVE_POST,
				post: { title: "yo", body: "man" }
			})
		).toEqual(
			{ title: "yo", body: "man" }
		)
	})
})