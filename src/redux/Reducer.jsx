import { combineReducers } from "redux";
import auth from "./reducer/auth";
import list from "./reducer/list";
import cmPanel from "./reducer/cmPanel";
import userPanel from "./reducer/userPanel";

const reducers = {
  auth,
  list,
  cmPanel,
  userPanel,
};
export const rootReducer = combineReducers(reducers);
