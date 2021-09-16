import React from "react";
import { Form, FormGroup } from "react-bootstrap";

function SignUp() {
  return (
    <div className="container h-100vh d-flex flex-column justify-content-center">
      <div className="row justify-content-center align-items-center">
        <div className="col-xl-6 col-sm-10">
          <div className="form-background p-sm-5 p-2">
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
                      type="email"
                      className="text-start"
                      placeholder="Last Name"
                    />
                  </Form.Group>{" "}
                </div>
                <div className="col-6 order-1 last-name">
                  <Form.Group
                    className="mb-3 form-field "
                    controlId="formBasicEmail"
                  >
                    <Form.Control type="email" placeholder="First Name" />
                  </Form.Group>
                </div>
              </div>
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
                <Form.Control type="text" placeholder="Phone Number" />
              </Form.Group>
              <Form.Group
                className="my-4 form-field"
                controlId="formBasicPassword"
              >
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group
                className="my-4 form-field"
                controlId="formBasicPassword"
              >
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
              <FormGroup className=" form-field">
                <select className="form-select text-end">
                  <option>Select Country</option>
                </select>
              </FormGroup>
              <div className=" my-4">
                <button className=" w-100 form-btn px-5 py-3 border-0 ff-popins">
                  Sign Up
                </button>
              </div>
            </Form>
            <p className="ff-popins text-center mb-2 pt-4">
              Already have account?{" "}
              <span className="sign-up-text cursor-pointer">Log In</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
