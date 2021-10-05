import Swal from "sweetalert2";
import { getPlansListApi } from "../api/plan";

export const GET_PLANS_LIST_SUCCESS = "GET_PLANS_LIST_SUCCESS";

/**
 * Get plans list action
 * @param {Object} data
 * @returns
 */
const getPlansList = (data) => ({
  type: GET_PLANS_LIST_SUCCESS,
  data,
});

export const getPlansListAction = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getPlansListApi();
    if (response.success) {
      dispatch(getPlansList(response.allPlans));
      setLoading(false);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to Load plan list", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};
