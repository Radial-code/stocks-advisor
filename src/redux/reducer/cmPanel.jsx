import {
  ADD_NEW_CATEGORY_DETAILS,
  ADD_NEW_EXCHANGE_DETAILS,
  ADD_NEW_PORTFOLIOS_DETAILS,
  DELETE_CATEGORY_LIST,
  DELETE_EXCHANGE_LIST,
  DELETE_PORTFOLIOS_LIST,
  GET_CATEGORY_LIST,
  GET_EXCHANGE_LIST,
  GET_PORTFOLIO_LIST,
  UPDATE_CATEGORY_DETAILS,
  UPDATE_EXCHANGE_DETAILS,
  UPDATE_PORTFOLIO_DETAILS,
} from "../action/cmPanel/OurServices";
import {
  DELETE_STOCK_LIST,
  GET_STOCK_DETAILS_BY_ID,
  GET_STOCK_LIST,
  GET_USER_LIST_FOR_ADMIN,
  REMOVE_STOCK_DETAIL_DATA,
} from "../action/cmPanel/stock";
import {
  DELETE_NEWS_LIST,
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
  stockDetails: {},
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

    // delete category list
    case DELETE_STOCK_LIST: {
      const deleteStockList = [...state.stockList];
      const deleteList = deleteStockList.filter(
        (value) => value._id !== action.data
      );
      return {
        ...state,
        stockList: deleteList,
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

    // Delete plan by id
    case DELETE_EXCHANGE_LIST: {
      const deleteExchangeList = [...state.exchangeList];
      const deleteList = deleteExchangeList.filter(
        (value) => value._id !== action.data
      );
      return {
        ...state,
        exchangeList: deleteList,
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
    //Add new portfolios details on list
    case ADD_NEW_EXCHANGE_DETAILS: {
      const addNewexchangeListDetails = [...state.exchangeList];
      addNewexchangeListDetails.push(action.data);
      return {
        ...state,
        exchangeList: addNewexchangeListDetails,
      };
    }
    //Add new category details on list
    case ADD_NEW_CATEGORY_DETAILS: {
      const addNewCategoryListDetails = [...state.categoryList];
      addNewCategoryListDetails.push(action.data);
      return {
        ...state,
        categoryList: addNewCategoryListDetails,
      };
    }

    // Get news list for admin
    case GET_NEWS_FOR_ADMIN: {
      return {
        ...state,
        adminNewsList: action.data,
      };
    }

    // Get news details by id
    case GET_STOCK_DETAILS_BY_ID: {
      return {
        ...state,
        stockDetails: action.data,
      };
    }
    case REMOVE_STOCK_DETAIL_DATA: {
      return {
        ...state,
        stockDetails: {},
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

    // delete portfolio list
    case DELETE_NEWS_LIST: {
      const deleteNewsList = [...state.allNews];
      const deleteList = deleteNewsList.filter(
        (value) => value._id !== action.data
      );
      return {
        ...state,
        allNews: deleteList,
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

    // update category list for admin
    case UPDATE_CATEGORY_DETAILS: {
      const UpdateCategoryList = [...state.categoryList];
      const UpdateObjectList = UpdateCategoryList.filter(
        (value) => value._id === action.payload.id
      );
      UpdateObjectList[0].title = action.payload.data.title;
      return {
        ...state,
        categoryList: UpdateCategoryList,
      };
    }

    // update protfolios list for admin
    case UPDATE_PORTFOLIO_DETAILS: {
      const UpdatePortfoliosList = [...state.portfolioList];
      const UpdateObjectList = UpdatePortfoliosList.filter(
        (value) => value._id === action.payload.id
      );
      UpdateObjectList[0].title = action.payload.data.title;
      return {
        ...state,
        portfolioList: UpdatePortfoliosList,
      };
    }

    // update exchange list for admin
    case UPDATE_EXCHANGE_DETAILS: {
      const UpdateExchangeDetails = [...state.exchangeList];
      const UpdateObjectList = UpdateExchangeDetails.filter(
        (value) => value._id === action.payload.id
      );
      UpdateObjectList[0].title = action.payload.data.title;
      return {
        ...state,
        exchangeList: UpdateExchangeDetails,
      };
    }

    default:
      return state;
  }
}
