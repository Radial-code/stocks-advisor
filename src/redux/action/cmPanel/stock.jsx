import Swal from "sweetalert2";
import {
  addNewCategoryDetailsApi,
  addNewStockDetailsApi,
  getCategoryListApi,
  getStockListApi,
} from "../../api/cmPanel/stock";

export const GET_STOCK_LIST = "GET_STOCK_LIST";
export const GET_CATEGORY_LIST = "GET_CATEGORY_LIST";

/**
 * add new stock details action
 * @param {Object} data
 * @returns
 */
export const addNewStockDetailsAction = (data, setLoading) => async () => {
  setLoading(true);
  try {
    const response = await addNewStockDetailsApi(data);
    if (response.success) {
      setLoading(false);
      Swal.fire("Success", "Stock submitted successfully", "success");
      setTimeout(Swal.close, 2000);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to add stock", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
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
      dispatch(getStockList(response.data));
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
 * add new Category details action
 * @param {Object} data
 * @returns
 */
export const addNewCategoryDetailsAction = (data, setLoading) => async () => {
  setLoading(true);
  try {
    const response = await addNewCategoryDetailsApi(data);
    if (response.success) {
      setLoading(false);
      Swal.fire("Success", "Category submitted successfully", "success");
      setTimeout(Swal.close, 2000);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to add Category", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * Get Category list action
 * @param {Object} data
 * @returns
 */

const getCategoryList = (data) => ({
  type: GET_CATEGORY_LIST,
  data,
});

export const getCategoryListAction = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getCategoryListApi();
    if (response.success) {
      dispatch(getCategoryList(response.data));
      setLoading(false);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to Load Category list", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};
