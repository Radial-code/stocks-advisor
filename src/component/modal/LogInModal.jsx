import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "../modal/modal.css";
import CloseIcon from "../../assets/img/close-icon.png";
function LogInModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button className="update-btn" onClick={handleShow}>
        Login
      </button>

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
          Log In
        </p>

        <Modal.Body>
          <Form className="">
            <Form.Group
              className="mb-3 modal-field "
              controlId="formBasicEmail"
            >
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group
              className="my-4 modal-field"
              controlId="formBasicPassword"
            >
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <div className=" my-3">
              <button className=" w-100 modal-btn px-5 py-3 border-0 ff-popins">
                Log In
              </button>
            </div>
            <p className="ff-popins text-center mb-2 pt-4">
              Don't have an account?{" "}
              <span className="modal-sign-up-text cursor-pointer">Sign Up</span>
            </p>
            <p className="ff-popins text-center cursor-pointer">
              ?Forgot Password
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LogInModal;
