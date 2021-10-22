import Swal from "sweetalert2";
import {
  addContactApi,
  addNewNotificationApi,
  getContactListApi,
  getNotificationListApi,
} from "../api/contact";

export const GET_CONTACT_LIST = "GET_CONTACT_LIST";
export const GET_NOTIFICATION_LIST = "GET_NOTIFICATION_LIST";
/**
 * add contact action
 * @param {Object} data
 * @returns
 */
export const addContactAction = (data, setLoading) => async () => {
  setLoading(true);
  try {
    const response = await addContactApi(data);
    if (response.success) {
      setLoading(false);
      Swal.fire("Success", "Query submitted successfully", "success");
      setTimeout(Swal.close, 2000);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to send Query", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * Get contact list action
 * @param {Object} data
 * @returns
 */

const getContactList = (data) => ({
  type: GET_CONTACT_LIST,
  data,
});

export const getContactListAction =
  (setLoading, page, setTotalContact) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await getContactListApi(page);
      if (response.success) {
        dispatch(getContactList(response.allContact));
        setTotalContact(response.totalContact);
        setLoading(false);
      } else {
        setLoading(false);
        Swal.fire("Error", "Failed to Load contact list", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Get contact list action
 * @param {Object} data
 * @returns
 */

const getNotificationList = (data) => ({
  type: GET_NOTIFICATION_LIST,
  data,
});

export const getNotificationListAction = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getNotificationListApi();
    if (response.success) {
      dispatch(getNotificationList(response.allNotifications));
      setLoading(false);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to Load notification list", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * add New Notification Action
 * @param {Object} data
 * @returns
 */
export const addNewNotificationAction = (data, setLoading) => async () => {
  setLoading(true);
  try {
    const response = await addNewNotificationApi(data);
    if (response.success) {
      setLoading(false);
      Swal.fire("Success", "Notification submitted successfully", "success");
      setTimeout(Swal.close, 2000);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to add Notification", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};
