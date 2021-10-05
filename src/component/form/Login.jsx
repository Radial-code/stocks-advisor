import React, { useState } from "react";
import "../form/form.css";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/action/auth";
import Loader from "../common/Loader";

function Login({ history }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [logInDetails, setLoginInDetails] = useState({
    email: "",
    password: "",
  });

  const submitLoginInForm = () => {
    setError(true);
    if (logInDetails.email && logInDetails.password) {
      dispatch(loginAction(logInDetails, setLoading, history));
    } else {
    }
  };

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return (
    <div className="container-fluid height-100vh   d-flex flex-column justify-content-center">
      <div className="row justify-content-center align-items-center">
        <div className="col-xl-4 col-sm-8 col">
          <div className="background-form p-sm-5 p-2 my-sm-0 my-5">
            <p className="text-center edit-contact-text ff-popins mb-0">
              Log In
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
                  placeholder="Email"
                />
                <span className="text-danger">
                  {error && logInDetails.email === ""
                    ? "email is required"
                    : error && regex.test(logInDetails.email) === false
                    ? "Enter valid email"
                    : null}
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
                  placeholder="Password"
                />
              </Form.Group>

              <div className=" my-sm-3">
                <button
                  type="button"
                  onClick={() => submitLoginInForm()}
                  className=" w-100 form-btn  ff-popins"
                >
                  {loading ? <Loader /> : "Log In"}
                </button>
              </div>
            </Form>
            <p className="ff-popins text-center mb-2 pt-sm-5 pt-4">
              Don't have an account?{" "}
              <Link to="/signup" className="text-decoration">
                <span className="sign-up-text cursor-pointer">Sign Up</span>
              </Link>
            </p>
            <Link className="text-decoration" to="/forget/password">
              {" "}
              <p className="ff-popins bg-16191e text-center cursor-pointer pt-sm-0 pt-3">
                ?Forgot Password
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
