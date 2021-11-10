import React, { useState } from "react";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import { Modal } from "react-bootstrap";
import CloseIcon from "../../../assets/img/close-icon.png";
const AdminInvitePopup = ({ handleClose, show }) => {
  const [amount, setAmount] = useState(false);
  const [discount, setDiscount] = useState(false);
  const { getValueOf } = useLayoutChangerProvider();
  const checkboxHandler = (value) => {
    if (value === "amount") {
      setAmount(!amount);
      setDiscount(false);
    } else if (value === "discount") {
      setDiscount(!discount);
      setAmount(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <div className=" p-sm-3 p-2">
        <img
          className="close-popup-icon cursor-pointer"
          onClick={handleClose}
          src={CloseIcon}
          alt=""
        />
        <div>
          <h4 className="mb-0 text-center fw-bold">
            {`${getValueOf("Invite")}`}
          </h4>
        </div>
      </div>

      <Modal.Body>
        <div className="add-new-stock-field my-3 ms-sm-3">
          <div className=" mb-2">
            <textarea
              className="w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3"
              rows="6"
              placeholder={getValueOf("Invite....")}
            ></textarea>
          </div>

          <div className="row">
            <div className="col">
              <input
                className="cursor-pointer my-3 ms-sm-2"
                type="checkbox"
                checked={amount}
                onClick={() => checkboxHandler("amount")}
              />
              <label
                className="form-check-label check-box-text cursor-pointer  fw-bold ms-sm-3 ms-2"
                for="flexCheckDefault"
              >
                {getValueOf("Fix Amount")}
              </label>
              {amount ? (
                <>
                  <div className="add-new-stock-field my-1 ms-sm-2">
                    <label>Amount</label>
                    <input
                      type="number"
                      placeholder={getValueOf("Amount")}
                      className="py-2 px-3 w-100"
                    />
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                className="cursor-pointer my-3 ms-sm-2"
                type="checkbox"
                checked={discount}
                onClick={() => checkboxHandler("discount")}
              />
              <label
                className="form-check-label check-box-text cursor-pointer  fw-bold ms-sm-3 ms-2"
                for="flexCheckDefault"
              >
                {getValueOf("Fix Discount")}
              </label>
              {discount ? (
                <>
                  {" "}
                  <div className="add-new-stock-field my-1 ms-sm-2">
                    <label>Amount</label>
                    <input
                      type="number"
                      placeholder={getValueOf(" Discount %")}
                      className="py-2 px-3 w-100"
                    />
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
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
