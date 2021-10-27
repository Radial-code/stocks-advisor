import Swal from "sweetalert2";
import {
  addNewNewsDetailsApi,
  getAllNewsListApi,
  getHomeNewsListApi,
  getNewsByStockApi,
  getNewsDetailsApi,
  getNewsForAdminApi,
  getRelatedNewsApi,
  updateNewsDetailsApi,
  DeleteNewsDetailsApi,
  getSearchResultListApi,
  getRelatedSoldStockNewsApi,
} from "../api/news";

export const GET_NEWS_LIST = "GET_NEWS_LIST";
export const DELETE_NEWS_LIST = "DELETE_NEWS_LIST";
export const GET_NEWS_FOR_ADMIN = "GET_NEWS_FOR_ADMIN";
export const GET_HOME_PAGE_NEWS = "GET_HOME_PAGE_NEWS";
export const GET_NEWS_BY_STOCK_PAGE = "GET_NEWS_BY_STOCK_PAGE";
export const GET_RELATED_NEWS = "GET_RELATED_NEWS";
export const GET_NEWS_DETAILS_BY_ID = "GET_NEWS_DETAILS_BY_ID";
export const GET_SEARCH_RESULT_LIST = "GET_SEARCH_RESULT_LIST";
export const REMOVE_SEARCH_REASULT_LIST = "REMOVE_SEARCH_REASULT_LIST";
export const GET_RELETED_SOLD_STOCK_NEWS = "GET_RELETED_SOLD_STOCK_NEWS";

/**
 * add new News details action
 * @param {Object} data
 * @returns
 */
export const addNewNewsDetailsAction =
  (data, setAddNewsLoading, history) => async () => {
    setAddNewsLoading(true);
    try {
      const response = await addNewNewsDetailsApi(data);
      if (response.success) {
        setAddNewsLoading(false);
        Swal.fire("Success", "News created successfully", "success");
        setTimeout(Swal.close, 2000);
        history.push("/content/manager/news");
      } else {
        setAddNewsLoading(false);
        Swal.fire("Error", "Failed to add News", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setAddNewsLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Get News list action
 * @param {Object} data
 * @returns
 */

const getAllNewsList = (data) => ({
  type: GET_NEWS_LIST,
  data,
});

export const getAllNewsListAction =
  (setLoading, page, setTotalNews) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await getAllNewsListApi(page);
      if (response.success) {
        dispatch(getAllNewsList(response.allNews));
        setTotalNews(response.totalNews);
        setLoading(false);
      } else {
        setLoading(false);
        Swal.fire("Error", "Failed to Load News list", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Get News for admin action
 * @param {Object} data
 * @returns
 */

const getNewsForAdmin = (data) => ({
  type: GET_NEWS_FOR_ADMIN,
  data,
});

export const getNewsListForAdminAction =
  (page, setLoading, setTotalNews) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await getNewsForAdminApi(page);
      if (response.success) {
        dispatch(getNewsForAdmin(response.allNews));
        setTotalNews(response.totalNews);
        setLoading(false);
      } else {
        setLoading(false);
        Swal.fire("Error", "Failed to Load News list", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Get home News action
 * @param {Object} data
 * @returns
 */

const getHomeNewsList = (data) => ({
  type: GET_HOME_PAGE_NEWS,
  data,
});

export const getHomeNewsListApiAction = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getHomeNewsListApi();
    if (response.success) {
      dispatch(getHomeNewsList(response.allNews));
      setLoading(false);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to Load News list", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * Get Related Sold Stock News Action
 * @param {Object} data
 * @returns
 */

const getRelatedSoldStockNews = (data) => ({
  type: GET_RELETED_SOLD_STOCK_NEWS,
  data,
});

export const getRelatedSoldStockNewsAction =
  (data, setSoldLoading) => async (dispatch) => {
    setSoldLoading(true);
    try {
      const response = await getRelatedSoldStockNewsApi(data);
      if (response.success) {
        dispatch(getRelatedSoldStockNews(response.allNews));
        setSoldLoading(false);
      } else {
        setSoldLoading(false);
        Swal.fire("Error", "Failed to Load News list", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setSoldLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Get news by stock action
 * @param {Object} data
 * @returns
 */

const getNewsByStock = (data) => ({
  type: GET_NEWS_BY_STOCK_PAGE,
  data,
});

export const getNewsByStockAction = (id, setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getNewsByStockApi(id);
    if (response.success) {
      dispatch(getNewsByStock(response.news));
      setLoading(false);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to Load News list", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * Get related news action
 * @param {Object} data
 * @returns
 */

const getRelatedNews = (data) => ({
  type: GET_RELATED_NEWS,
  data,
});

export const getRelatedNewsAction =
  (data, getRelatedNewsLoader) => async (dispatch) => {
    getRelatedNewsLoader(true);
    try {
      const response = await getRelatedNewsApi(data);
      if (response.success) {
        dispatch(getRelatedNews(response.news));
        getRelatedNewsLoader(false);
      } else {
        getRelatedNewsLoader(false);
        Swal.fire("Error", "Failed to Load News list", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      getRelatedNewsLoader(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Get related news action
 * @param {Object} data
 * @returns
 */

const getNewsDetails = (data) => ({
  type: GET_NEWS_DETAILS_BY_ID,
  data,
});

export const getNewsDetailsAction = (id, setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getNewsDetailsApi(id);
    if (response.success) {
      dispatch(getNewsDetails(response.details));
      setLoading(false);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to Load News list", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * Update News details
 * @param {String} id
 * @param {Object} data
 * @param {Boolen} setLoading
 * @returns
 */
export const updateNewsDetailsAction =
  (id, data, setLoading, history) => async () => {
    setLoading(true);
    try {
      const response = await updateNewsDetailsApi(id, data);
      if (response.success) {
        setLoading(false);
        Swal.fire("Success", "News Updated successfully", "success");
        setTimeout(Swal.close, 2000);
        history.push("/content/manager/news");
      } else {
        setLoading(false);
        Swal.fire("Error", "Failed to Update News", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * delete news  action
 * @param {Object} data
 * @returns
 */

const DeleteNewsDetails = (data) => ({
  type: DELETE_NEWS_LIST,
  data,
});

export const DeleteNewsDetailsAction = (id, history) => async (dispatch) => {
  try {
    const response = await DeleteNewsDetailsApi(id);
    if (response.success) {
      dispatch(DeleteNewsDetails(id));
      history.push("/content/manager/news");
      Swal.fire("success", "Stock deleted successfully", "success");
      setTimeout(Swal.close, 2000);
    } else {
      Swal.fire("Error", "Failed to delete Stock", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * Get search result news action
 * @param {Object} data
 * @returns
 */

const getSearchResult = (data) => ({
  type: GET_SEARCH_RESULT_LIST,
  data,
});

export const removeSearchResultList = () => ({
  type: REMOVE_SEARCH_REASULT_LIST,
});

export const getSearchResultAction = (data, setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getSearchResultListApi(data);
    if (response.success) {
      dispatch(getSearchResult(response.data));
      setLoading(false);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to Load News list", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};
