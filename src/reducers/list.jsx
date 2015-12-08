import { RECEIVE_LIST } from "../actions/list";

export const list = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_LIST:
            return action.list;
        default:
            return state;
    }
}
