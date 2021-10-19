import React from "react";
import { Col, Form } from "react-bootstrap";

function Notification() {
  return (
    <Col className="d-flex justify-content-lg-end">
      <section className="user-panel-card w-xl-1000 p-sm-4  pt-5">
        <div className="mb-4 d-flex flex-sm-row flex-column justify-content-sm-between align-items-center">
          <p className="heading-stock ">Notification</p>{" "}
        </div>
        <div className="h-calc-100vh-380 scroll-bar overflow-auto mt-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 mb-3">
                <Form.Group
                  className="mb-3 add-new-stock-field "
                  controlId="formBasicEmail"
                >
                  <Form.Control type="text" placeholder="Body" />
                </Form.Group>
              </div>
              <div className="col-12 col-lg-6 mb-3">
                <Form.Group
                  className="mb-3 add-new-stock-field "
                  controlId="formBasicEmail"
                >
                  <Form.Control type="text" placeholder=" Title" />
                </Form.Group>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-auto">
                <input className="cursor-pointer mx-2" type="checkbox" />
                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  Plan 2
                </label>
              </div>
              <div className="col-auto">
                <input className="cursor-pointer mx-2" type="checkbox" />
                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  Plan 1
                </label>
              </div>
              <div className="col-auto">
                <input className="cursor-pointer mx-2" type="checkbox" />
                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  All
                </label>
              </div>
              <div className="col-auto">
                <label
                  className="form-check-label check-box-text text-dark cursor-pointer"
                  for="flexCheckDefault"
                >
                  : Send to
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Col>
  );
}

export default Notification;
