import Swal from "sweetalert2";
import {
  addNewCategoryDetailsApi,
  addNewExchangeDetailsApi,
  addNewPortfolioDetailsApi,
  deleteCategoryApi,
  DeletePortfolioDetailsApi,
  getCategoryListApi,
  getExchangeListApi,
  getPortfolioListApi,
  updateExchangeDetailsApi,
  updatePortfolioDetailsApi,
  updateCategoryDetailsApi,
  DeleteExchangeDetailsApi,
} from "../../api/cmPanel/ourServices";

export const GET_CATEGORY_LIST = "GET_CATEGORY_LIST";
export const UPDATE_CATEGORY_DETAILS = "UPDATE_CATEGORY_DETAILS";
export const DELETE_CATEGORY_LIST = "DELETE_CATEGORY_LIST";
export const GET_EXCHANGE_LIST = "GET_EXCHANGE_LIST";
export const ADD_NEW_EXCHANGE_DETAILS = "ADD_NEW_EXCHANGE_DETAILS";
export const DELETE_EXCHANGE_LIST = "DELETE_EXCHANGE_LIST";
export const UPDATE_EXCHANGE_DETAILS = "UPDATE_EXCHANGE_DETAILS";
export const UPDATE_PORTFOLIO_DETAILS = "UPDATE_PORTFOLIO_DETAILS";
export const GET_PORTFOLIO_LIST = "GET_PORTFOLIO_LIST";
export const DELETE_PORTFOLIOS_LIST = "DELETE_PORTFOLIOS_LIST";
export const ADD_NEW_PORTFOLIOS_DETAILS = "ADD_NEW_PORTFOLIOS_DETAILS";
export const ADD_NEW_CATEGORY_DETAILS = "ADD_NEW_CATEGORY_DETAILS";

/**
 * add new Category details action
 * @param {Object} data
 * @returns
 */

const addNewCategoryDetails = (data) => ({
  type: ADD_NEW_CATEGORY_DETAILS,
  data,
});

