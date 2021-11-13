import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { InviteYourFriendsCodeAction } from "../../../redux/action/inviteFriends";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import BubblesLoader from "../../common/BubblesLoader";
import NoData from "../../../assets/img/emptydata.jpg";

const Invite = () => {
  const { getValueOf, layoutClickChanger } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const [inviteFriendMessage, setInviteFriendMessage] = useState(false);
  const inviteYourMessageCode = useSelector(
    (state) => state.list.inviteYourMessageCode
  );
  useEffect(() => {
    dispatch(InviteYourFriendsCodeAction(setInviteFriendMessage));
  }, []);

  const copyReferalUrl = (url) => {
    var copyUrlText = document.createElement("textarea");
    copyUrlText.innerText = `${url}`;
    document.body.appendChild(copyUrlText);
    copyUrlText.select();
    document.execCommand("copy");
    copyUrlText.remove();
    Swal.fire("Success!", `URL copied successfully.`, "success");
    setTimeout(Swal.close, 2000);
  };

  return (
    <div className="px-xxl-5 px-2 py-4 form-box-shadow container h-100">
      <div className="d-flex flex-md-row flex-column justify-content-between mt-lg-3">
        <div>
          <p className="from-heading mb-0 text-md-end text-center">
            {getValueOf("Invite Your Friends")}
          </p>
        </div>
      </div>
      {inviteYourMessageCode ? (
        <>
          {inviteFriendMessage ? (
            <div className="d-flex justify-content-center align-items-center h-100 mt-5">
              <BubblesLoader />
            </div>
          ) : (
            <>
              <div className="border mt-3 p-3 message-box">
                <p className={`${layoutClickChanger ? "" : ""} d-flex`}>
                  {layoutClickChanger ? <>...Messages</> : <>Messages...</>}
                </p>
                <p>
                  {inviteYourMessageCode
                    ? inviteYourMessageCode.message
                    : "N/A"}
                </p>
              </div>
              <div className="my-4 row">
                <div className="col-md-8 col-sm-7 col-5 pe-sm-2 pe-0">
                  <input
                    type="text"
                    placeholder={`${
                      inviteYourMessageCode ? inviteYourMessageCode.code : "N/A"
                    }`}
                    disabled="disabled"
                    className="form-control  input-border-16191e33 btn-disable  py-3 profile-input-placeholder"
                    id="exampleFormControlInput12"
                  />
                </div>
                <div
                  className={`${
                    layoutClickChanger ? "" : "ps-0"
                  }  col-md-4 col-sm-5 col-7 `}
                >
                  <div className="add-new-btn h-100">
                    <button
                      className="update-btn w-100 h-100"
                      type="button"
                      onClick={() =>
                        copyReferalUrl(
                          inviteYourMessageCode
                            ? inviteYourMessageCode.code
                            : null
                        )
                      }
                    >
                      {`${getValueOf("Copy Link")}`}
                    </button>
                  </div>
                </div>
              </div>
            </>
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
            {getValueOf(
              "You don't have any Invite Message code for You friend."
            )}
          </h4>
        </div>
      )}
    </div>
  );
};
export default Invite;
