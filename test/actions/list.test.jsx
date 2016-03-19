import expect from "expect";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import { RECEIVE_LIST, fetchList } from "actions/list";

const mockStore = configureStore([thunk]);

describe("Action::List", () => {
    it("#fetchList()", done => {
        const store = mockStore({});
        store.dispatch(fetchList())
        .then(() => {
                const action = store.getActions()[0];
                expect(action.type).toEqual(RECEIVE_LIST);
                expect(action.list.length).toBeGreaterThan(0);
            }).then(done).catch(done);
    })
})
