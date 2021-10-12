import { axiosRequest } from "../helper";

/**
 * Get Portfolios list for dashboard api
 * @returns
 */
export const getPortfolioListForDashBoardApi = async () => {
  return await axiosRequest("GET", `/my-portfolio`);
};

/**
 * Get sold stock Portfolios list for dashboard api
 * @param {string} id
 * @returns
 */
export const getSoldPortfolioListForDashBoardApi = async (id) => {
  return await axiosRequest("GET", `/stock/${id}?sold=true&page=0&limit=10`);
};

/**
 * Get current stock Portfolios list for dashboard api
 * @param {string} id
 * @returns
 */
export const getCurrentPortfolioListForDashBoardApi = async (id) => {
  return await axiosRequest("GET", `/stock/${id}?page=0&limit=10`);
};
