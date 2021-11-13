import Swal from "sweetalert2";
import {
  getInviteFriendsMessageApi,
  inviteFriendsMessageApi,
  InviteYourFriendsCodeApi,
  updateInviteFriendMessageApi,
} from "../api/inviteFriend";

export const INVITE_MESSAGE_CODE = "INVITE_MESSAGE_CODE";
export const GET_INVITE_MESSAGE_CODE = "GET_INVITE_MESSAGE_CODE";
export const INVITE_YOUR_MESSAGE_CODE = "INVITE_YOUR_MESSAGE_CODE";
export const UPDATE_INVITE_MESSAGE_CODE = "UPDATE_INVITE_MESSAGE_CODE";

/**
 * invite friend message action
 * @param {Object} data
 * @returns
 */
const inviteFriendsMessage = (data) => ({
  type: INVITE_MESSAGE_CODE,
  data,
});

export const inviteFriendsMessageAction =
  (data, setInviteFriendMessage, handleClose) => async (dispatch) => {
    setInviteFriendMessage(true);
    try {
      const response = await inviteFriendsMessageApi(data);
      if (response.success) {
        dispatch(inviteFriendsMessage(response.data));
        setInviteFriendMessage(false);
        Swal.fire(
          "Success",
          "Invite message code created successfully",
          "success"
        );
        setTimeout(Swal.close, 2000);
        handleClose();
      } else {
        setInviteFriendMessage(false);
        Swal.fire("Error", "Failed to add message code", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setInviteFriendMessage(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * update invite friend message action
 * @param {Object} data
 * @returns
 */
const updateInviteFriendMessage = (id, data) => ({
  type: UPDATE_INVITE_MESSAGE_CODE,
  payload: {
    data: data,
    id: id,
  },
});

export const updateInviteFriendMessageAction =
  (id, data, setInviteFriendMessage, handleClose) => async (dispatch) => {
    setInviteFriendMessage(true);
    try {
      const response = await updateInviteFriendMessageApi(id, data);
      if (response.success) {
        dispatch(updateInviteFriendMessage(id, response.data));
        setInviteFriendMessage(false);
        Swal.fire(
          "Success",
          "Update Invite message code successfully",
          "success"
        );
        setTimeout(Swal.close, 2000);
        handleClose();
      } else {
        setInviteFriendMessage(false);
        Swal.fire("Error", "Failed to update message code", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setInviteFriendMessage(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * invite friend message action
 * @param {Object} data
 * @returns
 */
const getInviteFriendsMessage = (data) => ({
  type: GET_INVITE_MESSAGE_CODE,
  data,
});

export const getInviteFriendsMessageAction =
  (setInviteFriendMessage) => async (dispatch) => {
    setInviteFriendMessage(true);
    try {
      const response = await getInviteFriendsMessageApi();
      if (response.success) {
        dispatch(getInviteFriendsMessage(response.data));
        setInviteFriendMessage(false);
      } else {
        setInviteFriendMessage(false);
        Swal.fire("Error", "Failed to load invite message code", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setInviteFriendMessage(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * invite your friend message action
 * @param {Object} data
 * @returns
 */
const InviteYourFriendsCode = (data) => ({
  type: INVITE_YOUR_MESSAGE_CODE,
  data,
});

export const InviteYourFriendsCodeAction =
  (setInviteFriendMessage) => async (dispatch) => {
    setInviteFriendMessage(true);
    try {
      const response = await InviteYourFriendsCodeApi();
      if (response.success) {
        dispatch(InviteYourFriendsCode(response));
        setInviteFriendMessage(false);
      } else {
        setInviteFriendMessage(false);
        Swal.fire("Error", "Failed to load invite message", "error");
        setTimeout(Swal.close, 2000);
      }
    } catch (error) {
      setInviteFriendMessage(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };
