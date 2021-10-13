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
