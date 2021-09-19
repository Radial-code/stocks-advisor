import React from "react";
import "../editform/editform.css";
import { Form } from "react-bootstrap";
function EditContact({ sideBarHandler, setSidebarActive, sidebarActive }) {
  return (
    <div className="container">
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
      ></div>
      <div className="row h-100 ">
        <div className="col-12 d-none dashboard">
          <div className="border-b-1 content-manager-2">
            <div className="d-flex justify-content-between">
              <p className="heading-stock pr-15">Dashboard</p>
              <span onClick={sideBarHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  fill="currentColor"
                  class="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12  d-flex justify-content-end mt-3">
          <div className="form-background w-xl-1000 w-xlg-100 p-sm-5 p-2 ">
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
                  <button className="update-btn  ff-popins">Update</button>
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
