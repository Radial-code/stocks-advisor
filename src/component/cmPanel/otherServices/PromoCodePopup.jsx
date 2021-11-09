import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import CloseIcon from "../../../assets/img/close-icon.png";
const PromocodePopup = ({ show, handleClose, setShow }) => {
  const { getValueOf } = useLayoutChangerProvider();
  const [error, setError] = useState(false);
  const SubmitHandler = () => {
    setError(true);
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <div className=" p-sm-3 p-2">
        <img
          className="close-popup-icon "
          onClick={handleClose}
          src={CloseIcon}
          alt=""
        />
        <div>
          <h4 className="mb-0 text-center fw-bold">
            {getValueOf("Add PromoCode")}
          </h4>
        </div>
      </div>

      <Modal.Body>
        <div className="add-new-stock-field my-3 ms-sm-3">
          <input
            type="text"
            placeholder={getValueOf("PromoCode")}
            className="py-2 px-3 w-100"
          />
          <span className="text-danger">
            {error ? <span> {getValueOf("PromoCode is required")}</span> : ""}
          </span>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-block text-center">
        {/* <button
          
            className="px-5 py-2 add-button ms-3 my-sm-3"
          >
            {getValueOf("Update")}
          </button> */}

        <button
          className="px-5 py-2 add-button ms-3 my-sm-3"
          onClick={SubmitHandler}
        >
          {getValueOf("Submit")}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default PromocodePopup;
