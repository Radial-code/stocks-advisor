import {
  GET_LOCAL_STORAGE_TOKEN,
  GET_USER_PROFILE_LIST,
  SIGN_UP_SUCCESSFULLY,
} from "../action/auth";
import { LOGIN_SUCCESSFULLY } from "../action/auth";

const initialState = {
  token: "",
  userData: {},
  auth: false,
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    // SIGNUP REDUCER TO SAVE USER DATA
    case SIGN_UP_SUCCESSFULLY: {
      return {
        ...state,
        userData: action.data.user,
        token: action.data["x-api-key"],
        auth: true,
      };
    }

    // LOGIN REDUCER TO SAVE USER DATA
    case LOGIN_SUCCESSFULLY: {
      return {
        ...state,
        token: action.data,
        auth: action.data === "null" ? false : true,
      };
    }

    // get profile list data
    case GET_USER_PROFILE_LIST: {
      return {
        ...state,
        userData: action.payload.data,
        token: action.payload.token,
        // auth: action.payload.token === "null" ? false : true,
      };
    }

    //Save token and auth
    case GET_LOCAL_STORAGE_TOKEN: {
      console.log("action.token", action.token);
      return {
        ...state,
        token: action.token,
        // auth: action.token === "null" ? false : true,
      };
    }

    default:
      return state;
  }
}
