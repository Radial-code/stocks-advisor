import Swal from "sweetalert2";
import {
  confirmPlanByIdForStripeApi,
  getBuyPlanApi,
  getMyPlanApi,
  getPlanDetailsByIdApi,
  getUserPaymentMethodApi,
} from "../api/payment";

export const GET_USER_PAYMENT_METHOD = "GET_USER_PAYMENT_METHOD";
export const GET_USER_MY_PLAN = "GET_USER_MY_PLAN";
export const ADD_PAYMENT_STRIPE_ID = "ADD_PAYMENT_STRIPE_ID";
export const GET_PLAN_DETAILS_BY_ID = "GET_PLAN_DETAILS_BY_ID";

/**
 * Stripe payment Id
 * @param {String} id
 * @returns
 */
export const AddStripePaymentId = (id) => ({
  type: ADD_PAYMENT_STRIPE_ID,
  id,
});

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
      dispatch(getMyPlan(response.plan));
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
 * Get user my plan list action
 * @param {Object} data
 * @returns
 */
const getPlanDetailsById = (data, response) => ({
  type: GET_PLAN_DETAILS_BY_ID,
  payload: {
    data: data,
    response: response,
  },
});

export const getPlanDetailsByIdAction =
  (id, setLoading) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await getPlanDetailsByIdApi(id);
      if (response.success) {
        dispatch(getPlanDetailsById(response.details, response));
        setLoading(false);
      } else {
        setLoading(false);
        Swal.fire("Error", "Failed to Load user plan details", "error");
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
 * @param {Object} data
 * @param {Boolen} setLoading
 * @returns
 */
export const getBuyPlanAction =
  (data, setLoading, setPaymentId, setStripeUrl) => async () => {
    setLoading(true);
    try {
      const response = await getBuyPlanApi(data);
      if (response.success) {
        setPaymentId(response.paymentId);
        setLoading(false);
        setStripeUrl(response.url);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      Swal.fire("Error!", "You already have a plan", "error");
      setTimeout(Swal.close, 5000);
    }
  };

/**
 *
 * @param {Object} data
 * @param {Boolen} setLoading
 * @returns
 */
export const confirmPlanByIdForStripe = (data, history) => async () => {
  try {
    const response = await confirmPlanByIdForStripeApi(data);
    if (response.success) {
      history.push("/");
      window.location.reload();
    }
  } catch (error) {
    Swal.fire("Error!", "Failed to add payment method", "error");
    setTimeout(Swal.close, 2000);
  }
};
