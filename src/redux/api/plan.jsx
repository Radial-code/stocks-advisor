import { axiosRequest } from "../helper";

/**
 * Get plan list Api
 * @param {Object} data
 * @returns
 */
export const getPlansListApi = async () => {
  return await axiosRequest("GET", `/plans`);
};

/**
 * add plan Api
 * @param {Object} data
 * @returns
 */
export const addPlansApi = async (data) => {
  return await axiosRequest("POST", `/plans`, data);
};

/**
 * add plan Api
 * @param {Object} data
 * @returns
 */
export const updatePlansApi = async (data, id) => {
  return await axiosRequest("PATCH", `/plans/${id}`, data);
};

/**
 * delete plan Api
 * @param {Object} data
 * @returns
 */
export const deletePlansApi = async (data, id) => {
  return await axiosRequest("DELETE", `/plans/${id}`, data);
};
