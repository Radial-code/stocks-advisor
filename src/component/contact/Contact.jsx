import React from "react";
import "./contacts.css";
const Contact = () => {
  return (
    <div className="container  py-5">
      <div className="row  justify-content-center align-items-center h-100 ">
        <div className="col">
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-7 d-flex justify-content d-sm-block mt-5 pt-4  ">
              <div className="p-xl-5 p-3 us-contact">
                <h1 className=" mb-2 mb-md-3  section-heading">Contact Us</h1>

                <p className=" sub-text m-0">Send us your concerns 24x7</p>
                <div className="row mt-4 mt-md-5 pt-2 ">
                  <div className=" col-12 col-md-4 order-3 mt-5 mt-md-0  order-md-1 px-auto ">
                    <p className=" email-heading pb-2 m-0">Email</p>
                    <p className="email-para ">email@email.com</p>
                  </div>

                  <div className="col-4 col-md-4 order-2 order-md-2 ">
                    <p className=" email-heading pb-2 m-0 fs-sm-14">
                      Telephone
                    </p>
                    <p className=" email-para">01234567890</p>
                  </div>

                  <div className="col-7 col-md-4 order-1 order-md-3 ">
                    <p className="email-heading pb-md-3 m-0">Addresses</p>
                    <p className="addres-sub-heading pt-1">Santo Domingo</p>
                    <p className="sub-text">Lorem Ipsum passagess</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12   col-lg-5 ">
              <form className="form-box p-xl-5 p-4" action="">
                <div className="d-flex flex-column justify-content-center d-sm-block align-items-center pt-lg-3  pe-sm-0 pt-md-4 px-md-3">
                  {/* NAME */}
                  <input
                    className=" input-border  py-2 py-md-3 pe-3 pe-md-4 ps-0 mb-2 mb-md-3 w-100 input-text border-A3A3A3 "
                    type="text"
                    placeholder="Name"
                    required
                  />
                  {/* EMAIL */}
                  <input
                    className=" input-border  py-2 py-md-3 pe-3 pe-md-4 ps-0 mb-2 mb-md-3 w-100 input-text border-A3A3A3 "
                    type="email"
                    placeholder="Email"
                    required
                  />
                  {/* DROPDOWN */}

                  <div className="input-border py-2 py-md-3 pe-3 pe-md-4 mb-4 pl-15 w-100">
                    <select
                      id="cars"
                      name="cars"
                      className="  w-100 border-0 bg-white input-text border-A3A3A3 dropdown-toggle"
                      type="text"
                      id="cars"
                      placeholder="Select Contact Reason"
                    >
                      <option value="Select Contact Reason">
                        Select Contact Reason
                      </option>
                      <option value="Select Contact Reason">
                        Select Contact Reason
                      </option>
                      <option value="Select Contact Reason">
                        Select Contact Reason
                      </option>
                      <option value="Select Contact Reason">
                        Select Contact Reason
                      </option>
                    </select>
                  </div>
                  {/* MESSAGE */}
                  <textarea
                    className=" input-border py-2 py-md-3 pe-3 pe-md-4 ps-0 mb-2 mb-md-3 w-100 input-text border-A3A3A3 "
                    rows="6"
                    placeholder="Message..."
                    required
                  ></textarea>
                  {/* BUTTON */}
                  <div className="text-end">
                    <button className=" mt-4  btn send-msg-btn text-white">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
