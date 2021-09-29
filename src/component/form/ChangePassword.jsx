import React from "react";
import "../form/form.css";

const ChangePassword = () => {
  return (
    <div>
      <div className="container my-sm-5 pt-sm-5 my-3 min-h-576px-100vh">
        <div className="row">
          <div className="col-xxl-5 col-lg-7 col-md-10 col-12   mx-auto form-box-shadow">
            <div className="py-4 px-xxl-5 px-3  ">
              <p className="mb-4 mb-md-5 from-heading text-center">
                Change Password
              </p>
              <div className="mb-3   ">
                <input
                  type="text"
                  className="form-control from-input-placeholder"
                  id="exampleFormControlInput6"
                  placeholder="Current Password"
                />
              </div>
              <div className="mb-3  ">
                <input
                  type="text"
                  className="form-control from-input-placeholder"
                  id="exampleFormControlInput7"
                  placeholder="New Password"
                />
              </div>
              <div className="mb-0">
                <input
                  type="text"
                  className="form-control from-input-placeholder"
                  id="exampleFormControlInput8"
                  placeholder="Confirm Password"
                />
              </div>
              <button className="border-0 w-100 mb-4 mt-sm-5 mt-3 from-btn">
                Update My Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
