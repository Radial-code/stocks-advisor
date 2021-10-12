import { DELETE_PLANS_SUCCESS, GET_PLANS_LIST } from "../action/cmPanel/plans";
import { GET_TEAM_LIST } from "../action/cmPanel/stock";
import { GET_CONTACT_LIST } from "../action/contact";
import {
  GET_CURRENT_STOCK_PORTFOLIOS_LIST,
  GET_PORTFOLIOS_LIST_FOR_DASHBOARD,
  GET_SOLD_STOCK_PORTFOLIOS_LIST,
} from "../action/portfolio";
import { GET_ALL_PORTFOLIOS_LIST_SUCCESS } from "../action/portfolios";

const initialState = {
  contactList: [],
  planList: [],
  portfoliosList: [],
  teamList: [],
  dashboardPortfoliosList: [],
  currentStockList: [],
  soldStockList: [],
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

    //Get Portfolios list for dashboard
    case GET_PORTFOLIOS_LIST_FOR_DASHBOARD: {
      return {
        ...state,
        dashboardPortfoliosList: action.data,
      };
    }

    //Get sold stock Portfolios list for dashboard
    case GET_SOLD_STOCK_PORTFOLIOS_LIST: {
      return {
        ...state,
        soldStockList: action.data,
      };
    }

    //Get current stock Portfolios list for dashboard
    case GET_CURRENT_STOCK_PORTFOLIOS_LIST: {
      return {
        ...state,
        currentStockList: action.data,
      };
    }

    default:
      return state;
  }
}
