import { combineReducers } from "redux";
import auth from "./reducer/auth";
const reducers = {
  auth,
};
export const rootReducer = combineReducers(reducers);
