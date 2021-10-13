import Swal from "sweetalert2";
import { getMyPlanApi, getUserPaymentMethodApi } from "../api/payment";

export const GET_USER_PAYMENT_METHOD = "GET_USER_PAYMENT_METHOD";
export const GET_USER_MY_PLAN = "GET_USER_MY_PLAN";

/**
 * Get user payment method list action
 * @param {Object} data
 * @returns
 */
const getUserPaymentMethod = (data) => ({
  type: GET_USER_PAYMENT_METHOD,
  data,
});

export const getUserPaymentMethodAction = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getUserPaymentMethodApi();
    if (response.success) {
      dispatch(getUserPaymentMethod(response.myPayments));
      setLoading(false);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to Load user payment list", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * Get user my plan list action
 * @param {Object} data
 * @returns
 */
const getMyPlan = (data) => ({
  type: GET_USER_MY_PLAN,
  data,
});

export const getMyPlanAction = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getMyPlanApi();
    if (response.success) {
      dispatch(getMyPlan(response.myPayments));
      setLoading(false);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to Load user plan list", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};
