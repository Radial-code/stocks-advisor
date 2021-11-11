import Swal from "sweetalert2";
import {
  getPromoCodeDetailsApi,
  getPromoCodeListApi,
  uploadNewPromoCodeApi,
} from "../api/promoCode";

export const GET_PROMOR_CODE_LIST = "GET_PROMOR_CODE_LIST";
export const GET_PROMOR_CODE_DETAILS = "GET_PROMOR_CODE_DETAILS";
export const UPLOAD_NEW_PROMO_CODE = "UPLOAD_NEW_PROMO_CODE";

/**
 * Get promo code list action
 * @param {Object} data
 * @returns
 */
const getPromoCodeList = (data) => ({
  type: GET_PROMOR_CODE_LIST,
  data,
});

export const getPromoCodeListAction = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getPromoCodeListApi();
    if (response.success) {
      dispatch(getPromoCodeList(response.data));
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
 * Get promo code details action
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
