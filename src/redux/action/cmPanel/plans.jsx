import Swal from "sweetalert2";
import {
  addNewPlansDetailsApi,
  deletePlansApi,
  getPlansListApi,
  updatePlansDetailsApi,
} from "../../api/cmPanel/plans";

export const GET_PLANS_LIST = "GET_PLANS_LIST";
export const UPDATE_PLANS_DETAILS = "UPDATE_PLANS_DETAILS";
export const DELETE_PLANS_SUCCESS = "DELETE_PLANS_SUCCESS";

/**
 * add new Plans details action
 * @param {Object} data
 * @returns
 */
export const addNewPlansDetailsAction =
  (data, setAddPlansLoading, history) => async () => {
    setAddPlansLoading(true);
    try {
      const response = await addNewPlansDetailsApi(data);
      if (response.success) {
        setAddPlansLoading(false);
        Swal.fire("Success", "Plans submitted successfully", "success");
        setTimeout(Swal.close, 2000);
        history.push("/content/manager/our/plans/details");
      } else {
        setAddPlansLoading(false);
        Swal.fire("Error", "Failed to add Plans", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setAddPlansLoading(false);
      // Swal.fire("Error!", "Something went wrong", "error");
      // setTimeout(Swal.close, 2000);
    }
  };

/**
 * Get Plans list action
 * @param {Object} data
 * @returns
 */

const getPlansList = (data) => ({
  type: GET_PLANS_LIST,
  data,
});

export const getPlansListAction =
  (setLoading, page, setPlanListCount) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await getPlansListApi(page);
      if (response.success) {
        dispatch(getPlansList(response.allPlans));
        setLoading(false);
        setPlanListCount(response.allPlans.length);
      } else {
        setLoading(false);
        Swal.fire("Error", "Failed to Load Plans list", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setLoading(false);
      // Swal.fire("Error!", "Something went wrong", "error");
      // setTimeout(Swal.close, 2000);
    }
  };

/**
 * Update Plans details action
 * @param {Object} data
 * @returns
 */

const updatePlansDetails = (data) => ({
  type: UPDATE_PLANS_DETAILS,
  data,
});

export const updatePlansDetailsAction =
  (data, id, setPlansLoading) => async (dispatch) => {
    setPlansLoading(true);
    try {
      const response = await updatePlansDetailsApi(data, id);
      if (response.success) {
        dispatch(updatePlansDetails(response.Plans));
        setPlansLoading(false);
        Swal.fire("Success", "Plan Updated successfully", "Success");
        setTimeout(Swal.close, 2000);
      } else {
        setPlansLoading(false);
        Swal.fire("Error", "Failed to Update Plan Details", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setPlansLoading(false);
      // Swal.fire("Error!", "Something went wrong", "error");
      // setTimeout(Swal.close, 2000);
    }
  };

/**
 * Delete Plans details action
 * @param {Object} data
 * @returns
 */

const deletePlansDetails = (data) => ({
  type: DELETE_PLANS_SUCCESS,
  data,
});

export const deletePlansDetailsAction =
  (id, setDeletedLoading) => async (dispatch) => {
    setDeletedLoading(true);
    try {
      const response = await deletePlansApi(id);
      if (response.success) {
        dispatch(deletePlansDetails(id));
        setDeletedLoading(false);
        Swal.fire("Success", "Plan Deleted successfully", "Success");
        setTimeout(Swal.close, 2000);
      } else {
        setDeletedLoading(false);
        Swal.fire("Error", "Failed to Delete Plan Details", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setDeletedLoading(false);
      // Swal.fire("Error!", "Something went wrong", "error");
      // setTimeout(Swal.close, 2000);
    }
  };
