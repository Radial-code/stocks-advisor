import {
  GET_CATEGORY_LIST,
  GET_EXCHANGE_LIST,
  GET_PORTFOLIO_LIST,
} from "../action/cmPanel/OurServices";
import { GET_STOCK_LIST } from "../action/cmPanel/stock";
import { GET_NEWS_FOR_ADMIN } from "../action/news";

const initialState = {
  stockList: [],
  categoryList: [],
  exchangeList: [],
  portfolioList: [],
  adminNewsList: [],
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

    default:
      return state;
  }
}
