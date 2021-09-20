import React from "react";
import "../form/form.css";
import { Link } from "react-router-dom";

import { Form } from "react-bootstrap";
function Login() {
  return (
    <div className="container-fluid h-100vh d-flex flex-column justify-content-center">
      <div className="row justify-content-center align-items-center">
        <div className="col-xl-4 col-sm-8 col">
          <div className="background-form p-sm-5 p-2">
            <p className="text-center edit-contact-text ff-popins mb-0">
              Log In
            </p>
            <Form className="pt-sm-5  pt-4">
              <Form.Group
                className="mb-3 form-field "
                controlId="formBasicEmail"
              >
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group
                className="my-4 form-field"
                controlId="formBasicPassword"
              >
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <div className=" my-3">
                <button className=" w-100 form-btn  ff-popins">Log In</button>
              </div>
            </Form>
            <p className="ff-popins text-center mb-2 pt-5">
              Don't have an account?{" "}
              <Link to="/signup" className="text-decoration">
                <span className="sign-up-text cursor-pointer">Sign Up</span>
              </Link>
            </p>

            <p className="ff-popins text-center cursor-pointer">
              ?Forgot Password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
