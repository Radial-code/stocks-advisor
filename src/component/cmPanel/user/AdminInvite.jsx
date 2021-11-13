import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getInviteFriendsMessageAction } from "../../../redux/action/inviteFriends";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import BubblesLoader from "../../common/BubblesLoader";
import AdminInvitePopup from "./AdminInvitePopup";
import NoData from "../../../assets/img/emptydata.jpg";
import moment from "moment";

const AdminInvite = () => {
  const { getValueOf } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const inviteMessageCode = useSelector(
    (state) => state.list.inviteMessageCode
  );
  const [inviteFriendMessage, setInviteFriendMessage] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    dispatch(getInviteFriendsMessageAction(setInviteFriendMessage));
  }, []);

  return (
    <div className="px-xxl-5 px-2 py-4 form-box-shadow container h-100">
      <div className="d-flex flex-md-row flex-column justify-content-between mt-lg-3">
        <div>
          <p className="from-heading mb-0 text-md-end text-center">
            {getValueOf("Invite")}
          </p>
        </div>
        <div className="d-none d-md-flex">
          {inviteMessageCode.length === 0 ? (
            <button
              className="from-edit-profile-btn   mt-3 mt-sm-0"
              onClick={handleShow}
            >
              {getValueOf("Add")}
            </button>
          ) : (
            <button
              className="from-edit-profile-btn   mt-3 mt-sm-0"
              onClick={handleShow}
            >
              {getValueOf("Edit")}
            </button>
          )}
        </div>
      </div>
      {inviteMessageCode && inviteMessageCode.length > 0 ? (
        <>
          {inviteFriendMessage ? (
            <div className="d-flex justify-content-center align-items-center h-100 mt-5">
              <BubblesLoader />
            </div>
          ) : (
            <div className="border mt-3 p-3 message-box">
              <div className="d-flex ">
                <p className="flex-row-reverse">
                  CreatedAt :{" "}
                  <span>
                    {moment(inviteMessageCode[0].createdAt).format("DD/MM/YY")}
                  </span>
                </p>
              </div>
              <div className="d-flex ">
                <p className="flex-row-reverse">
                  Type :{" "}
                  <span>
                    {inviteMessageCode[0].isDiscount ? "Discount" : "Amount"}
                  </span>
                </p>
              </div>
              <div className="d-flex ">
                <p className="flex-row-reverse">
                  Amount :{" "}
                  <span>
                    $
                    {inviteMessageCode[0].isFixedAmount
                      ? inviteMessageCode[0].amount
                      : "0"}
                  </span>
                </p>
              </div>
              <div className="d-flex">
                <p className="flex-row-reverse">
                  Discount :{" "}
                  <span>
                    $
                    {inviteMessageCode[0].isDiscount
                      ? inviteMessageCode[0].discount
                      : "0"}
                  </span>
                </p>
              </div>
              <div className="d-flex">
                <p className="flex-row-reverse">
                  Message : <span>{inviteMessageCode[0].message}</span>
                </p>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="d-flex text-center flex-column">
          <img
            className="nodata-img d-inline-block mx-auto"
            src={NoData}
            alt="NoData"
          />
          <h4 className="fw-bold">
            {getValueOf("You don't have any Invite Message for User.")}
          </h4>
        </div>
      )}
      <AdminInvitePopup
        handleClose={handleClose}
        show={show}
        handleShow={handleShow}
        inviteMessageCode={inviteMessageCode}
      />
    </div>
  );
};

export default AdminInvite;
