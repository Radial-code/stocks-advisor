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
 * Update stock api
 * @param {String} id
 * @param {Object} data
 * @returns
 */
export const updateStockDetailsApi = async (id, data) => {
  return await axiosRequest("PUT", `/stock/${id}`, data);
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

/**
 *  get user profile data api
 * @returns
 */
export const getUserProfileDataApi = async (userId) => {
  return await axiosRequest("GET", `/profile/${userId}`);
};
/**
 *  get user paln details data api
 * @returns
 */
export const UserPlanDetailApi = async (userId) => {
  return await axiosRequest("GET", `/user-plan/${userId}`);
};
