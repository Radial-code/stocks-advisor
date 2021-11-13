import Swal from "sweetalert2";
import {
  DeletePromoCodeApi,
  getPromoCodeDetailsApi,
  getPromoCodeListApi,
  updatePromoCodeApi,
  uploadNewPromoCodeApi,
  verifyPromoCodeApi,
} from "../api/promoCode";

export const GET_PROMOR_CODE_LIST = "GET_PROMOR_CODE_LIST";
export const GET_PROMOR_CODE_DETAILS = "GET_PROMOR_CODE_DETAILS";
export const UPLOAD_NEW_PROMO_CODE = "UPLOAD_NEW_PROMO_CODE";
export const DELETE_PROMO_CODE = "DELETE_PROMO_CODE";
export const UPDATE_PROMO_CODE = "UPDATE_PROMO_CODE";
export const VERIFY_CODE_SUCCESS = "VERIFY_CODE_SUCCESS";

/**
 * Get promo code list action
 * @param {Object} data
 * @returns
 */
const getPromoCodeList = (data) => ({
  type: GET_PROMOR_CODE_LIST,
  data,
});

export const getPromoCodeListAction =
  (setLoading, setTotalPromoCode) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await getPromoCodeListApi();
      if (response.success) {
        dispatch(getPromoCodeList(response.data));
        setTotalPromoCode(response.total);
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
 * Get promo code details action
 * @param {Object} data
 * @returns
 */
const getPromoCodeDetails = (data) => ({
  type: GET_PROMOR_CODE_DETAILS,
  data,
});

export const getPromoCodeDetailsAction =
  (id, setLoading) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await getPromoCodeDetailsApi(id);
      if (response.success) {
        dispatch(getPromoCodeDetails(response.data));
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
 * Get promo code upload action
 * @param {Object} data
 * @returns
 */
const uploadNewPromoCode = (data) => ({
  type: UPLOAD_NEW_PROMO_CODE,
  data,
});

export const uploadNewPromoCodeAction =
  (data, setLoading) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await uploadNewPromoCodeApi(data);
      if (response.success) {
        dispatch(uploadNewPromoCode(response.data));
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
 * delete promo code action
 * @param {String} data
 * @returns
 */
const deletePromoCode = (data) => ({
  type: DELETE_PROMO_CODE,
  data,
});

export const deletePromoCodeAction = (id) => async (dispatch) => {
  try {
    const response = await DeletePromoCodeApi(id);
    if (response.success) {
      console.log(id);
      dispatch(deletePromoCode(id));
      Swal.fire("success", "Promo Code deleted successfully", "success");
      setTimeout(Swal.close, 2000);
    } else {
      Swal.fire("Error", "Failed to delete Promo code", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * Update Portfolio details action
 * @param {Object} data
 * @returns
 */

const updatePromoCode = (id, data) => ({
  type: UPDATE_PROMO_CODE,
  payload: {
    data: data,
    id: id,
  },
});

export const updatePromoCodeAction =
  (id, data, setLoading, handleClose) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await updatePromoCodeApi(id, data);
      handleClose();
      if (response.success) {
        dispatch(updatePromoCode(id, data));
        setLoading(false);
        Swal.fire("Success", "Promo Code Updated successfully", "Success");
        setTimeout(Swal.close, 2000);
      } else {
        setLoading(false);
        Swal.fire("Error", "Failed to Update Promo Code Details", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setLoading(false);
    }
  };

/**
 * verify promo code action
 * @param {Object} data
 * @returns
 */
const verifyPromoCode = (data) => ({
  type: VERIFY_CODE_SUCCESS,
  data,
});

export const verifyPromoCodeAction =
  (data, setLoading, setPromoCodeData) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await verifyPromoCodeApi(data);
      console.log(response.err);
      if (response.success) {
        dispatch(verifyPromoCode(response));
        setPromoCodeData(response);
        setLoading(false);
      } else {
        setLoading(false);
        setLoading(false);
        Swal.fire("Error!", `${response.message}`, "error");
      }
    } catch (error) {
      setLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };
