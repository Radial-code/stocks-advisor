import React, { useState } from "react";
import "../form/form.css";
import { Link } from "react-router-dom";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

import { loginAction } from "../../redux/action/auth";
import Loader from "../common/Loader";
import { EmailRegex } from "../common/Validation";

function Login({ history }) {
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [reCaptchaToken, setReCaptchaToken] = useState(null);
  const [error, setError] = useState(false);
  const [logInDetails, setLoginInDetails] = useState({
    email: "",
    password: "",
  });
  const userData = useSelector((state) => state.auth.userData);

  const submitLoginInForm = () => {
    setError(true);
    if (
      logInDetails.email &&
      logInDetails.password &&
      !!reCaptchaToken &&
      EmailRegex.test(logInDetails.email) === true
    ) {
      const data = {
        "recaptcha-token": reCaptchaToken,
        email: logInDetails.email,
        password: logInDetails.password,
      };
      dispatch(loginAction(data, setLoading, history, userData));
    }
  };

  return (
    <div className="container-fluid height-100vh bg-f9f9f9  mt-100 d-flex flex-column justify-content-center ">
      <div className="row justify-content-center align-items-center mt-5 mb-5 ">
        <div className="col-xl-4 col-sm-5">
          <div className="background-form p-sm-5 p-2 my-sm-0 my-5">
            <p className="text-center edit-contact-text ff-popins mb-0">
              {getValueOf("Log In")}
            </p>
            <Form className="pt-sm-5  pt-4">
              <Form.Group
                className="mb-3 form-field "
                controlId="formBasicEmail"
              >
                <Form.Control
                  value={logInDetails.email}
                  onChange={(e) => {
                    setLoginInDetails({
                      ...logInDetails,
                      email: e.target.value,
                    });
                  }}
                  type="email"
                  placeholder={getValueOf("Email")}
                />
                <span className="text-danger">
                  {error && logInDetails.email === "" ? (
                    <>{getValueOf("email is required")}</>
                  ) : error && EmailRegex.test(logInDetails.email) === false ? (
                    <>{getValueOf("Enter valid email")}</>
                  ) : null}
                </span>
              </Form.Group>

              <Form.Group
                className="my-4 form-field"
                controlId="formBasicPassword"
              >
                <Form.Control
                  value={logInDetails.password}
                  onChange={(e) => {
                    setLoginInDetails({
                      ...logInDetails,
                      password: e.target.value,
                    });
                  }}
                  type="password"
                  placeholder={getValueOf("Password")}
                />
                <span className="text-danger">
                  {error && logInDetails.password === "" ? (
                    <>{getValueOf("Password is required")}</>
                  ) : null}
                </span>
              </Form.Group>
              <div className="" style={{ maWidth: "200px" }}>
                <HCaptcha
                  sitekey="340a426e-e981-47e6-8a61-6ae115ab23a2"
                  onVerify={(token, ekey) => setReCaptchaToken(token, ekey)}
                />
              </div>
              <span className="text-danger">
                {error && !reCaptchaToken ? (
                  <>{getValueOf("Please solved Captcha")}</>
                ) : null}
              </span>
              <div className=" my-sm-3">
                <button
                  type="button"
                  onClick={() => submitLoginInForm()}
                  className=" w-100 form-btn  ff-popins"
                >
                  {loading ? <Loader /> : <>{getValueOf("Log In")}</>}
                </button>
              </div>
            </Form>
            <p className="ff-popins text-center mb-2 pt-sm-5 pt-4">
              {getValueOf("Don't have an account ?")}
              <Link to="/signup/inviteCode" className="text-decoration">
                <span className="sign-up-text cursor-pointer">
                  {getValueOf("Sign Up")}
                </span>
              </Link>
            </p>
            <Link className="text-decoration" to="/forget/password">
              {layoutClickChanger ? (
                <p className="ff-popins bg-16191e text-center cursor-pointer pt-sm-0 pt-3">
                  {getValueOf("? Forgot Password")}
                </p>
              ) : (
                <p className="ff-popins bg-16191e text-center cursor-pointer pt-sm-0 pt-3">
                  {getValueOf(" Forgot Password ?")}
                </p>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
