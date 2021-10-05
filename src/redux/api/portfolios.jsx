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
