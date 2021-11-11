import React, { useState } from "react";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import InvitePopup from "./InvitePopup";

const Invite = () => {
  const { getValueOf } = useLayoutChangerProvider();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div className="px-xxl-5 px-2 py-4 form-box-shadow container h-100">
      <div className="d-flex flex-md-row flex-column justify-content-between mt-lg-3">
        <div>
          <p className="from-heading mb-0 text-md-end text-center">
            {getValueOf("Invite")}
          </p>
        </div>
        {/* <div className="d-none d-md-flex">
          <button
            className="from-edit-profile-btn  mx-3 mt-3 mt-sm-0"
            onClick={handleShow}
          >
            {getValueOf("Edit")}
          </button>
        </div> */}
      </div>

      {/* <div className="my-4 row">
        <div className="col-md-9 col-sm-7 col-6 pe-0">
          <input
            type="text"
            placeholder="link"
            disabled="disabled"
            className="form-control  input-border-16191e33 btn-disable  py-3 profile-input-placeholder"
            id="exampleFormControlInput12"
          />
        </div>
        <div className="col-md-3 col-sm-5 col-6 ps-0">
          <div className="add-new-btn h-100">
            <button className="update-btn w-100 h-100">{`${getValueOf(
              "Copy Link"
            )}`}</button>
          </div>
        </div>
      </div> */}
      <div className="my-5">
        <textarea
          className="w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3"
          rows="6"
          placeholder={getValueOf("Invite....")}
        ></textarea>
      </div>
      <div className="d-flex justify-content-sm-start align-items-center flex-sm-row flex-column my-4">
        <div className="add-new-btn w-100">
          <button className="update-btn">{`${getValueOf("Copy Link")}`}</button>
        </div>
      </div>
      {/* <InvitePopup
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
      /> */}
    </div>
  );
};

export default Invite;
