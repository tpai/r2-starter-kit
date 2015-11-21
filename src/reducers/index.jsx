import { combineReducers } from "redux";

import * as list from "./list";
import * as post from "./post";

const reducers = Object.assign(list, post);

export default combineReducers(reducers);