import Swal from "sweetalert2";
import {
  addNewNewsDetailsApi,
  getAllNewsListApi,
  getNewsForAdminApi,
} from "../api/news";

export const GET_NEWS_LIST = "GET_NEWS_LIST";
export const GET_NEWS_FOR_ADMIN = "GET_NEWS_FOR_ADMIN";

/**
 * add new News details action
 * @param {Object} data
 * @returns
 */
export const addNewNewsDetailsAction =
  (data, setAddNewsLoading) => async () => {
    setAddNewsLoading(true);
    try {
      const response = await addNewNewsDetailsApi(data);
      if (response.success) {
        setAddNewsLoading(false);
        Swal.fire("Success", "News submitted successfully", "success");
        setTimeout(Swal.close, 2000);
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

export const getAllNewsListAction = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getAllNewsListApi();
    if (response.success) {
      dispatch(getAllNewsList(response.allNews));
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

export const getNewsListForAdminAction = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getNewsForAdminApi();
    if (response.success) {
      dispatch(getNewsForAdmin(response.allNews));
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
