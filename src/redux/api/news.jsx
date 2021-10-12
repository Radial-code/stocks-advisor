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
export const getNewsForAdminApi = async () => {
  return await axiosRequest("GET", `/news?page=0&limit=10`);
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
