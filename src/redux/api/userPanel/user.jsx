import { axiosRequest } from "../../helper";

/**
 * Get user details api
 * @returns
 */
export const getUserDetailsApi = async () => {
  return await axiosRequest("GET", `/profile`);
};

/**
 * Update user details api
 * @returns
 */
export const updateUserDetailsApi = async (data) => {
  return await axiosRequest("POST", "/profile", data);
};
