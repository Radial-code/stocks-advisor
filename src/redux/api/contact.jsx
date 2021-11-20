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
export const getContactListApi = async (page) => {
  return await axiosRequest("GET", `/contact?page=${page}&limit=10`);
};

/**
 * Get notification list Api
 * @returns
 */
export const getNotificationListApi = async () => {
  return await axiosRequest("GET", `/notification-my`);
};

/**
 * Get unseen notification list Api
 * @returns
 */
export const getUnseenNotificationListApi = async () => {
  return await axiosRequest("GET", `/notification-unseen`);
};

/**
 * add new notification Api
 * @returns
 */
export const addNewNotificationApi = async (data) => {
  return await axiosRequest("POST", `/notification-custom`, data);
};
