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
 *  get Stock details api
 * @returns
 */
export const getStockDetailsApi = async (id) => {
  return await axiosRequest("GET", `/stock/details/${id}`);
};

/**
 * delete stock details api
 * @param {string} id
 * @returns
 */
export const DeleteStockDetailsApi = async (id) => {
  return await axiosRequest("DELETE", `/stock/${id}`);
};

/**
 *  stock list api
 * @returns
 */
export const getStockListApi = async () => {
  return await axiosRequest("GET", `/stock`);
};

/**
 *  user list for admin api
 * @returns
 */
export const getUserListForAdminApi = async () => {
  return await axiosRequest("GET", `/users`);
};

/**
 *  add new team member api
 * @returns
 */
export const createNewTeamMemberApi = async (data) => {
  return await axiosRequest("POST", `/team`, data);
};

/**
 *  get team member list api
 * @returns
 */
export const getTeamMemberListApi = async () => {
  return await axiosRequest("GET", `/team`);
};
