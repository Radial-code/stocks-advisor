import { SIGN_UP_SUCCESSFULLY } from "../action/auth";
import { LOGIN_SUCCESSFULLY } from "../action/auth";

const initialState = {
  token: "",
  userData: {},
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    // SIGNUP REDUCER TO SAVE USER DATA
    case SIGN_UP_SUCCESSFULLY: {
      console.log(action.data);
      return {
        ...state,
        userData: action.data.user,
        token: action.data["x-api-key"],
      };
    }

    // LOGIN REDUCER TO SAVE USER DATA
    case LOGIN_SUCCESSFULLY: {
      return {
        ...state,
        token: action.data,
      };
    }

    default:
      return state;
  }
}
