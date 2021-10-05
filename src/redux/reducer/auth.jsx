import { GET_USER_PROFILE_LIST, SIGN_UP_SUCCESSFULLY } from "../action/auth";
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
        auth: true,
      };
    }

    case GET_USER_PROFILE_LIST: {
      console.log(action);
      return {
        ...state,
        userData: action.payload.data,
        token: action.payload.token,
        auth: true,
      };
    }

    default:
      return state;
  }
}
