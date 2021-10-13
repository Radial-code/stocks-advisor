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
 *  delete category api
 * @returns
 */
export const deleteCategoryApi = async (id) => {
  return await axiosRequest("DELETE", `/category/${id}`);
};

/**
 * Update Category details api
 * @param {Object} data
 * @returns
 */
export const updateCategoryDetailsApi = async (id, data) => {
  return await axiosRequest("PUT", `/category/${id}`, data);
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
  return await axiosRequest("PUT", `/exchange/${id}`, data);
};

/**
 * delete exchange details api
 * @param {string} id
 * @returns
 */
export const DeleteExchangeDetailsApi = async (id) => {
  return await axiosRequest("DELETE", `/exchange/${id}`);
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
export const updatePortfolioDetailsApi = async (id, data) => {
  return await axiosRequest("PUT", `/portfolio/${id}`, data);
};

/**
 * delete Portfolio details api
 * @param {string} id
 * @returns
 */
export const DeletePortfolioDetailsApi = async (id) => {
  return await axiosRequest("DELETE", `/portfolio/${id}`);
};
