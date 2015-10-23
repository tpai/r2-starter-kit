import { combineReducers } from "redux";
import * as reducers from "./PagerReducer";

const rootReducer = combineReducers(reducers);

export default rootReducer;