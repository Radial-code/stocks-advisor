import React from "react";
import { ForgetpasswordIcon } from "../common/icons/Icons";

const ForgetPassword = () => {
  return (
    <div>
      <div className="container min-h-576px-100vh my-3 my-sm-5 pt-sm-5">
        <div className="row">
          <div className="col-xxl-5 col-lg-7 col-md-10 col-12 mx-auto form-box-shadow">
            <div className="py-4 px-xxl-5 px-3  ">
              <p className="mb-sm-4 mb-0 from-heading text-center">
                ?Forget Your Password
              </p>
              <p className=" mb-sm-5 mb-0 py-3 py-sm-0 from-sub-heading text-center">
                Enter your email and we'll send the instructions
              </p>

              <div className="mb-3 ">
                <span className="position-relative d-flex flex-column justify-content-center ">
                  <input
                    type="text"
                    className="form-control from-input-placeholder padding-right-50"
                    id="exampleFormControlInput3"
                    placeholder="Johndoe@gmail.com"
                  />
                  <div className="position-absolute me-4">
                    <ForgetpasswordIcon />
                  </div>
                </span>
              </div>

              <button className="border-0 w-100 mt-sm-3 mt-2 mb-sm-4 from-btn">
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
