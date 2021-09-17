import React from "react";
import "../editform/editform.css";
import { Form } from "react-bootstrap";
function EditContact() {
  return (
    <div className="container">
      <div className="row h-100 ">
        <div className="col-12 h-100 d-flex justify-content-end">
          <div className="form-background  p-sm-5 p-2 h-100 ">
            <p className="mb-0 edit-contact-text ff-popins">Edit Contact</p>
            <div className="form-section">
              <Form className="pt-sm-5 pt-4">
                <Form.Group
                  className="mb-3 form-field "
                  controlId="formBasicEmail"
                >
                  <Form.Control type="Text" placeholder="Name" />
                </Form.Group>

                <Form.Group
                  className="my-4 form-field"
                  controlId="formBasicPassword"
                >
                  <Form.Control type="text" placeholder="Email" />
                </Form.Group>
                <Form.Group
                  className="mb-3 form-field"
                  controlId="formBasicPassword"
                >
                  <Form.Control type="text" placeholder="Mobile No" />
                </Form.Group>
                <div className="d-flex flex-sm-row flex-column my-3">
                  <button className="update-btn  border-0 ff-popins">
                    Update
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditContact;
