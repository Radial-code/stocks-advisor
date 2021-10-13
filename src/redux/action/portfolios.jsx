import Swal from "sweetalert2";
import { addPortfolioApi, getPortfolioListApi } from "../api/portfolios";

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
