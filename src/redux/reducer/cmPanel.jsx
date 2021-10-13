import {
  ADD_NEW_PORTFOLIOS_DETAILS,
  DELETE_CATEGORY_LIST,
  DELETE_PORTFOLIOS_LIST,
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
  GET_NEWS_BY_STOCK_PAGE,
  GET_NEWS_FOR_ADMIN,
  GET_NEWS_LIST,
  GET_RELATED_NEWS,
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
  allRelatedNews: [],
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

    // delete portfolio list
    case DELETE_PORTFOLIOS_LIST: {
      const deletePortfolioList = [...state.portfolioList];
      const deleteList = deletePortfolioList.filter(
        (value) => value._id !== action.data
      );
      return {
        ...state,
        portfolioList: deleteList,
      };
    }

    //Add new portfolios details on list
    case ADD_NEW_PORTFOLIOS_DETAILS: {
      const addNewPortfolioDetails = [...state.portfolioList];
      addNewPortfolioDetails.push(action.data);
      return {
        ...state,
        portfolioList: addNewPortfolioDetails,
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

    // Get Related news list
    case GET_RELATED_NEWS: {
      return {
        ...state,
        allRelatedNews: action.data,
      };
    }

    //Get Stock news list
    case GET_NEWS_BY_STOCK_PAGE: {
      return {
        ...state,
        allRelatedNews: action.data,
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
