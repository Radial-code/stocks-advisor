import Swal from "sweetalert2";
import {
  addNewStockDetailsApi,
  createNewTeamMemberApi,
  DeleteStockDetailsApi,
  getStockDetailsApi,
  getStockListApi,
  getTeamMemberListApi,
  updateStockDetailsApi,
  getUserListForAdminApi,
} from "../../api/cmPanel/stock";

export const GET_STOCK_LIST = "GET_STOCK_LIST";
export const GET_STOCK_DETAILS_BY_ID = "GET_STOCK_DETAILS_BY_ID";
export const DELETE_STOCK_LIST = "DELETE_STOCK_LIST";
export const GET_USER_LIST_FOR_ADMIN = "GET_USER_LIST_FOR_ADMIN";
export const GET_TEAM_LIST = "GET_TEAM_LIST";

/**
 * add new stock details action
 * @param {Object} data
 * @returns
 */
export const addNewStockDetailsAction =
  (data, setAddStockLoading) => async () => {
    setAddStockLoading(true);
    try {
      const response = await addNewStockDetailsApi(data);
      if (response.success) {
        setAddStockLoading(false);
        Swal.fire("Success", "Stock submitted successfully", "success");
        setTimeout(Swal.close, 2000);
      } else {
        setAddStockLoading(false);
        Swal.fire("Error", "Failed to add stock", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setAddStockLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Get stock list action
 * @param {Object} data
 * @returns
 */

const getStockList = (data) => ({
  type: GET_STOCK_LIST,
  data,
});

export const getStockListAction = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getStockListApi();
    if (response.success) {
      dispatch(getStockList(response.allStock));
      setLoading(false);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to Load stock list", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * Get stock details list action
 * @param {Object} data
 * @returns
 */

const getStockDetails = (data) => ({
  type: GET_STOCK_DETAILS_BY_ID,
  data,
});

export const getStockDetailsAction = (id, setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getStockDetailsApi(id);
    if (response.success) {
      dispatch(getStockDetails(response.details));
      setLoading(false);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to stock details list", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * delete Stock  action
 * @param {Object} data
 * @returns
 */

const DeleteStockDetails = (data) => ({
  type: DELETE_STOCK_LIST,
  data,
});

export const DeleteStockDetailsAction = (id, history) => async (dispatch) => {
  try {
    const response = await DeleteStockDetailsApi(id);
    if (response.success) {
      dispatch(DeleteStockDetails(id));
      history.push("/content/manager/stocks");
      Swal.fire("success", "Stock deleted successfully", "success");
      setTimeout(Swal.close, 2000);
    } else {
      Swal.fire("Error", "Failed to delete Stock", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * Get user list action
 * @param {Object} data
 * @returns
 */

const getUserListForAdmin = (data) => ({
  type: GET_USER_LIST_FOR_ADMIN,
  data,
});

export const getUserListForAdminAction = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getUserListForAdminApi();
    if (response.success) {
      dispatch(getUserListForAdmin(response.allUsers));
      setLoading(false);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to user list", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * create new Team member details action
 * @param {Object} data
 * @returns
 */
export const createNewTeamMemberAction = (data, setLoading) => async () => {
  setLoading(true);
  try {
    const response = await createNewTeamMemberApi(data);
    if (response.success) {
      setLoading(false);
      Swal.fire("Success", "Team created successfully", "success");
      setTimeout(Swal.close, 2000);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to create Team", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * Get Team list action
 * @param {Object} data
 * @returns
 */

const getTeamMemberList = (data) => ({
  type: GET_TEAM_LIST,
  data,
});

export const getTeamMemberListAction = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getTeamMemberListApi();
    if (response.success) {
      dispatch(getTeamMemberList(response.members));
      setLoading(false);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to team list", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * Update stock details
 * @param {String} id
 * @param {Object} data
 * @param {Boolen} setLoading
 * @returns
 */
export const updateStockDetailsAction = (id, data, setLoading) => async () => {
  setLoading(true);
  try {
    const response = await updateStockDetailsApi(id, data);
    if (response.success) {
      setLoading(false);
    } else {
      setLoading(false);
      Swal.fire("Error", "Failed to Update stock", "error");
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};
