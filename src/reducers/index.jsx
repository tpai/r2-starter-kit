import { combineReducers } from "redux";
import { routeReducer } from "redux-simple-router";

import * as list from "./list";
import * as post from "./post";

const reducers = Object.assign(list, post, {routing: routeReducer});

export default combineReducers(reducers);