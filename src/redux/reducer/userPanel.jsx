import { GET_USER_DETAILS } from "../action/userPanel/user";

const initialState = {
  userDetails: {},
};

export default function userPanel(state = initialState, action) {
  switch (action.type) {
    // Get user profile details
    case GET_USER_DETAILS: {
      return {
        ...state,
        userDetails: action.data,
      };
    }
    default:
      return state;
  }
}
