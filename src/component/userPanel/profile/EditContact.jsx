import React, { useState } from "react";
import "./editform.css";
import { Form } from "react-bootstrap";
import { EmailRegex, PhoneRegex } from "../../common/Validation";
import DashboardDropDown from "../../dashboard/DashboardDropDown";
function EditContact({ sideBarHandler, setSidebarActive, sidebarActive }) {
  const [editDetails, setEditDetails] = useState({
    editName: "",
    email: "",
    phone: "",
  });

  const editSubmitHandler = () => {
    if (editDetails.editName && editDetails.email && editDetails.phone) {
    } else {
      alert("add details");
    }
  };

  return (
    <div className="container-fluid">
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
      ></div>
      <div className="row h-100 ">
        {/* <div className="col-12   dashboard">
          <div className="border-b-1  mb-3">
            <DashboardDropDown sideBarHandler={sideBarHandler} />
          </div>
        </div> */}
        <div className="col-12  d-flex justify-content-end ">
          <div className="form-background w-xl-1000 w-xlg-100 p-sm-5 p-2 ">
            <p className="mb-0 edit-contact-text ff-popins fs-sm-20">
              Edit Contact
            </p>
            <div className="form-section">
              <Form className="pt-sm-5 pt-4">
                <Form.Group
                  className="mb-3 form-field "
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    value={editDetails.editName}
                    onChange={(e) => {
                      setEditDetails({
                        ...editDetails,
                        editName: e.target.value,
                      });
                    }}
                    type="Text"
                    placeholder="Name"
                  />
                </Form.Group>

                <Form.Group
                  className="my-4 form-field"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    value={editDetails.email}
                    onChange={(e) =>
                      setEditDetails({
                        ...editDetails,
                        email: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Email"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 form-field"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    value={editDetails.phone}
                    onChange={(e) =>
                      setEditDetails({
                        ...editDetails,
                        phone: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Mobile No"
                  />
                </Form.Group>
                <div className="d-flex flex-sm-row flex-column my-3">
                  <button
                    type="button"
                    onClick={() => editSubmitHandler()}
                    className="update-btn  ff-popins"
                  >
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
