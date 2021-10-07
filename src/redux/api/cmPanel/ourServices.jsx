import { axiosRequest } from "../../helper";

/**
 * Add new category details api
 * @param {Object} data
 * @returns
 */
export const addNewCategoryDetailsApi = async (data) => {
  return await axiosRequest("POST", `/category`, data);
};

/**
 *  category list api
 * @returns
 */
export const getCategoryListApi = async () => {
  return await axiosRequest("GET", `/category`);
};

/**
 * Add new exchange details api
 * @param {Object} data
 * @returns
 */
export const addNewExchangeDetailsApi = async (data) => {
  return await axiosRequest("POST", `/exchange`, data);
};

/**
 *  exchange list api
 * @returns
 */
export const getExchangeListApi = async () => {
  return await axiosRequest("GET", `/exchange`);
};

/**
 * Update exchange details api
 * @param {Object} data
 * @returns
 */
export const updateExchangeDetailsApi = async (data, id) => {
  return await axiosRequest("PATCH", `/exchange/${id}`, data);
};

/**
 * Add new Portfolio details api
 * @param {Object} data
 * @returns
 */
export const addNewPortfolioDetailsApi = async (data) => {
  return await axiosRequest("POST", `/portfolio`, data);
};

/**
 *  Portfolio list api
 * @returns
 */
export const getPortfolioListApi = async () => {
  return await axiosRequest("GET", `/portfolio`);
};

/**
 * Update Portfolio details api
 * @param {Object} data
 * @returns
 */
export const updatePortfolioDetailsApi = async (data, id) => {
  return await axiosRequest("PATCH", `/portfolio/${id}`, data);
};
