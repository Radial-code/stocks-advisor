import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPasswordAction } from "../../redux/action/auth";
import { ForgetpasswordIcon } from "../common/icons/Icons";
import Loader from "../common/Loader";
import { EmailRegex } from "../common/Validation";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitResetPassword = () => {
    setError(true);
    if (email !== "" && EmailRegex.test(email) === true) {
      dispatch(resetPasswordAction({ email: email }, setLoading));
    }
  };
  return (
    <div>
      <div className="container min-h-576px-100vh my-3 my-sm-5 pt-sm-5">
        <div className="row">
          <div className="col-xxl-5 col-lg-7 col-md-10 col-12 mx-auto form-box-shadow">
            <div className="py-4 px-xxl-5 px-3  ">
              <p className="mb-sm-4 mb-0 from-heading text-center">
                Forget Your Password
              </p>
              <p className=" mb-sm-5 mb-0 max-sm-w-283 mx-auto py-3 py-sm-0 from-sub-heading text-center">
                Enter your email and we'll send the instructions
              </p>

              <div className="mb-3 ">
                <span className="position-relative d-flex flex-column justify-content-center ">
                  <input
                    type="text"
                    className="form-control from-input-placeholder padding-right-50"
                    id="exampleFormControlInput3"
                    placeholder="Johndoe@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="position-absolute me-4">
                    <ForgetpasswordIcon />
                  </div>
                </span>
                {error && email === ""
                  ? "Email is required"
                  : error && EmailRegex.test(email) === false
                  ? "Enter valid email"
                  : null}
              </div>

              <button
                disabled={loading}
                onClick={() => submitResetPassword()}
                className="border-0 w-100 mt-sm-3 mt-2 mb-sm-4 from-btn"
              >
                {loading ? <Loader /> : "Reset Password"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;