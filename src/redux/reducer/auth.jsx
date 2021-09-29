import { SIGN_UP_SUCCESSFULLY } from "../action/auth";
import { LOGIN_SUCCESSFULLY } from "../action/auth";

const initialState = {
  userData: {},
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    // SIGNUP REDUCER TO SAVE USER DATA
    case SIGN_UP_SUCCESSFULLY: {
      console.log(action.data);
      return {
        ...state,
        userData: action.data,
      };
    }
    // LOGIN REDUCER TO SAVE USER DATA

    case LOGIN_SUCCESSFULLY: {
      return {
        ...state,
        userData: action.data,
      };
    }

    default:
      return state;
  }
}
