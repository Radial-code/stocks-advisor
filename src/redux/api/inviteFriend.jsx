import { axiosRequest } from "../helper";

/**
 * invite friend message create api
 * @param {Object} data
 * @returns
 */
export const inviteFriendsMessageApi = async (data) => {
  return await axiosRequest("POST", `/invitecode`, data);
};

/**
 * get invite friend message api
 * @returns
 */
export const getInviteFriendsMessageApi = async () => {
  return await axiosRequest("GET", `/invitecode`);
};
