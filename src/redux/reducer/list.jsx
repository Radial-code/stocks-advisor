import {
  DELETE_PLANS_SUCCESS,
  GET_PLANS_LIST,
  UPDATE_PLANS_DETAILS,
} from "../action/cmPanel/plans";
import {
  GET_TEAM_LIST,
  GET_USER_PROFILE_DATA,
  REMOVE_USER_PROFILE_DETAILS_DATA,
  GET_PLAN_DETAILS,
  REMOVE_PLAN_DETAILS,
  GET_STOCK_CHAT_LIST,
} from "../action/cmPanel/stock";
import {
  GET_CONTACT_LIST,
  GET_NOTIFICATION_LIST,
  GET_SOCECT_NOTIFICATION_VALUE,
  GET_SOCKET_PAYMENT_STATUS,
  GET_UNSEEN_NOTIFICATION_LIST,
} from "../action/contact";
import {
  GET_INVITE_MESSAGE_CODE,
  INVITE_YOUR_MESSAGE_CODE,
  UPDATE_INVITE_MESSAGE_CODE,
} from "../action/inviteFriends";
import {
  GET_RELETED_SOLD_STOCK_NEWS,
  GET_SEARCH_RESULT_LIST,
  REMOVE_SEARCH_REASULT_LIST,
} from "../action/news";
import {
  ADD_PAYMENT_STRIPE_ID,
  GET_PLAN_DETAILS_BY_ID,
  GET_USER_MY_PLAN,
  GET_USER_PAYMENT_METHOD,
} from "../action/payment";
import {
  GET_CURRENT_STOCK_PORTFOLIOS_LIST,
  GET_PORTFOLIOS_CHAT_LIST_DATA,
  GET_PORTFOLIOS_LIST_FOR_DASHBOARD,
  GET_SOLD_STOCK_PORTFOLIOS_LIST,
} from "../action/portfolio";
import {
  GET_ALL_COUNTRY_LIST_SUCCESS,
  GET_ALL_PORTFOLIOS_LIST_SUCCESS,
} from "../action/portfolios";
import {
  DELETE_PROMO_CODE,
  GET_PROMOR_CODE_LIST,
  UPDATE_PROMO_CODE,
  UPLOAD_NEW_PROMO_CODE,
} from "../action/promoCode";
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
  soldStockNewsList: [],
  portfoliosChatList: [],
  notificationList: [],
  countries: [],
  promoCodeList: [],
  inviteMessageCode: {},
  inviteYourMessageCode: {},
  allPlanDetails: {},
  unseenNotificationList: 0,
  paymentStatus: {},
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

    // Get contact list
    case GET_ALL_COUNTRY_LIST_SUCCESS: {
      return {
        ...state,
        countries: action.data,
      };
    }

    //Get plan list
    case GET_PLANS_LIST: {
      return {
        ...state,
        planList: action.data,
      };
    }

    //Get plan list
    case UPDATE_PLANS_DETAILS: {
      const updatePlanList = [...state.planList];
      const updateData = updatePlanList.filter(
        (value) => value._id === action.data.id
      );
      updateData[0].isActive = !updateData[0].isActive;
      return {
        ...state,
        planList: updatePlanList,
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

    // remove search result list
    case REMOVE_SEARCH_REASULT_LIST: {
      return {
        ...state,
        searchNewsList: [],
      };
    }
    // sold Stock News List
    case GET_RELETED_SOLD_STOCK_NEWS: {
      return {
        ...state,
        soldStockNewsList: action.data,
      };
    }

    // get plan details by id
    case GET_PLAN_DETAILS_BY_ID: {
      return {
        ...state,
        planDetails: action.payload.data,
        allPlanDetails: action.payload.response,
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

    // get portfolios chat list data
    case GET_PORTFOLIOS_CHAT_LIST_DATA: {
      return {
        ...state,
        portfoliosChatList: action.data,
      };
    }

    // get notification chat list data
    case GET_NOTIFICATION_LIST: {
      return {
        ...state,
        notificationList: action.data.allNotifications,
        unseenNotificationList:
          state.unseenNotificationList - action.data.totalUnseen,
      };
    }

    // get promo code list data
    case GET_PROMOR_CODE_LIST: {
      return {
        ...state,
        promoCodeList: action.data,
      };
    }

    // upload new promo code list data
    case UPLOAD_NEW_PROMO_CODE: {
      const newPromoCodeList = [...state.promoCodeList];
      newPromoCodeList.push(action.data);
      return {
        ...state,
        promoCodeList: newPromoCodeList,
      };
    }

    // Delete plan by id
    case DELETE_PROMO_CODE: {
      const promoCodeListDeleted = [...state.promoCodeList];
      const promoCodeListDelData = promoCodeListDeleted.filter(
        (value) => value._id !== action.data
      );
      return {
        ...state,
        promoCodeList: promoCodeListDelData,
      };
    }

    // update promo code by id
    case UPDATE_PROMO_CODE: {
      const promoCodeListList = [...state.promoCodeList];
      const promoCodeListDetails = promoCodeListList.filter(
        (value) => value._id === action.payload.id
      );
      promoCodeListDetails[0] = action.payload.data;
      return {
        ...state,
        promoCodeList: promoCodeListList,
      };
    }

    // get invite message code data
    case GET_INVITE_MESSAGE_CODE: {
      return {
        ...state,
        inviteMessageCode: action.data,
      };
    }

    // invite your message code data
    case INVITE_YOUR_MESSAGE_CODE: {
      return {
        ...state,
        inviteYourMessageCode: action.data,
      };
    }

    // update invite code by id
    case UPDATE_INVITE_MESSAGE_CODE: {
      const data = [];
      data.push(action.payload.data);
      return {
        ...state,
        inviteYourMessageCode: data,
      };
    }

    //unseen notification
    case GET_UNSEEN_NOTIFICATION_LIST: {
      return {
        ...state,
        unseenNotificationList: action.data,
      };
    }

    //socket notification value
    case GET_SOCECT_NOTIFICATION_VALUE: {
      return {
        ...state,
        unseenNotificationList: state.unseenNotificationList + action.data,
      };
    }

    //payment status with socket
    case GET_SOCKET_PAYMENT_STATUS: {
      return {
        ...state,
        paymentStatus: action.data,
      };
    }

    default:
      return state;
  }
}
