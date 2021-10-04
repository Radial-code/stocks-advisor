import React, { useState } from "react";
import "../editform/editform.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EditIcon } from "../common/icons/Icons";
import ProfileImage from "../../assets/img/Profile-img.png";
import DashboardDropDown from "./DashboardDropDown";

function AdvisorProfile({ sideBarHandler, setSidebarActive, sidebarActive }) {
  const [inputDisable, setInputDisable] = useState(true);
  return (
    <div className="container-fluid">
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
      ></div>
      <div className="row h-100 ">
        <div className="col-12 d-none dashboard">
          <div className="border-b-1  mb-3">
            <DashboardDropDown sideBarHandler={sideBarHandler} />
          </div>
        </div>
        <div className="col-12 pe-xl-5 px-0 px-sm-auto">
          <div className="px-xxl-5 px-4 py-4 form-box-shadow">
            <div className="d-flex flex-md-row flex-column justify-content-between mt-lg-3">
              <div>
                <p className="from-heading mb-0 text-md-end text-center">
                  {" "}
                  My Profile
                </p>
              </div>
              <div className="d-flex flex-sm-row flex-column d-none d-md-block">
                {inputDisable ? (
                  <Link to="/change-password">
                    <button className="from-edit-profile-btn px-14 ">
                      Change Password
                    </button>
                  </Link>
                ) : (
                  ""
                )}

                <button
                  onClick={() => setInputDisable(false)}
                  className="from-edit-profile-btn  me-sm-3 mt-3 mt-sm-0"
                >
                  {inputDisable ? "Edit Profile" : "Save"}
                </button>
              </div>
            </div>
            <div className="my-sm-5 my-3 img-size  d-flex justify-content-center">
              <div className="position-relative d-flex flex-column align-items-md-end justify-content-end">
                <img className="profile-img" src={ProfileImage} alt="img" />

                <div className="position-absolute pb-sm-2 cursor-pointer edit-icon">
                  <EditIcon />
                </div>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-center   d-block d-md-none mb-5">
              {" "}
              {inputDisable ? (
                <Link to="/change-password">
                  <button className="from-edit-profile-btn px-2 ">
                    Change Password
                  </button>
                </Link>
              ) : (
                ""
              )}
              <button
                onClick={() => setInputDisable(false)}
                className={
                  inputDisable
                    ? "from-edit-profile-btn px-2  me-2 me-sm-3  "
                    : "from-edit-profile-btn  mx-auto px-4"
                }
              >
                {inputDisable ? "Edit Profile" : "Save"}
              </button>
            </div>
            <div className="row">
              <div className="col-6 ">
                <div className="mb-md-4 mb-3">
                  {inputDisable ? (
                    ""
                  ) : (
                    <>
                      <label
                        for="exampleFormControlInput21"
                        class="form-label mb-2  edit-label  "
                      >
                        First Name
                      </label>
                    </>
                  )}
                  <input
                    type="text"
                    disabled={inputDisable ? true : false}
                    className="form-control  input-border-16191e33 btn-disable  profile-input-placeholder"
                    id="exampleFormControlInput12"
                    placeholder="Jhone"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-md-4 mb-3">
                  {inputDisable ? (
                    ""
                  ) : (
                    <>
                      <label
                        for="exampleFormControlInput21"
                        class="form-label mb-2  edit-label  "
                      >
                        Last Name
                      </label>
                    </>
                  )}
                  <input
                    type="text"
                    disabled={inputDisable ? true : false}
                    className="form-control input-border-16191e33  profile-input-placeholder"
                    id="exampleFormControlInput13"
                    placeholder="doe"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="mb-md-4 mb-3">
                  {inputDisable ? (
                    ""
                  ) : (
                    <>
                      <label
                        for="exampleFormControlInput21"
                        class="form-label mb-2  edit-label  "
                      >
                        Email
                      </label>
                    </>
                  )}
                  <input
                    type="gmail"
                    disabled={inputDisable ? true : false}
                    className="form-control input-border-16191e33  profile-input-placeholder"
                    id="exampleFormControlInput14"
                    placeholder="jhone@gmail.com"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="mb-md-4 mb-3">
                  {inputDisable ? (
                    ""
                  ) : (
                    <>
                      <label
                        for="exampleFormControlInput21"
                        class="form-label mb-2  edit-label  "
                      >
                        Phone Number
                      </label>
                    </>
                  )}
                  <input
                    type="number"
                    disabled={inputDisable ? true : false}
                    className="form-control input-border-16191e33   profile-input-placeholder"
                    id="exampleFormControlInput15"
                    placeholder="1234567890"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvisorProfile;
