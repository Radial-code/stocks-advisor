import Swal from "sweetalert2";
import {
  getUserDetailsApi,
  updateUserDetailsApi,
} from "../../api/userPanel/user";

export const GET_USER_DETAILS = "GET_USER_DETAILS";
/**
 * Get user details action
 * @param {Object} data
 * @returns
 */

const getUserDetails = (data) => ({
  type: GET_USER_DETAILS,
  data,
});

export const getUserDetailsAction = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getUserDetailsApi();
    if (response.success) {
      dispatch(getUserDetails(response.data));
      setLoading(false);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to Load user details", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * Update user details action
 * @param {Object} data
 * @returns
 */

export const updateUserDetailsAction = (data) => async () => {
  try {
    const response = await updateUserDetailsApi(data);
    if (response.success) {
      return response.data;
    } else {
      Swal.fire("Error", "Failed to update user details", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};
