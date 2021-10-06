import Swal from "sweetalert2";
import { addContactApi, getContactListApi } from "../api/contact";

export const GET_CONTACT_LIST = "GET_CONTACT_LIST";
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

export const getContactListAction = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getContactListApi();
    if (response.success) {
      dispatch(getContactList(response.data));
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
