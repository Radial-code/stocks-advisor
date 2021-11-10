import React from "react";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import { Modal } from "react-bootstrap";
const AdminInvitePopup = ({ handleClose, handleShow, show }) => {
  const { getValueOf } = useLayoutChangerProvider();
  return (
    <Modal show={show} onHide={handleClose} centered>
      <div className=" p-sm-3 p-2">
        <div>
          <h4 className="mb-0 text-center fw-bold">
            {`${getValueOf("Edit Invite")}`}
          </h4>
        </div>
      </div>

      <Modal.Body>
        <div className="add-new-stock-field my-3 ms-sm-3">
          <div className=" mb-3 ">
            <textarea
              className="w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3"
              rows="6"
              placeholder={getValueOf("Invite....")}
            ></textarea>
          </div>
          <div className="d-flex justify-content-sm-start align-items-center flex-sm-row flex-column my-4">
            <div className="add-new-btn w-100">
              <button className="update-btn">{`${getValueOf(
                "Submit"
              )}`}</button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AdminInvitePopup;
