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
  getUserProfileDataApi,
  UserPlanDetailApi,
  getStockChatDetailsApi,
} from "../../api/cmPanel/stock";

export const GET_STOCK_LIST = "GET_STOCK_LIST";
export const GET_STOCK_CHAT_LIST = "GET_STOCK_CHAT_LIST";
export const GET_STOCK_DETAILS_BY_ID = "GET_STOCK_DETAILS_BY_ID";
export const DELETE_STOCK_LIST = "DELETE_STOCK_LIST";
export const GET_USER_LIST_FOR_ADMIN = "GET_USER_LIST_FOR_ADMIN";
export const GET_TEAM_LIST = "GET_TEAM_LIST";
export const REMOVE_STOCK_DETAIL_DATA = "REMOVE_STOCK_DETAIL_DATA";
export const GET_USER_PROFILE_DATA = "GET_USER_PROFILE_DATA";
export const REMOVE_USER_PROFILE_DETAILS_DATA =
  "REMOVE_USER_PROFILE_DETAILS_DATA";
export const GET_PLAN_DETAILS = "GET_PLAN_DETAILS";
export const REMOVE_PLAN_DETAILS = "REMOVE_PLAN_DETAILS";

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
        Swal.fire("Success", "Stock Submitted successfully", "success");
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

// REMOVE STOCK DETAILS DATA

export const removeStockDetailData = () => ({
  type: REMOVE_STOCK_DETAIL_DATA,
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

/**
 * Get user details action
 * @param {Object} data
 * @returns
 */

const getUserDetails = (data) => ({
  type: GET_USER_PROFILE_DATA,
  data,
});

/**
 * get user profile details
 * @param {String} userId
 * @param {Boolen} setLoading
 * @returns
 */
export const getUserProfileDetailsAction =
  (userId, setLoading) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await getUserProfileDataApi(userId);
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
 * remove user details action
 * @param {Object} data
 * @returns
 */

const removeUserDetails = (data) => ({
  type: REMOVE_USER_PROFILE_DETAILS_DATA,
  data,
});

/**
 * remove user details
 * @param {String} userId
 * @param {Boolen} setLoading
 * @returns
 */
export const removeUserProfileDetailsAction = () => async (dispatch) => {
  try {
    dispatch(removeUserDetails());
  } catch (error) {}
};

/**
 * Get user plan action
 * @param {Object} data
 * @returns
 */

const getUserPlanDetails = (data) => ({
  type: GET_PLAN_DETAILS,
  data,
});

/**
 * get user plan details
 * @param {String} userId
 * @param {Boolen} setLoading
 * @returns
 */
export const getUserPlanDetailAction =
  (userId, setLoading) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await UserPlanDetailApi(userId);
      if (response.success) {
        dispatch(getUserPlanDetails(response.plan));
        setLoading(false);
      } else {
        setLoading(false);
        Swal.fire("Error", "Failed to Load plan details", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setLoading(false);
      Swal.fire(
        "Error!",
        "Something went wrong, Check your internet connection",
        "error"
      );
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Get user plan action
 * @param {Object} data
 * @returns
 */

const getStockChatDetails = (data) => ({
  type: GET_STOCK_CHAT_LIST,
  data,
});

export const getStockChatDetailsAction =
  (stockId, setLoading, type) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await getStockChatDetailsApi(stockId, type);
      if (response.success) {
        dispatch(getStockChatDetails(response.data));
        setLoading(false);
      } else {
        setLoading(false);
        Swal.fire("Error", "Failed to stock chat list details", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setLoading(false);
      Swal.fire(
        "Error!",
        "Something went wrong, Check your internet connection",
        "error"
      );
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * remove user plan details action
 * @param {Object} data
 * @returns
 */

const removeUserPlanDetail = (data) => ({
  type: REMOVE_PLAN_DETAILS,
  data,
});

/**
 *remove user plan details action
 * @param {String} userId
 * @param {Boolen} setLoading
 * @returns
 */
export const removeUserPlanDetailsAction = () => async (dispatch) => {
  try {
    dispatch(removeUserPlanDetail());
  } catch (error) {}
};
