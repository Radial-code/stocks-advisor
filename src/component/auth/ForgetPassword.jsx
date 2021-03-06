import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPasswordAction } from "../../redux/action/auth";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";
import { ForgetpasswordIcon } from "../common/icons/Icons";
import Loader from "../common/Loader";
import { EmailRegex } from "../common/Validation";

const ForgetPassword = () => {
  const { getValueOf, layoutClickChanger } = useLayoutChangerProvider();
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
    <div className="mt-100">
      <div className="container min-h-576px-80vh my-3 my-sm-5 pt-sm-5 d-flex flex-column justify-content-center">
        <div className="row">
          <div className="col-xxl-5 col-lg-7 col-md-10 col-12 mx-auto form-box-shadow">
            <div className="py-4 px-xxl-5 px-3  ">
              <p className="mb-sm-4 mb-0 from-heading text-center">
                {getValueOf("Forget Your Password")}
              </p>
              <p className=" mb-sm-5 mb-0 max-sm-w-283 mx-auto py-3 py-sm-0 from-sub-heading text-center">
                {getValueOf("Enter your email and we'll send the instructions")}
              </p>

              <div className="mb-3 form-field">
                <span className="position-relative d-flex flex-column justify-content-center ">
                  <input
                    type="text"
                    className={`${
                      layoutClickChanger ? "" : "px-5"
                    } form-control  padding-right-50`}
                    id="exampleFormControlInput3"
                    placeholder={getValueOf("Johndoe@gmail.com")}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div
                    className={`${
                      layoutClickChanger ? "me-4" : "ms-2"
                    } position-absolute `}
                  >
                    <ForgetpasswordIcon />
                  </div>
                </span>
                <span className="text-danger">
                  {error && email === ""
                    ? `${getValueOf("Email is required")}`
                    : error && EmailRegex.test(email) === false
                    ? `${getValueOf("Enter valid email")}`
                    : null}
                </span>
              </div>

              <button
                disabled={loading}
                onClick={() => submitResetPassword()}
                className=" w-100 mt-sm-3 mt-2 mb-sm-4 from-btn"
              >
                {loading ? <Loader /> : `${getValueOf("Reset Password")}`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
