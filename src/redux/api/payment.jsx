import { axiosRequest } from "../helper";

/**
 * get user payment method api
 * @returns
 */
export const getUserPaymentMethodApi = async () => {
  return await axiosRequest("GET", `/my-payment`);
};

/**
 * get user my plan api
 * @returns
 */
export const getMyPlanApi = async () => {
  return await axiosRequest("GET", `/my-plan`);
};

/**
 * buy plan api
 * @param {Object} data
 * @returns
 */
export const getBuyPlanApi = async (data) => {
  return await axiosRequest("POST", `/buy/plan`, data);
};

/**
 * get plan details by Id api
 * @param {String} id
 * @returns
 */
export const getPlanDetailsByIdApi = async (id) => {
  return await axiosRequest("GET", `/plans/${id}`);
};
