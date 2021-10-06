import { axiosRequest } from "../../helper";

/**
 * Add new stock details api
 * @param {Object} data
 * @returns
 */
export const addNewStockDetailsApi = async (data) => {
  return await axiosRequest("POST", `/stock`, data);
};

/**
 *  stock list api
 * @returns
 */
export const getStockListApi = async () => {
  return await axiosRequest("GET", `/stock`);
};

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
