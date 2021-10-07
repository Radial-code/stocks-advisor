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
 *  Plans list api
 * @returns
 */
export const getPlansListApi = async () => {
  return await axiosRequest("GET", `/plans`);
};

/**
 * Upadte Plans details api
 * @param {Object} data
 * @param {String} id
 * @returns
 */
export const updatePlansDetailsApi = async (data, id) => {
  return await axiosRequest("PATCH", `/plans/${id}`, data);
};

/**
 * Delete Plans details api
 * @param {String} id
 * @returns
 */
export const deletePlansApi = async (id) => {
  return await axiosRequest("DELETE", `/plans/${id}`);
};
