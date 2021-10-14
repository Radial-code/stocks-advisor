import { GET_NEWS_DETAILS_BY_ID } from "../action/news";
import { GET_USER_DETAILS } from "../action/userPanel/user";

const initialState = {
  userDetails: {},
  newsDetails: {},
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

    // Get user profile details
    case GET_NEWS_DETAILS_BY_ID: {
      return {
        ...state,
        newsDetails: action.data,
      };
    }

    default:
      return state;
  }
}
