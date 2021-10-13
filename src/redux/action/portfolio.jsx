import Swal from "sweetalert2";
import {
  getCurrentPortfolioListForDashBoardApi,
  getPortfolioListForDashBoardApi,
  getSoldPortfolioListForDashBoardApi,
} from "../api/portfolio";

export const GET_PORTFOLIOS_LIST_FOR_DASHBOARD =
  "GET_PORTFOLIOS_LIST_FOR_DASHBOARD";

export const GET_SOLD_STOCK_PORTFOLIOS_LIST = "GET_SOLD_STOCK_PORTFOLIOS_LIST";

export const GET_CURRENT_STOCK_PORTFOLIOS_LIST =
  "GET_CURRENT_STOCK_PORTFOLIOS_LIST";

/**
 * Get Portfolios list for dashboard action
 * @param {Object} data
 * @returns
 */
const getPortfolioListForDashBoard = (data) => ({
  type: GET_PORTFOLIOS_LIST_FOR_DASHBOARD,
  data,
});

export const getPortfolioListForDashBoardAction =
  (setSideBarLoading) => async (dispatch) => {
    setSideBarLoading(true);
    try {
      const response = await getPortfolioListForDashBoardApi();
      if (response.success) {
        dispatch(getPortfolioListForDashBoard(response.portfolios));
        setSideBarLoading(false);
      } else {
        setSideBarLoading(false);
        Swal.fire("Error", "Failed to Load  Portfolios list", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setSideBarLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Get sold stock Portfolios list for dashboard action
 * @param {Object} data
 * @returns
 */
const getSoldPortfolioListForDashBoard = (data) => ({
  type: GET_SOLD_STOCK_PORTFOLIOS_LIST,
  data,
});

export const getSoldPortfolioListForDashBoardAction =
  (id, setLoading) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await getSoldPortfolioListForDashBoardApi(id);
      if (response.success) {
        dispatch(getSoldPortfolioListForDashBoard(response.news));
        setLoading(false);
      } else {
        setLoading(false);
        Swal.fire(
          "Error",
          "Failed to Load sold stock Portfolios list",
          "error"
        );
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Get current stock Portfolios list for dashboard action
 * @param {Object} data
 * @returns
 */
const getCurrentPortfolioListForDashBoard = (data) => ({
  type: GET_CURRENT_STOCK_PORTFOLIOS_LIST,
  data,
});

export const getCurrentPortfolioListForDashBoardAction =
  (id, setLoading) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await getCurrentPortfolioListForDashBoardApi(id);
      if (response.success) {
        dispatch(getCurrentPortfolioListForDashBoard(response.allStock));
        setLoading(false);
      } else {
        setLoading(false);
        Swal.fire(
          "Error",
          "Failed to Load sold stock Portfolios list",
          "error"
        );
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };
