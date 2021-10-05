import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContactAction } from "../../redux/action/contact";
import Loader from "../common/Loader";
import { EmailRegex } from "../common/Validation";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [contactDetails, setContactDetails] = useState({
    name: "",
    message: "",
    reason: "",
    email: "",
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
      EmailRegex.test(contactDetails.email) === true
    ) {
      dispatch(addContactAction(contactDetails, setSetLoading));
    }
  };
  return (
    <form className="form-box p-xl-5 p-4" action="">
      <div className="d-flex flex-column justify-content-center d-sm-block align-items-center pt-lg-3  pe-sm-0 pt-md-4 px-md-3">
        {/* NAME */}
        <input
          className=" input-border  py-2 py-md-3 pe-3 pe-md-4 ps-0 mb-2 mb-md-3 w-100 input-text border-A3A3A3 "
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setContactDetails({
              ...contactDetails,
              name: e.target.value,
            });
          }}
        />
        {error && contactDetails.name === "" ? "Name is required" : null}
        {/* EMAIL */}
        <input
          className=" input-border  py-2 py-md-3 pe-3 pe-md-4 ps-0 mb-2 mb-md-3 w-100 input-text border-A3A3A3 "
          type="email"
          placeholder="Email"
          required
          onChange={(e) => {
            setContactDetails({
              ...contactDetails,
              email: e.target.value,
            });
          }}
        />
        {error && contactDetails.email === ""
          ? "Email is required"
          : error && EmailRegex.test(contactDetails.email) === false
          ? "Enter valid email"
          : null}

        {/* DROPDOWN */}

        <div className="input-border py-2 py-md-3 pe-3 pe-md-4 mb-4 pl-15 w-100">
          <select
            id="cars"
            name="cars"
            className="  w-100 border-0 bg-white input-text border-A3A3A3 dropdown-toggle"
            type="text"
            id="cars"
            placeholder="Select Contact Reason"
            onChange={(e) => {
              setContactDetails({
                ...contactDetails,
                reason: e.target.value,
              });
            }}
          >
            <option value="Select Contact Reason">Select Contact Reason</option>
            <option value="Select Contact Reason">Select Contact Reason</option>
            <option value="Select Contact Reason">Select Contact Reason</option>
            <option value="Select Contact Reason">Select Contact Reason</option>
          </select>
        </div>
        {error && contactDetails.reason === "" ? "Reason is required" : null}
        {/* MESSAGE */}
        <textarea
          className=" input-border py-2 py-md-3 pe-3 pe-md-4 ps-0 mb-2 mb-md-3 w-100 input-text border-A3A3A3 "
          rows="6"
          placeholder="Message..."
          required
          onChange={(e) => {
            setContactDetails({
              ...contactDetails,
              message: e.target.value,
            });
          }}
        ></textarea>
        {error && contactDetails.message === "" ? "Message is required" : null}
        {/* BUTTON */}
        <div className="text-end">
          <button
            type="button"
            disabled={loading}
            onClick={() => SubmitContactForm()}
            className=" mt-4  btn send-msg-btn text-white"
          >
            {loading ? <Loader /> : "Send Message"}
          </button>
        </div>
      </div>
    </form>
  );
};
export default ContactForm;