export const addNewCategoryDetailsAction =
  (data, setLoading, handleClose) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await addNewCategoryDetailsApi(data);
      if (response.success) {
        dispatch(addNewCategoryDetails(response.category));
        setLoading(false);
        handleClose();
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
      dispatch(getCategoryList(response.allCategories));
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
/**
 * delete Category  action
 * @param {Object} data
 * @returns
 */

const deleteCategory = (data) => ({
  type: DELETE_CATEGORY_LIST,
  data,
});

export const deleteCategoryAction = (id) => async (dispatch) => {
  try {
    const response = await deleteCategoryApi(id);
    if (response.success) {
      dispatch(deleteCategory(id));
      Swal.fire("success", "Category deleted successfully", "success");
      setTimeout(Swal.close, 2000);
    } else {
      Swal.fire("Error", "Failed to delete Category", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * add new Exchange details action
 * @param {Object} data
 * @returns
 */

const addNewExchangeDetails = (data) => ({
  type: ADD_NEW_EXCHANGE_DETAILS,
  data,
});

export const addNewExchangeDetailsAction =
  (data, setLoading) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await addNewExchangeDetailsApi(data);
      if (response.success) {
        setLoading(false);
        dispatch(addNewExchangeDetails(response.exchange));
        Swal.fire("Success", "Exchange submitted successfully", "success");
        setTimeout(Swal.close, 2000);
      } else {
        setLoading(false);
        Swal.fire("Error", "Failed to add Exchange", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Get Exchange list action
 * @param {Object} data
 * @returns
 */

const getExchangeList = (data) => ({
  type: GET_EXCHANGE_LIST,
  data,
});

export const getExchangeListAction =
  (setExchangeLoading) => async (dispatch) => {
    setExchangeLoading(true);
    try {
      const response = await getExchangeListApi();
      if (response.success) {
        dispatch(getExchangeList(response.exchange));
        setExchangeLoading(false);
      } else {
        setExchangeLoading(false);
        Swal.fire("Error", "Failed to Load Exchange list", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setExchangeLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Update Exchange details action
 * @param {Object} data
 * @returns
 */

const updateExchangeDetails = (id, data) => ({
  type: UPDATE_EXCHANGE_DETAILS,
  payload: {
    data: data,
    id: id,
  },
});

export const updateExchangeDetailsAction =
  (id, data, setExchangeLoading, handleClose) => async (dispatch) => {
    setExchangeLoading(true);
    try {
      const response = await updateExchangeDetailsApi(id, data);
      if (response.success) {
        dispatch(updateExchangeDetails(id, data));
        setExchangeLoading(false);
        Swal.fire("Success", "Exchange Details Update successfully", "Success");
        setTimeout(Swal.close, 2000);
        handleClose();
      } else {
        setExchangeLoading(false);
        Swal.fire("Error", "Failed to Update Exchange Details", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setExchangeLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * delete Exchange  action
 * @param {Object} data
 * @returns
 */

const DeleteExchangeDetails = (data) => ({
  type: DELETE_EXCHANGE_LIST,
  data,
});

export const DeleteExchangeDetailsAction = (id) => async (dispatch) => {
  try {
    const response = await DeleteExchangeDetailsApi(id);
    if (response.success) {
      dispatch(DeleteExchangeDetails(id));
      Swal.fire("success", "Exchange deleted successfully", "success");
      setTimeout(Swal.close, 2000);
    } else {
      Swal.fire("Error", "Failed to delete Exchange", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * add new Portfolio details action
 * @param {Object} data
 * @returns
 */

const addNewPortfolioDetails = (data) => ({
  type: ADD_NEW_PORTFOLIOS_DETAILS,
  data,
});

export const addNewPortfolioDetailsAction =
  (data, setLoading) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await addNewPortfolioDetailsApi(data);
      if (response.success) {
        setLoading(false);
        dispatch(addNewPortfolioDetails(response.portfolio));
        Swal.fire("Success", "Portfolio submitted successfully", "success");
        setTimeout(Swal.close, 2000);
      } else {
        setLoading(false);
        Swal.fire("Error", "Failed to add Portfolio", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Get Portfolio list action
 * @param {Object} data
 * @returns
 */

const getPortfolioList = (data) => ({
  type: GET_PORTFOLIO_LIST,
  data,
});

export const getPortfolioListAction =
  (setPortfolioLoading) => async (dispatch) => {
    setPortfolioLoading(true);
    try {
      const response = await getPortfolioListApi();
      if (response.success) {
        dispatch(getPortfolioList(response.portfolios));
        setPortfolioLoading(false);
      } else {
        setPortfolioLoading(false);
      }
    } catch (error) {
      setPortfolioLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Update Portfolio details action
 * @param {Object} data
 * @returns
 */

const updatePortfolioDetails = (id, data) => ({
  type: UPDATE_PORTFOLIO_DETAILS,
  payload: {
    data: data,
    id: id,
  },
});

export const updatePortfolioDetailsAction =
  (id, data, setLoading, handleClose) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await updatePortfolioDetailsApi(id, data);
      handleClose();
      if (response.success) {
        dispatch(updatePortfolioDetails(id, data));
        setLoading(false);
        Swal.fire(
          "Success",
          "Portfolio Details Update successfully",
          "Success"
        );
        setTimeout(Swal.close, 2000);
      } else {
        setLoading(false);
        Swal.fire("Error", "Failed to Update Portfolio Details", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Update Category details action
 * @param {Object} data
 * @returns
 */

const updateCategoryDetails = (id, data) => ({
  type: UPDATE_CATEGORY_DETAILS,
  payload: {
    data: data,
    id: id,
  },
});

export const updateCategoryDetailsAction =
  (id, data, setLoading, handleClose) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await updateCategoryDetailsApi(id, data);
      handleClose();
      if (response.success) {
        dispatch(updateCategoryDetails(id, data));
        setLoading(false);
        Swal.fire("Success", "category Details Update successfully", "Success");
        setTimeout(Swal.close, 2000);
      } else {
        setLoading(false);
        Swal.fire("Error", "Failed to Update category Details", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };
/**
 * delete Category  action
 * @param {Object} data
 * @returns
 */

const DeletePortfolioDetails = (data) => ({
  type: DELETE_PORTFOLIOS_LIST,
  data,
});

export const DeletePortfolioDetailsAction = (id) => async (dispatch) => {
  try {
    const response = await DeletePortfolioDetailsApi(id);
    if (response.success) {
      dispatch(DeletePortfolioDetails(id));
      Swal.fire("success", "Portfolio deleted successfully", "success");
      setTimeout(Swal.close, 2000);
    } else {
      Swal.fire("Error", "Failed to delete Portfolio", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};
