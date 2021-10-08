import {
  DELETE_CATEGORY_LIST,
  GET_CATEGORY_LIST,
  GET_EXCHANGE_LIST,
  GET_PORTFOLIO_LIST,
} from "../action/cmPanel/OurServices";
import {
  GET_STOCK_LIST,
  GET_USER_LIST_FOR_ADMIN,
} from "../action/cmPanel/stock";
import {
  GET_HOME_PAGE_NEWS,
  GET_NEWS_FOR_ADMIN,
  GET_NEWS_LIST,
} from "../action/news";

const initialState = {
  stockList: [],
  categoryList: [],
  exchangeList: [],
  portfolioList: [],
  adminNewsList: [],
  adminUserList: [],
  homeNewsList: [],
  allNews: [],
};

export default function cmPanel(state = initialState, action) {
  switch (action.type) {
    // Get contact list
    case GET_STOCK_LIST: {
      return {
        ...state,
        stockList: action.data,
      };
    }

    // Get category list
    case GET_CATEGORY_LIST: {
      return {
        ...state,
        categoryList: action.data,
      };
    }

    // delete category list
    case DELETE_CATEGORY_LIST: {
      const deleteCategoryList = [...state.categoryList];
      const deleteList = deleteCategoryList.filter(
        (value) => value._id !== action.data
      );
      return {
        ...state,
        categoryList: deleteList,
      };
    }

    // Get Exchange list
    case GET_EXCHANGE_LIST: {
      return {
        ...state,
        exchangeList: action.data,
      };
    }

    // Get portfolio list
    case GET_PORTFOLIO_LIST: {
      return {
        ...state,
        portfolioList: action.data,
      };
    }

    // Get news list for admin
    case GET_NEWS_FOR_ADMIN: {
      return {
        ...state,
        adminNewsList: action.data,
      };
    }

    // Get news list for home
    case GET_HOME_PAGE_NEWS: {
      return {
        ...state,
        homeNewsList: action.data,
      };
    }

    // Get all news list
    case GET_NEWS_LIST: {
      return {
        ...state,
        allNews: action.data,
      };
    }

    // Get user list for admin
    case GET_USER_LIST_FOR_ADMIN: {
      return {
        ...state,
        adminUserList: action.data,
      };
    }

    default:
      return state;
  }
}
