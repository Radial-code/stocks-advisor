import { combineReducers } from "redux";
import auth from "./reducer/auth";
import list from "./reducer/list";
import cmPanel from "./reducer/cmPanel";

const reducers = {
  auth,
  list,
  cmPanel,
};
export const rootReducer = combineReducers(reducers);
