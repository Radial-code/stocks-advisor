import Swal from "sweetalert2";
import {
  addNewStockDetailsApi,
  getStockListApi,
  getUserListForAdminApi,
} from "../../api/cmPanel/stock";

export const GET_STOCK_LIST = "GET_STOCK_LIST";
export const GET_USER_LIST_FOR_ADMIN = "GET_USER_LIST_FOR_ADMIN";

/**
 * add new stock details action
 * @param {Object} data
 * @returns
 */
export const addNewStockDetailsAction =
  (data, setAddStockLoading) => async () => {
    setAddStockLoading(true);
    try {
      const response = await addNewStockDetailsApi(data);
      if (response.success) {
        setAddStockLoading(false);
        Swal.fire("Success", "Stock submitted successfully", "success");
        setTimeout(Swal.close, 2000);
      } else {
        setAddStockLoading(false);
        Swal.fire("Error", "Failed to add stock", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setAddStockLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Get stock list action
 * @param {Object} data
 * @returns
 */

const getStockList = (data) => ({
  type: GET_STOCK_LIST,
  data,
});

export const getStockListAction = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getStockListApi();
    if (response.success) {
      dispatch(getStockList(response.allStock));
      setLoading(false);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to Load stock list", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * Get user list action
 * @param {Object} data
 * @returns
 */

const getUserListForAdmin = (data) => ({
  type: GET_USER_LIST_FOR_ADMIN,
  data,
});

export const getUserListForAdminAction = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getUserListForAdminApi();
    if (response.success) {
      dispatch(getUserListForAdmin(response.allStock));
      setLoading(false);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to user list", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};
