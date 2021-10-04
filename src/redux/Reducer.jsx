import { combineReducers } from "redux";
import auth from "./reducer/auth";
import list from "./reducer/list";

const reducers = {
  auth,
  list,
};
export const rootReducer = combineReducers(reducers);
