import { combineReducers } from "redux";
import { nowPage, post } from "./PagerReducer";

const rootReducer = combineReducers({
	nowPage, post
});

export default rootReducer;