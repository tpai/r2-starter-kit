import expect from "expect";

import * as reducers from "src/reducers/post";
import * as actions from "src/actions/post";

describe("Reducer::Post", () => {
	it("#post(undefined, {})", () => {
		expect(
			reducers.post(undefined, {})
		).toEqual({ id: -1, title: "Now", body: "Loading..." })
	})
	it("#post({...}, {type: RECEIVE_POST})",  () => {
		expect(
			reducers.post({}, {
				type: actions.RECEIVE_POST,
				post: { id: 1, title: "yo", body: "man" }
			})
		).toEqual(
			{ id: 1, title: "yo", body: "man" }
		)
	})
})