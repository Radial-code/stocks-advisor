import { axiosRequest } from "../helper";

/**
 * Login Api
 * @param {Object} data
 * @returns
 */
export const LoginApi = async (data) => {
  return await axiosRequest("POST", `/login`, data);
};

/**
 * Sign up Api
 * @param {Object} data
 * @returns
 */
export const SignUpApi = async (data) => {
  return await axiosRequest("POST", `/signup`, data);
};

/**
 * Change password Api
 * @param {Object} data
 * @returns
 */
export const ChangePasswordApi = async (data) => {
  return await axiosRequest("POST", `/change_password`, data);
};
