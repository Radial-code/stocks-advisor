import { axiosRequest } from "../helper";

/**
 * Add contact Api
 * @param {Object} data
 * @returns
 */
export const addContactApi = async (data) => {
  return await axiosRequest("POST", `/contact`, data);
};

/**
 * Get contact list Api
 * @returns
 */
export const getContactListApi = async () => {
  return await axiosRequest("GET", `/contact?page=0&limit=10`);
};

/**
 * Get notification list Api
 * @returns
 */
export const getNotificationListApi = async () => {
  return await axiosRequest("GET", `/notification-my`);
};

/**
 * add new notification Api
 * @returns
 */
export const addNewNotificationApi = async (data) => {
  return await axiosRequest("POST", `/notification-custom`, data);
};
