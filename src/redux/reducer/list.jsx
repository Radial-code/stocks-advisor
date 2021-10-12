import { DELETE_PLANS_SUCCESS, GET_PLANS_LIST } from "../action/cmPanel/plans";
import { GET_TEAM_LIST } from "../action/cmPanel/stock";
import { GET_CONTACT_LIST } from "../action/contact";
import { GET_ALL_PORTFOLIOS_LIST_SUCCESS } from "../action/portfolios";

const initialState = {
  contactList: [],
  planList: [],
  portfoliosList: [],
  teamList: [],
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
    case GET_PLANS_LIST: {
      return {
        ...state,
        planList: action.data,
      };
    }

    // Delete plan by id
    case DELETE_PLANS_SUCCESS: {
      const deletePlan = [...state.planList];
      const deleteList = deletePlan.filter(
        (value) => value._id !== action.data
      );
      return {
        ...state,
        planList: deleteList,
      };
    }

    //Get Portfolios list
    case GET_ALL_PORTFOLIOS_LIST_SUCCESS: {
      return {
        ...state,
        portfoliosList: action.data,
      };
    }

    //Get Team list
    case GET_TEAM_LIST: {
      return {
        ...state,
        teamList: action.data,
      };
    }

    default:
      return state;
  }
}
