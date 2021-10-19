import Swal from "sweetalert2";
import {
  addPortfolioApi,
  getPortfolioListApi,
  userUpdateByAdminApi,
} from "../api/portfolios";

export const GET_ALL_PORTFOLIOS_LIST_SUCCESS =
  "GET_ALL_PORTFOLIOS_LIST_SUCCESS";

/**
 * Get Protfolios list action
 * @param {Object} data
 * @returns
 */
const getProtfoliosList = (data) => ({
  type: GET_ALL_PORTFOLIOS_LIST_SUCCESS,
  data,
});

export const getProtfoliosListAction = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getPortfolioListApi();
    if (response.success) {
      dispatch(getProtfoliosList(response.data));
      setLoading(false);
    } else {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 *
 * @param {Boolen} setLoading
 * @param {Object} data
 * @returns
 */
export const addPortfolioAction = (data, setLoading) => async () => {
  setLoading(true);
  try {
    const response = await addPortfolioApi(data);

    if (response.success) {
      setLoading(false);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to add Protfolio", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 *
 * @param {Boolen} setUserLoading
 * @param {Object} data
 * @returns
 */
export const userUpdateByAdminAction =
  (userId, data, setUserLoading) => async () => {
    setUserLoading(true);
    try {
      const response = await userUpdateByAdminApi(userId, data);

      if (response.success) {
        setUserLoading(false);
        Swal.fire("Success", "User Updated successfully", "success");
        setTimeout(Swal.close, 2000);
      } else {
        setUserLoading(false);
        Swal.fire("Error", "Failed to update user details", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setUserLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };
