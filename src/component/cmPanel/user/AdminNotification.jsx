import React from "react";
import { Col, Form, FormGroup } from "react-bootstrap";
function AdminNotification() {
  return (
    <div className="conatiner">
      <div className="row">
        <div className="col-12">
          <div className="manger-panel-shadow p-sm-5 w-xl-1000 ">
            <div className="row">
              <div className="col-12 col-lg-6 mb-3">
                <Form.Group
                  className="mb-3 add-new-stock-field "
                  controlId="formBasicEmail"
                >
                  <Form.Control type="text" placeholder="Arabic Title" />
                </Form.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNotification;
