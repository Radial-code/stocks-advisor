import React from "react";
import "./userEdit.css";
const UsersEdit = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row my-5">
            <div className="col auto">
              <p className="heading-stock pb-sm-3 border-bottom-1px">
                Content Manager
              </p>
            </div>
            <div className="col-xl-10 col-12 mw-1000 mt-4">
              <div className="p-sm-4 boxx">
                <div className="p-3 ">
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
                        className="py-md-3 py-2 px-md-4 px-3 input-border w-100 input-placeholder bg-161933"
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
                  <div className="row my-4 ps-xxl-3">
                    <div className="col-md-6 col-12 panal-1 my-2 px-sm-0 px-4 ">
                      <div className=" pt-3 pb-4">
                        <p className="d-flex justify-content-between mb-0 pb-3 border-bottom-1px">
                          <span className="color-4870B3 profile-heading fw-bold order-2 order-md-0">
                            $299.99
                          </span>
                          <span className="profile-heading">Plan-1</span>
                        </p>
                        <p className="fs-16 color-16191e fw-500 mt-3 mb-2 text-start d-flex d-md-block">
                          Purchase Date:
                          <span className="color-16191E-7 fw-normal mx-3">
                            17/07/2021
                          </span>
                        </p>
                        <p className="fs-16 color-16191e fw-500 text-start d-flex d-md-block">
                          Auto Renew:
                          <span className="color-16191E-7 fw-normal ms-3 me-5">
                            Enable
                          </span>
                          <span className="float-md-end me-auto ">
                            <label class="switch" for="checkbox">
                              <input type="checkbox" id="checkbox" />
                              <div class="slider round"></div>
                            </label>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 mt-4 mt-md-0 panal-1  px-sm-0 px-4">
                      <p className="small-paragraph fw-500 color-16191e d-md-none d-block mb-2 pt-3">
                        :Plan Description
                      </p>
                      <p className="fs-16 color-16191E-7 pe-md-4 ps-xxl-5    mx-234  ">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer
                      </p>
                    </div>
                  </div>
                  <button className="border-0 cancel-subscription">
                    Cancel Subscription
                  </button>
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
