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

/**
 * invite your friend message code api
 * @returns
 */
export const InviteYourFriendsCodeApi = async () => {
  return await axiosRequest("GET", `/my-invitecode`);
};

/**
 * update invite friend message code api
 * @returns
 */
export const updateInviteFriendMessageApi = async (id, data) => {
  return await axiosRequest("PUT", `/invitecode/${id}`, data);
};
