import Swal from "sweetalert2";
import {
  getInviteFriendsMessageApi,
  inviteFriendsMessageApi,
} from "../api/inviteFriend";

export const INVITE_MESSAGE_CODE = "INVITE_MESSAGE_CODE";
export const GET_INVITE_MESSAGE_CODE = "GET_INVITE_MESSAGE_CODE";

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
