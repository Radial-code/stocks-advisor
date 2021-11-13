import { axiosRequest } from "../../helper";

/**
 * Add new Plans details api
 * @param {Object} data
 * @returns
 */
export const addNewPlansDetailsApi = async (data) => {
  return await axiosRequest("POST", `/plans`, data);
};

/**
 * Plan upgrade api
 * @param {Object} data
 * @returns
 */
export const plansUpgradeApi = async (data) => {
  return await axiosRequest("POST", `/plans/upgrade`, data);
};

/**
 *  Plans list api
 * @returns
 */
export const getPlansListApi = async (page, limit) => {
  return await axiosRequest("GET", `/plans?page=${page}&limit=${limit}`);
};

/**
 * Upadte Plans details api
 * @param {Object} data
 * @param {String} id
 * @returns
 */
export const updatePlansDetailsApi = async (data, id) => {
  return await axiosRequest("PUT", `/plans/${id}`, data);
};

/**
 * Delete Plans details api
 * @param {String} id
 * @returns
 */
export const deletePlansApi = async (id) => {
  return await axiosRequest("DELETE", `/plans/${id}`);
};

/**
 * get Plans details by id api
 * @param {String} id
 * @returns
 */
export const getPlanDetailsByIdApi = async (id) => {
  return await axiosRequest("GET", `/plans/${id}`);
};
