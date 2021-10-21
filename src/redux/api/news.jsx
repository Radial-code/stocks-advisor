import { axiosRequest } from "../helper";

/**
 * Add new News details api
 * @param {Object} data
 * @returns
 */
export const addNewNewsDetailsApi = async (data) => {
  return await axiosRequest("POST", `/news`, data);
};

/**
 * Update stock api
 * @param {String} id
 * @param {Object} data
 * @returns
 */
export const updateNewsDetailsApi = async (id, data) => {
  return await axiosRequest("PUT", `/news/${id}`, data);
};

/**
 * delete news details api
 * @param {string} id
 * @returns
 */
export const DeleteNewsDetailsApi = async (id) => {
  return await axiosRequest("DELETE", `/news/${id}`);
};

/**
 *  News list api
 * @returns
 */
export const getAllNewsListApi = async () => {
  return await axiosRequest("GET", `/news?page=0&limit=10`);
};

/**
 *  News home list api
 * @returns
 */
export const getHomeNewsListApi = async () => {
  return await axiosRequest("GET", `/news?home=true`);
};

/**
 *  get News details api
 * @returns
 */
export const getNewsDetailsApi = async (id) => {
  return await axiosRequest("GET", `/news/${id}`);
};

/**
 *  get News for admin api
 * @returns
 */
export const getNewsForAdminApi = async (page) => {
  return await axiosRequest("GET", `/admin/news?page=${page}&limit=10`);
};

/**
 *  get News by stock admin api
 * @returns
 */
export const getNewsByStockApi = async (id) => {
  return await axiosRequest("GET", `/news/by-stock/${id}?page=0&limit=10`);
};

/**
 *  get Related News api
 * @returns
 */
export const getRelatedNewsApi = async (data) => {
  return await axiosRequest("POST", `/news/related?page=0&limit=10`, data);
};

/**
 *  get search Result News api
 * @returns
 */
export const getSearchResultListApi = async (data) => {
  return await axiosRequest(
    "GET",
    `/news-search?query=${data}&page=0&limit=10`
  );
};

/**
 * get Related Sold Stock News Api
 * @param {Array} data
 * @returns
 */
export const getRelatedSoldStockNewsApi = async (data) => {
  return await axiosRequest("POST", `/news-sold-stock`, data);
};
