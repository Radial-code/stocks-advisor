import React, { useState } from "react";
import CloseIcon from "../../assets/img/close-icon.png";
import { Button, Modal, Form } from "react-bootstrap";
import "../modal/modal.css";

function Subscription() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <img
          className="close-icon pt-2 mx-3 cursor-pointer"
          onClick={handleClose}
          src={CloseIcon}
          alt="close-icon"
        />
        <p className="text-center modal-subs-text ff-popins mb-0 pb-sm-4 pb-3">
          Subscription
        </p>

        <Modal.Body>
          <div className="subs-border p-3 d-flex justify-content-between align-items-center">
            <div>
              <p className="plan-text ff-popins mb-0">Plan-1</p>
              <p className="price-text mb-0">$299.99</p>
            </div>
            <div>
              <button className="select-now-btn border-0 py-2 px-3 ff-popins">
                Select Now
              </button>
            </div>
          </div>
          <div className="subs-border p-3 d-flex justify-content-between align-items-center my-3">
            <div>
              <p className="plan-text ff-popins mb-0">Plan-1</p>
              <p className="price-text mb-0">$299.99</p>
            </div>
            <div>
              <button className="select-now-btn border-0 py-2 px-3 ff-popins">
                Select Now
              </button>
            </div>
          </div>
          <div className="subs-border p-3 d-flex justify-content-between align-items-center">
            <div>
              <p className="plan-text ff-popins mb-0">Plan-1</p>
              <p className="price-text mb-0">$299.99</p>
            </div>
            <div>
              <button className="select-now-btn border-0 py-2 px-3 ff-popins">
                Select Now
              </button>
            </div>
          </div>
          <p className="free-plan-text ff-popins pt-2 ">Select Free Plan</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Subscription;
