import nock from "nock";
import expect from "expect";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import * as actions from "src/actions/post";

const mockStore = configureStore([ thunk ]);

describe("Action::Post", () => {
	it("#fetchPost(id)", done => {
		nock(`http://jsonplaceholder.typicode.com`)
			.get(`/posts/1`)
			.reply(200, { userId: 1, id: 1, title: "yo", body: "man" })
		
		const expectedActions = [
			{
				type: actions.RECEIVE_POST,
				post: { id: 1, title: "yo", body: "man" }
			}
		];
		
		const store = mockStore({}, expectedActions, done);
		
		store.dispatch(actions.fetchPost(1));
	})
})
