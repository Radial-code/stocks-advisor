import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { SignUpAction, UserNameAction } from "../../redux/action/auth";
import { passwordRegex, EmailRegex, PhoneRegex } from "../common/Validation";
import Loader from "../common/Loader";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";
import { useSelector } from "react-redux";
import Select from "react-select";

function SignUp({ history, match }) {
  const { inviteCode } = match.params;
  localStorage.setItem(
    "inviteCode",
    inviteCode !== "inviteCode" ? inviteCode : null
  );
  const joinedReferalCode = localStorage.getItem("inviteCode");
  const dispatch = useDispatch();
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();
  const countries = useSelector((state) => state.list.countries);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userNameError, setUserNameError] = useState("");
  const [specialChar, SetSpecialChar] = useState(false);
  const [reCaptchaToken, setReCaptchaToken] = useState(null);
  const [countryCode, setCountryCode] = useState();
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
    country: "",
    countryCode: "",
    "recaptcha-token": reCaptchaToken,
  });

  const submitSignUpForm = () => {
    setError(true);
    if (
      signUpDetails.firstName &&
      signUpDetails.lastName &&
      signUpDetails.username &&
      signUpDetails.email &&
      signUpDetails.password &&
      signUpDetails.password === signUpDetails.confirmPassword &&
      signUpDetails.phone &&
      signUpDetails.confirmPassword &&
      signUpDetails.country &&
      // signUpDetails.countryCode &&
      !!reCaptchaToken &&
      passwordRegex.test(signUpDetails.password) === true
    ) {
      const data = {
        firstName: signUpDetails.firstName,
        lastName: signUpDetails.lastName,
        username: signUpDetails.username,
        email: signUpDetails.email,
        password: signUpDetails.password,
        phone: signUpDetails.phone,
        confirmPassword: signUpDetails.confirmPassword,
        country: signUpDetails.country,
        countryCode: signUpDetails.countryCode,
        "recaptcha-token": reCaptchaToken,
        joinedReferalCode: joinedReferalCode,
      };
      dispatch(SignUpAction(data, setLoading, history));
    }
  };
  const userNameSubmit = (e) => {
    setSignUpDetails({
      ...signUpDetails,
      username: e.target.value,
    });

    if (signUpDetails.username.length > 2) {
      dispatch(
        UserNameAction({ username: signUpDetails.username }, setUserNameError)
      );
    }
  };

  const handleChange = (selectedOption) => {
    const codeCountry = {
      value: selectedOption.value,
      label: selectedOption.value,
    };
    setSignUpDetails({
      ...signUpDetails,
      countryCode: codeCountry.value,
    });

    setCountryCode(codeCountry);
  };

  const countriesCode =
    countries && countries.length > 0
      ? countries.map((item) => {
          return {
            value: item.dial_code,
            label: `${item.name}(${item.dial_code})`,
          };
        })
      : "";

  return (
    <div className="container  d-flex  flex-column justify-content-center ">
      <div className="row justify-content-center align-items-center mt-5 mb-5 ">
        <div className="col-xl-5 col-sm-10">
          <div className="background-form p-sm-5 p-2 mt-100">
            <p className="text-center edit-contact-text ff-popins mb-0">
              {getValueOf("Sign Up")}
            </p>
            <Form className="pt-sm-5  pt-4">
              <div className="row">
                <div className="col-6 order-2 first-name">
                  <Form.Group
                    className="mb-3 form-field "
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      value={signUpDetails.lastName}
                      onChange={(e) => {
                        setSignUpDetails({
                          ...signUpDetails,
                          lastName: e.target.value,
                        });
                      }}
                      type="text"
                      className=""
                      placeholder={getValueOf("Last Name")}
                    />
                    <span className="text-danger validation-text">
                      {error && signUpDetails.lastName === "" ? (
                        <>{getValueOf("LastName is required")}</>
                      ) : null}
                    </span>
                  </Form.Group>
                </div>
                <div className="col-6 order-1 last-name">
                  <Form.Group
                    className="mb-3 form-field "
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      value={signUpDetails.firstName}
                      onChange={(e) => {
                        setSignUpDetails({
                          ...signUpDetails,
                          firstName: e.target.value,
                        });
                      }}
                      type="text"
                      placeholder={getValueOf("First Name")}
                    />
                    <span className="text-danger validation-text">
                      {error && signUpDetails.firstName === ""
                        ? "FirstName is required"
                        : null}
                    </span>
                  </Form.Group>
                </div>
              </div>
              {/* userName */}
              <Form.Group
                className="mb-3 form-field "
                controlId="formBasicEmail"
              >
                <Form.Control
                  value={signUpDetails.username}
                  onChange={userNameSubmit}
                  type="text"
                  placeholder="UserName"
                />
                {console.log(userNameError)}
                {signUpDetails.username !== "" && userNameError.success ? (
                  <span className="text-success">{userNameError.message}</span>
                ) : (
                  <span className="text-danger">{userNameError.message}</span>
                )}
              </Form.Group>
              {/* email */}
              <Form.Group className=" form-field " controlId="formBasicEmail">
                <Form.Control
                  value={signUpDetails.email}
                  onChange={(e) => {
                    setSignUpDetails({
                      ...signUpDetails,
                      email: e.target.value,
                    });
                  }}
                  type="email"
                  placeholder={getValueOf("Email")}
                />
                <span className="text-danger validation-text">
                  {error && signUpDetails.email === "" ? (
                    <>{getValueOf("email is required")}</>
                  ) : error &&
                    EmailRegex.test(signUpDetails.email) === false ? (
                    <>{getValueOf("Enter valid email")}</>
                  ) : null}
                </span>
              </Form.Group>
              <div
                className={`${
                  layoutClickChanger ? "" : "align-items-center"
                } row `}
              >
                {layoutClickChanger ? (
                  <>
                    {" "}
                    <div
                      className={`${
                        layoutClickChanger
                          ? "col-sm-7 col-6 ps-0 "
                          : "col-sm-7 col-6  pe-0 "
                      }`}
                    >
                      <Form.Group
                        className={`${
                          layoutClickChanger ? "mt-3" : " mt-3"
                        } mb-3 form-field number-field`}
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          value={signUpDetails.phone}
                          onChange={(e) => {
                            setSignUpDetails({
                              ...signUpDetails,
                              phone: Number(e.target.value),
                            });
                          }}
                          type="tel"
                          placeholder={getValueOf("Phone Number")}
                        />

                        <span className="text-danger validation-text">
                          {error && signUpDetails.phone === "" ? (
                            <>{getValueOf("Phone No is required")}</>
                          ) : error && signUpDetails.phone < 10 ? (
                            <>{getValueOf("Enter valid Phone No")}</>
                          ) : null}
                        </span>
                      </Form.Group>
                    </div>
                    <div
                      className={`${
                        layoutClickChanger
                          ? "col-sm-5  pe-0 col-6"
                          : "col-sm-5 ps-0 col-6"
                      }`}
                    >
                      <FormGroup className="contact-select pt-3">
                        <Select
                          value={countryCode}
                          onChange={handleChange}
                          options={countriesCode}
                        />
                      </FormGroup>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className={`${
                        layoutClickChanger
                          ? "col-sm-5  ps-0 col-6"
                          : "col-sm-5 pe-0 col-6"
                      }`}
                    >
                      <FormGroup className="contact-select">
                        <Select
                          value={countryCode}
                          onChange={handleChange}
                          options={countriesCode}
                        />
                      </FormGroup>
                    </div>{" "}
                    <div
                      className={`${
                        layoutClickChanger
                          ? "col-sm-7 col-6 pe-0 "
                          : "col-sm-7 col-6  ps-0 "
                      }`}
                    >
                      <Form.Group
                        className="my-3 form-field number-field"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          value={signUpDetails.phone}
                          onChange={(e) => {
                            setSignUpDetails({
                              ...signUpDetails,
                              phone: Number(e.target.value),
                            });
                          }}
                          type="tel"
                          placeholder={getValueOf("Phone Number")}
                        />
                      </Form.Group>
                    </div>
                    <span className="text-danger mb-2 validation-text">
                      {error && signUpDetails.phone === "" ? (
                        <>{getValueOf("Phone Number is required")}</>
                      ) : error &&
                        PhoneRegex.test(signUpDetails.phone) === false ? (
                        <>{getValueOf("Enter valid Phone Number")}</>
                      ) : null}
                    </span>
                  </>
                )}
              </div>
              <Form.Group
                className="mb-4 form-field"
                controlId="formBasicPassword"
              >
                <Form.Control
                  value={signUpDetails.password}
                  onChange={(e) => {
                    setSignUpDetails({
                      ...signUpDetails,
                      password: e.target.value,
                    });
                    SetSpecialChar(true);
                  }}
                  type="password"
                  placeholder={getValueOf("Password")}
                />
                <span className="text-danger validation-text">
                  {error && signUpDetails.password === "" ? (
                    <>{getValueOf("Password is required")}</>
                  ) : null}
                  {error && signUpDetails.password === "" ? (
                    <>
                      <p></p>
                    </>
                  ) : specialChar &&
                    passwordRegex.test(signUpDetails.password) === false ? (
                    <>{getValueOf("Enter strong password")}</>
                  ) : null}
                </span>
              </Form.Group>
              <Form.Group
                className="my-4 form-field"
                controlId="formBasicPassword"
              >
                <Form.Control
                  value={signUpDetails.confirmPassword}
                  onChange={(e) => {
                    setSignUpDetails({
                      ...signUpDetails,
                      confirmPassword: e.target.value,
                    });
                  }}
                  type="password"
                  placeholder={getValueOf("Confirm Password")}
                />{" "}
                <span className="text-danger validation-text">
                  {error && signUpDetails.confirmPassword === "" ? (
                    <>{getValueOf("Confirm Password is required")}</>
                  ) : error &&
                    signUpDetails.password !== signUpDetails.confirmPassword ? (
                    <>{getValueOf("Enter same password")}</>
                  ) : null}
                </span>
              </Form.Group>
              {layoutClickChanger ? (
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
                    <option>{getValueOf("Select Country")}</option>
                    {countries && countries.length ? (
                      countries.map((value, index) => {
                        return (
                          <option key={index} value={value.name}>
                            {value.name}
                          </option>
                        );
                      })
                    ) : (
                      <>{getValueOf("Something went wrong")}</>
                    )}
                  </select>
                </FormGroup>
              ) : (
                <FormGroup className=" form-field2">
                  <select
                    value={signUpDetails.country}
                    onChange={(e) => {
                      setSignUpDetails({
                        ...signUpDetails,
                        country: e.target.value,
                      });
                    }}
                    className="form-select text-start"
                  >
                    <option>{getValueOf("Select Country")}</option>
                    {countries && countries.length ? (
                      countries.map((value, index) => {
                        return (
                          <option key={index} value={value.name}>
                            {value.name}
                          </option>
                        );
                      })
                    ) : (
                      <>{getValueOf("Something went wrong")}</>
                    )}
                  </select>
                </FormGroup>
              )}
              <span className="text-danger validation-text">
                {error && signUpDetails.country === "" ? (
                  <>{getValueOf("Country is required")}</>
                ) : null}
              </span>
              <div className="mt-3" style={{ maWidth: "200px" }}>
                <HCaptcha
                  sitekey="340a426e-e981-47e6-8a61-6ae115ab23a2"
                  onVerify={(token, ekey) => setReCaptchaToken(token, ekey)}
                />
              </div>
              <span className="text-danger validation-text">
                {error && !reCaptchaToken ? (
                  <>{getValueOf("Please solved Captcha")}</>
                ) : null}
              </span>
              <div className=" my-4">
                <button
                  type="button"
                  onClick={() => submitSignUpForm()}
                  className=" w-100 form-btn px-5 py-3 ff-popins"
                >
                  {loading ? <Loader /> : <>{getValueOf("Sign Up")}</>}
                </button>
              </div>
            </Form>
            <p className="ff-popins text-center mb-2 pt-4">
              {getValueOf("Already have account?")}{" "}
              <Link to="/login" className="text-decoration">
                <span className="sign-up-text cursor-pointer">
                  {getValueOf("Log In")}
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(SignUp);
