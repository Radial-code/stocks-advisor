import { GET_CONTACT_LIST } from "../action/contact";
import { GET_PLANS_LIST_SUCCESS } from "../action/plan";
import { GET_ALL_PORTFOLIOS_LIST_SUCCESS } from "../action/portfolios";

const initialState = {
  contactList: [],
  planList: [],
  portfoliosList: [],
};

export default function ListReducer(state = initialState, action) {
  switch (action.type) {
    // Get contact list
    case GET_CONTACT_LIST: {
      return {
        ...state,
        contactList: action.data,
      };
    }

    //Get plan list
    case GET_PLANS_LIST_SUCCESS: {
      return {
        ...state,
        planList: action.data,
      };
    }

    //Get Portfolios list
    case GET_ALL_PORTFOLIOS_LIST_SUCCESS: {
      return {
        ...state,
        portfoliosList: action.data,
      };
    }

    default:
      return state;
  }
}
