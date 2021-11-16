import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContactAction } from "../../redux/action/contact";
import Loader from "../common/Loader";
import { Form, FormGroup } from "react-bootstrap";
import { EmailRegex, PhoneRegex } from "../common/Validation";
import { useSelector } from "react-redux";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const ContactForm = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.list.countries);
  const [contactDetails, setContactDetails] = useState({
    name: "",
    message: "",
    reason: "",
    email: "",
    phone: "",
    countryCode: "",
  });
  const [error, setError] = useState(false);
  const [loading, setSetLoading] = useState(false);

  const SubmitContactForm = () => {
    setError(true);
    if (
      contactDetails.name !== "" &&
      contactDetails.message !== "" &&
      contactDetails.reason !== "" &&
      contactDetails.email !== "" &&
      contactDetails.phone !== "" &&
      contactDetails.countryCode !== "" &&
      EmailRegex.test(contactDetails.email) === true
    ) {
      dispatch(addContactAction(contactDetails, setSetLoading));
      setContactDetails({
        name: "",
        message: "",
        reason: "",
        email: "",
      });
    }
  };

  return (
    <form className="form-box p-xl-5 p-sm-4 p-2 " action="">
      <div className="d-flex flex-column justify-content-center d-sm-block  pt-lg-3  pe-sm-0 pt-md-4 px-md-3">
        {/* NAME */}
        <input
          className={`${
            layoutClickChanger
              ? " input-border  py-2 py-md-3 pe-3 pe-md-4 ps-0  mt-3 w-100 input-text border-A3A3A3 "
              : " input-border  py-2 py-md-3 ps-3  mt-3 w-100 input-text border-A3A3A3 "
          }`}
          type="text"
          placeholder={getValueOf("Name")}
          onChange={(e) => {
            setContactDetails({
              ...contactDetails,
              name: e.target.value,
            });
          }}
        />
        {error && contactDetails.name === "" ? (
          <span className="text-danger">Name is required</span>
        ) : null}
        {/* EMAIL */}
        <input
          className={`${
            layoutClickChanger
              ? " input-border  py-2 py-md-3 pe-3 pe-md-4 ps-0  mt-3 w-100 input-text border-A3A3A3 "
              : " input-border  py-2 py-md-3 ps-3  mt-3 w-100 input-text border-A3A3A3 "
          }`}
          type="email"
          placeholder={getValueOf("Email")}
          required
          onChange={(e) => {
            setContactDetails({
              ...contactDetails,
              email: e.target.value,
            });
          }}
        />
        {error && contactDetails.email === "" ? (
          <span className="text-danger">Email is required</span>
        ) : error && EmailRegex.test(contactDetails.email) === false ? (
          <span className="text-danger">Enter valid email</span>
        ) : null}
        <div className="row align-items-center">
          {layoutClickChanger ? (
            <>
              <div
                className={`${
                  layoutClickChanger
                    ? "col-sm-7 col-6 ps-0 "
                    : "col-sm-7 col-6  pe-0 "
                }`}
              >
                <Form.Group
                  className="my-3 form-field number-field-contact"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    type="tel"
                    placeholder={getValueOf("Phone Number")}
                    onChange={(e) => {
                      setContactDetails({
                        ...contactDetails,
                        phone: Number(e.target.value),
                      });
                    }}
                  />
                  <span className="text-danger">
                    {error && contactDetails.phone === ""
                      ? "Phone Number is required"
                      : error && PhoneRegex.test(contactDetails.phone) === false
                      ? "Enter valid Phone Number"
                      : null}
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
                <FormGroup className="contact-select">
                  <select
                    onChange={(e) => {
                      setContactDetails({
                        ...contactDetails,
                        countryCode: e.target.value,
                      });
                    }}
                    className={`${
                      layoutClickChanger
                        ? "form-select form-field-3 text-end cursor-pointer ps-5"
                        : "form-select   text-end cursor-pointer ps-5"
                    }`}
                  >
                    <option>Code</option>
                    {countries && countries.length
                      ? countries.map((value, index) => {
                          return (
                            <option
                              className="country-dots"
                              key={index}
                              value={value.dial_code}
                            >
                              {value.name}({value.dial_code})
                            </option>
                          );
                        })
                      : "Something went wrong"}
                  </select>
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
                <div className="contact-field">
                  <div
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    className="contact-border2"
                  >
                    <span className="contact-text">Country Code</span>
                  </div>{" "}
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    {countries &&
                      countries.length &&
                      countries.map((value, i) => {
                        return (
                          <MenuItem
                            value={value.dial_code}
                            onClick={handleClose}
                          >
                            {value.name}({value.dial_code})
                          </MenuItem>
                        );
                      })}
                  </Menu>
                </div>
                {/* <FormGroup className="contact-select">
                  <select
                    onChange={(e) => {
                      setContactDetails({
                        ...contactDetails,
                        countryCode: e.target.value,
                      });
                    }}
                    className={`${
                      layoutClickChanger
                        ? "form-select form-field-3 text-end cursor-pointer ps-5"
                        : "form-select   text-end cursor-pointer ps-5"
                    }`}
                  >
                    <option>Code</option>
                    {countries && countries.length
                      ? countries.map((value, index) => {
                          return (
                            <option
                              className="country-dots"
                              key={index}
                              value={value.dial_code}
                            >
                              {value.name}({value.dial_code})
                            </option>
                          );
                        })
                      : "Something went wrong"}
                  </select>
                </FormGroup> */}
              </div>
              <div
                className={`${
                  layoutClickChanger
                    ? "col-sm-7 col-6 pe-0 "
                    : "col-sm-7 col-6  ps-0 "
                }`}
              >
                <Form.Group
                  className="my-3 form-field number-field-contact"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    type="tel"
                    placeholder="Phone Number"
                    onChange={(e) => {
                      setContactDetails({
                        ...contactDetails,
                        phone: Number(e.target.value),
                      });
                    }}
                  />
                </Form.Group>
              </div>
              <span className="text-danger mb-2">
                {error && contactDetails.phone === ""
                  ? "Phone Number is required"
                  : error && PhoneRegex.test(contactDetails.phone) === false
                  ? "Enter valid Phone Number"
                  : null}
              </span>
            </>
          )}
        </div>
        <div className="row">
          <div className="col-12">
            <input
              className={`${
                layoutClickChanger
                  ? " input-border  py-2 py-md-3 pe-3 pe-md-4 ps-0   w-100 input-text border-A3A3A3 "
                  : " input-border  py-2 py-md-3 ps-3   w-100 input-text border-A3A3A3 "
              } `}
              type="text"
              placeholder={getValueOf("Subject")}
              required
              onChange={(e) => {
                setContactDetails({
                  ...contactDetails,
                  reason: e.target.value,
                });
              }}
            />
            {error && contactDetails.reason === "" ? (
              <span className="text-danger">Reason is required</span>
            ) : null}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <textarea
              className={`${
                layoutClickChanger
                  ? " input-border  py-2 py-md-3 pe-3 pe-md-4 ps-0  mt-3  input-text border-A3A3A3 "
                  : " input-border  py-2 py-md-3 ps-3  mt-3  input-text border-A3A3A3 "
              } w-100`}
              rows="6"
              placeholder={getValueOf("Message…")}
              required
              onChange={(e) => {
                setContactDetails({
                  ...contactDetails,
                  message: e.target.value,
                });
              }}
            ></textarea>
            {error && contactDetails.message === "" ? (
              <span className="text-danger">Message is required</span>
            ) : null}
          </div>
        </div>

        {/* BUTTON */}
        <div className="text-end">
          <button
            type="button"
            disabled={loading}
            onClick={() => SubmitContactForm()}
            className=" mt-4   send-msg-btn text-white"
          >
            {loading ? <Loader /> : getValueOf("Send Message")}
          </button>
        </div>
      </div>
    </form>
  );
};
export default ContactForm;
