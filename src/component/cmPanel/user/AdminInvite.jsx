import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getInviteFriendsMessageAction } from "../../../redux/action/inviteFriends";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import BubblesLoader from "../../common/BubblesLoader";
import AdminInvitePopup from "./AdminInvitePopup";
import NoData from "../../../assets/img/emptydata.jpg";

const AdminInvite = () => {
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();
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
          <button
            className="from-edit-profile-btn  mx-3 mt-3 mt-sm-0"
            onClick={handleShow}
          >
            {inviteMessageCode.length > 0
              ? getValueOf("Edit")
              : getValueOf("Add")}
          </button>
        </div>
      </div>
      {inviteMessageCode ? (
        <>
          {inviteFriendMessage ? (
            <div className="d-flex justify-content-center align-items-center h-100 mt-5">
              <BubblesLoader />
            </div>
          ) : (
            <div className="border mt-3 p-3 message-box">
              <div
                className={`${
                  layoutClickChanger ? "flex-row-reverse" : "flex-row-reverse"
                } d-flex `}
              >
                {layoutClickChanger ? (
                  <>
                    {" "}
                    <p>
                      {layoutClickChanger ? <> : CreateAt</> : <>CreateAt :</>}
                    </p>
                    <span>
                      {layoutClickChanger ? <> asdfghjkl</> : <>zxcvbnm,.</>}
                    </span>
                  </>
                ) : (
                  <>
                    {" "}
                    <span>
                      {layoutClickChanger ? <> asdfghjkl</> : <>zxcvbnm,.</>}
                    </span>
                    <p>
                      {layoutClickChanger ? <> : CreateAt</> : <>CreateAt :</>}
                    </p>
                  </>
                )}
              </div>
              <div
                className={`${
                  layoutClickChanger ? "flex-row-reverse" : "flex-row-reverse"
                } d-flex `}
              >
                {" "}
                {layoutClickChanger ? (
                  <>
                    {" "}
                    <p>{layoutClickChanger ? <> : Type</> : <>Type :</>}</p>
                    <span>
                      {layoutClickChanger ? <> asdfghjkl</> : <>zxcvbnm,.</>}
                    </span>
                  </>
                ) : (
                  <>
                    {" "}
                    <span>
                      {layoutClickChanger ? <> asdfghjkl</> : <>zxcvbnm,.</>}
                    </span>
                    <p>{layoutClickChanger ? <> : Type</> : <>Type :</>}</p>
                  </>
                )}
              </div>
              <div
                className={`${
                  layoutClickChanger ? "flex-row-reverse" : "flex-row-reverse"
                } d-flex `}
              >
                {" "}
                {layoutClickChanger ? (
                  <>
                    {" "}
                    <p>{layoutClickChanger ? <> : Amount</> : <>Amount :</>}</p>
                    <span>
                      {layoutClickChanger ? <> asdfghjkl</> : <>zxcvbnm,.</>}
                    </span>
                  </>
                ) : (
                  <>
                    <span>
                      {layoutClickChanger ? <> asdfghjkl</> : <>zxcvbnm,.</>}
                    </span>
                    <p>{layoutClickChanger ? <> : Amount</> : <>Amount :</>}</p>
                  </>
                )}
              </div>
              <div
                className={`${
                  layoutClickChanger ? "flex-row-reverse" : "flex-row-reverse"
                } d-flex `}
              >
                {" "}
                {layoutClickChanger ? (
                  <>
                    {" "}
                    <p>
                      {layoutClickChanger ? <> : Discount</> : <>Discount :</>}
                    </p>
                    <span>
                      {layoutClickChanger ? <> asdfghjkl</> : <>zxcvbnm,.</>}
                    </span>
                  </>
                ) : (
                  <>
                    {" "}
                    <span>
                      {layoutClickChanger ? <> asdfghjkl</> : <>zxcvbnm,.</>}
                    </span>
                    <p>
                      {layoutClickChanger ? <> : Discount</> : <>Discount :</>}
                    </p>
                  </>
                )}
              </div>
              <div
                className={`${
                  layoutClickChanger ? "flex-row-reverse" : "flex-row-reverse"
                } d-flex `}
              >
                {" "}
                {layoutClickChanger ? (
                  <>
                    {" "}
                    <p>
                      {layoutClickChanger ? <> : Message</> : <>Message :</>}
                    </p>
                    <span>
                      {layoutClickChanger ? <> asdfghjkl</> : <>zxcvbnm,.</>}
                    </span>
                  </>
                ) : (
                  <>
                    {" "}
                    <span>
                      {layoutClickChanger ? <> asdfghjkl</> : <>zxcvbnm,.</>}
                    </span>
                    <p>
                      {layoutClickChanger ? <> : Message</> : <>Message :</>}
                    </p>
                  </>
                )}
              </div>
            </div>
            // <div className="my-5">
            //   <textarea
            //     className="w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3"
            //     rows="6"
            //     placeholder={getValueOf("Invite....")}
            //   ></textarea>
            // </div>
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
      />
    </div>
  );
};

export default AdminInvite;
