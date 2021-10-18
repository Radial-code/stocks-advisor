import { DELETE_EXCHANGE_LIST } from "../action/cmPanel/OurServices";
import { DELETE_PLANS_SUCCESS, GET_PLANS_LIST } from "../action/cmPanel/plans";
import {
  GET_TEAM_LIST,
  GET_USER_PROFILE_DATA,
  REMOVE_USER_PROFILE_DETAILS_DATA,
  GET_PLAN_DETAILS,
  REMOVE_PLAN_DETAILS,
  GET_STOCK_CHAT_LIST,
} from "../action/cmPanel/stock";
import { GET_CONTACT_LIST } from "../action/contact";
import { GET_SEARCH_RESULT_LIST } from "../action/news";
import {
  ADD_PAYMENT_STRIPE_ID,
  GET_PLAN_DETAILS_BY_ID,
  GET_USER_MY_PLAN,
  GET_USER_PAYMENT_METHOD,
} from "../action/payment";
import {
  GET_CURRENT_STOCK_PORTFOLIOS_LIST,
  GET_PORTFOLIOS_LIST_FOR_DASHBOARD,
  GET_SOLD_STOCK_PORTFOLIOS_LIST,
} from "../action/portfolio";
import { GET_ALL_PORTFOLIOS_LIST_SUCCESS } from "../action/portfolios";
import { UPLOAD_IAMGE } from "../uploadImage";

const initialState = {
  contactList: [],
  planList: [],
  portfoliosList: [],
  teamList: [],
  dashboardPortfoliosList: [],
  currentStockList: [],
  soldStockList: [],
  paymentList: [],
  myPlanDetails: [],
  uploadImageUrl: "",
  stripeID: "",
  planDetails: {},
  userProfileDetails: {},
  userPlanDetails: {},
  stockChatList: {},
  searchNewsList: [],
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
    //Get stock chat list
    case GET_STOCK_CHAT_LIST: {
      return {
        ...state,
        stockChatList: action.data,
      };
    }

    //Get current stock Portfolios list for dashboard
    case GET_CURRENT_STOCK_PORTFOLIOS_LIST: {
      return {
        ...state,
        currentStockList: action.data,
      };
    }

    //Get user payment method list
    case GET_USER_PAYMENT_METHOD: {
      return {
        ...state,
        paymentList: action.data,
      };
    }

    //Get user my plan list
    case GET_USER_MY_PLAN: {
      return {
        ...state,
        myPlanDetails: action.data,
      };
    }

    //upload image
    case UPLOAD_IAMGE: {
      return {
        ...state,
        uploadImageUrl: action.file,
      };
    }

    // Store stripe id
    case ADD_PAYMENT_STRIPE_ID: {
      return {
        ...state,
        stripeID: action.id,
      };
    }
    // search result list
    case GET_SEARCH_RESULT_LIST: {
      return {
        ...state,
        searchNewsList: action.data,
      };
    }

    // get plan details by id
    case GET_PLAN_DETAILS_BY_ID: {
      return {
        ...state,
        planDetails: action.data,
      };
    }

    // get user details by id
    case GET_PLAN_DETAILS: {
      return {
        ...state,
        userPlanDetails: action.data,
      };
    }
    // get user details by id
    case REMOVE_PLAN_DETAILS: {
      return {
        ...state,
        userPlanDetails: {},
      };
    }
    // get user details by id
    case GET_USER_PROFILE_DATA: {
      return {
        ...state,
        userProfileDetails: action.data,
      };
    }

    // get user details by id
    case REMOVE_USER_PROFILE_DETAILS_DATA: {
      return {
        ...state,
        userProfileDetails: {},
      };
    }

    default:
      return state;
  }
}
