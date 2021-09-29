import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SignUpAction } from "../../redux/action/auth";

function SignUp({ history }) {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [signUpDetails, setSignUpDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone_number: "",
    confirm_password: "",
    country: "",
  });

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  const submitSignUpForm = () => {
    setError(true);
    if (
      signUpDetails.firstname &&
      signUpDetails.lastname &&
      signUpDetails.email &&
      signUpDetails.password &&
      signUpDetails.phone_number &&
      signUpDetails.confirm_password &&
      signUpDetails.country
    ) {
      console.log(signUpDetails);
      dispatch(SignUpAction(signUpDetails, setLoading, history));
    } else {
    }
  };

  return (
    <div className="container min-h-100vh d-flex flex-column justify-content-center">
      <div className="row justify-content-center align-items-center">
        <div className="col-xl-6 col-sm-10">
          <div className="background-form p-sm-5 p-2">
            <p className="text-center edit-contact-text ff-popins mb-0">
              Sign Up
            </p>
            <Form className="pt-sm-5  pt-4">
              <div className="row">
                <div className="col-6 order-2 first-name">
                  <Form.Group
                    className="mb-3 form-field "
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      value={signUpDetails.lastname}
                      onChange={(e) => {
                        setSignUpDetails({
                          ...signUpDetails,
                          lastname: e.target.value,
                        });
                      }}
                      type="text"
                      className=""
                      placeholder="Last Name"
                    />
                    {error && signUpDetails.lastname === ""
                      ? "Last name is required"
                      : null}
                  </Form.Group>
                </div>
                <div className="col-6 order-1 last-name">
                  <Form.Group
                    className="mb-3 form-field "
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      value={signUpDetails.firstname}
                      onChange={(e) => {
                        setSignUpDetails({
                          ...signUpDetails,
                          firstname: e.target.value,
                        });
                      }}
                      type="text"
                      placeholder="First Name"
                    />
                    {error && signUpDetails.firstname === ""
                      ? "First name is required"
                      : null}
                  </Form.Group>
                </div>
              </div>
              <Form.Group
                className="mb-3 form-field "
                controlId="formBasicEmail"
              >
                <Form.Control
                  value={signUpDetails.email}
                  onChange={(e) => {
                    setSignUpDetails({
                      ...signUpDetails,
                      email: e.target.value,
                    });
                  }}
                  type="email"
                  placeholder="Email"
                />
                {error && signUpDetails.email === ""
                  ? "email is required"
                  : error && regex.test(signUpDetails.email) === false
                  ? "Enter valid email"
                  : null}
              </Form.Group>

              <Form.Group
                className="my-4 form-field"
                controlId="formBasicPassword"
              >
                <Form.Control
                  value={signUpDetails.phone_number}
                  onChange={(e) => {
                    setSignUpDetails({
                      ...signUpDetails,
                      phone_number: e.target.value,
                    });
                  }}
                  type="tel"
                  placeholder="Phone Number"
                />
                {error && signUpDetails.phone_number === ""
                  ? "Phone Number is required"
                  : error &&
                    phoneRegex.test(signUpDetails.phone_number) === false
                  ? "Enter valid Phone Number"
                  : null}
              </Form.Group>
              <Form.Group
                className="my-4 form-field"
                controlId="formBasicPassword"
              >
                <Form.Control
                  value={signUpDetails.password}
                  onChange={(e) => {
                    setSignUpDetails({
                      ...signUpDetails,
                      password: e.target.value,
                    });
                  }}
                  type="password"
                  placeholder="Password"
                />
                {error && signUpDetails.password === ""
                  ? "Password is required"
                  : null}
              </Form.Group>
              <Form.Group
                className="my-4 form-field"
                controlId="formBasicPassword"
              >
                <Form.Control
                  value={signUpDetails.confirm_password}
                  onChange={(e) => {
                    setSignUpDetails({
                      ...signUpDetails,
                      confirm_password: e.target.value,
                    });
                  }}
                  type="password"
                  placeholder="Confirm Password"
                />{" "}
                {error && signUpDetails.confirm_password === ""
                  ? "Confirm Password is required"
                  : error &&
                    signUpDetails.password !== signUpDetails.confirm_password
                  ? "Enter  same password"
                  : null}
              </Form.Group>
              <FormGroup className=" form-field">
                <select
                  value={signUpDetails.country}
                  onChange={(e) => {
                    setSignUpDetails({
                      ...signUpDetails,
                      country: e.target.value,
                    });
                  }}
                  className="form-select text-end"
                >
                  <option>Select Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>JAPAN</option>
                </select>
              </FormGroup>
              {error && signUpDetails.country === ""
                ? "Country is required"
                : null}
              <div className=" my-4">
                <button
                  type="button"
                  onClick={() => submitSignUpForm()}
                  className=" w-100 form-btn px-5 py-3 border-0 ff-popins"
                >
                  Sign Up
                </button>
              </div>
            </Form>
            <p className="ff-popins text-center mb-2 pt-4">
              Already have account?{" "}
              <Link to="/login" className="text-decoration">
                <span className="sign-up-text cursor-pointer">Log In</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(SignUp);
