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

/**
 * check User Name Api
 * @param {Object} data
 * @return
 */
export const UserNameApi = async (data) => {
  return await axiosRequest("Post", `/checkusername`, data);
};

/**
 * reset password Api
 * @param {Object} data
 * @return
 */
export const resetPasswordApi = async (data) => {
  return await axiosRequest("Post", `/reset-password`, data);
};

/**
 * Get user profile Api
 * @param {Object} data
 * @return
 */
export const getUserProfileApi = async (data) => {
  return await axiosRequest("GET", `/profile`, data);
};
