import { axiosRequest } from "../helper";

/**
 * Get plan list Api
 * @param {Object} data
 * @returns
 */
export const getPortfolioListApi = async () => {
  return await axiosRequest("GET", `/portfolio`);
};

/**
 * add plan Api
 * @param {Object} data
 * @returns
 */
export const addPortfolioApi = async (data) => {
  return await axiosRequest("POST", `/portfolio`, data);
};

/**
 * User updated by admin Api
 * @param {Object} data
 * @returns
 */
export const userUpdateByAdminApi = async (id) => {
  return await axiosRequest("PUT", `/users/${id}`);
};
