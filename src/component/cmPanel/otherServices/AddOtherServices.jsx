import React from "react";
import { Form, FormGroup } from "react-bootstrap";

function AddOtherServices() {
  return (
    <div className="col-12 h-100 stock-add-new">
      <div className="add-stock-bg p-sm-5 p-3 mt-5  w-xl-1000">
        <p className="new-stock-heading ff-popins mb-0 fs-sm-20">
          Add Services
        </p>
        <Form className="pt-sm-5  pt-4">
          <div className="row">
            <div className="col-md-8 order-1 last-name order-sm-1 order-2">
              <Form.Group
                className="mb-3 add-new-stock-field "
                controlId="formBasicEmail"
              >
                <Form.Control type="text" placeholder="Category" />
              </Form.Group>
            </div>
            <div className="col-md-4 order-1 last-name order-sm-1 order-2">
              <p className="new-stock-heading ff-popins mb-0 fs-sm-20 text-start">
                Category
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Group
                className="mb-3 add-new-stock-field "
                controlId="formBasicEmail"
              >
                <Form.Control type="text" placeholder="Exchange" />
              </Form.Group>
            </div>
            <div className="col-md-6 order-1 last-name order-sm-1 order-2">
              <p className="new-stock-heading ff-popins mb-0 fs-sm-20 text-start">
                Exchange
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Group
                className="mb-3 add-new-stock-field "
                controlId="formBasicEmail"
              >
                <Form.Control type="text" placeholder="Portfolio" />
              </Form.Group>
            </div>
            <div className="col-md-6 order-1 last-name order-sm-1 order-2">
              <p className="new-stock-heading ff-popins mb-0 fs-sm-20 text-start">
                Portfolio
              </p>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AddOtherServices;
