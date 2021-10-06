import { GET_STOCK_LIST } from "../action/cmPanel/stock";

const initialState = {
  stockList: [],
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

    default:
      return state;
  }
}
