import React from "react";
import { Col, Form, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
function Notification() {
  return (
    <Col xs={12}>
      <div className="manger-panel-shadow p-sm-5 w-xl-1000 ">
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
      </div>
    </Col>
  );
}

export default Notification;
