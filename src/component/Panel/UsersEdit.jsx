import React from "react";
import "./Panel.css";
const UsersEdit = () => {
  return (
    <div>
      <section>
        <div className="container bg-danger">
          <div className="row">
            <div className="col-xl-4 col-12"></div>
            <div className="col-xl-8 col-12">
              <div className="p-4 bg-white">
                <div className="p-md-3">
                  <p className="heading-stock pb-sm-3">Jhone Doe </p>
                  <p className="contact-info  border-bottom-1px">
                    Contact Info
                  </p>
                  <div className="row pt-md-2 pt-1  mb-4">
                    <div className="col-md-6 col-12 my-1 my-md-0">
                      <input
                        className="py-md-3 py-2 px-md-4 px-3 input-border w-100 input-placeholder"
                        type="text"
                        placeholder="Jhone Doe"
                      />
                    </div>
                    <div className="col-md-6 col-12 my-1 my-md-0">
                      <input
                        className="py-md-3 py-2 px-md-4 px-3 input-border w-100 input-placeholder"
                        type="email"
                        placeholder="Jhondoe@gmail.com"
                      />
                    </div>
                    <div className="col-md-6 col-12 my-1 mt-md-2">
                      <input
                        className="py-md-3 py-2 px-md-4 px-3 input-border w-100 input-placeholder"
                        type="number"
                        placeholder="1234567890"
                      />
                    </div>
                  </div>
                  <button className="border-0 update-btn mb-4">Update</button>
                  <p className="contact-info border-bottom-1px pt-md-2 pt-1">
                    Current Subscription Info
                  </p>
                  <div className="row my-4">
                    <div className="col-md-6 col-12 panal-1 ">
                      <div className=" pt-3 pb-4">
                        <p className="d-flex justify-content-between mb-0 pb-3 border-bottom-1px">
                          <span className="color-4870B3 profile-heading fw-bold">
                            $299.99
                          </span>
                          <span className="profile-heading">Plan-1</span>
                        </p>
                        <p className="fs-16 color-16191e fw-500 mt-3 mb-2 text-start">
                          Purchase Date:
                          <span className="color-16191E-7 fw-normal ms-3">
                            17/07/2021
                          </span>
                        </p>
                        <p className="fs-16 color-16191e fw-500 text-start">
                          Auto Renew:
                          <span className="color-16191E-7 fw-normal ms-3">
                            Enable
                          </span>
                          <span className="float-end"> button </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsersEdit;
