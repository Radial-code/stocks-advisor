import React from "react";
import "../dashboardCss/Payment.css";
import DashboardDropDown from "./DashboardDropDown";
const UpdatePayment = ({ sideBarHandler, setSidebarActive, sidebarActive }) => {
  return (
    <div className="container my-5 my-xl-0">
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
      ></div>
      <section>
        <div className="row">
          <div className="col-12 dashboard">
            <div className="border-b-1  mb-3">
              <DashboardDropDown sideBarHandler={sideBarHandler} />
            </div>
          </div>
          <div className=" col-12 d-flex justify-content-end ">
            <div className="p-md-5 p-3 p-xxl-5 mx-1000 w-100 box">
              <h1 className="heading-stock mb-4 fs-sm-20">
                {" "}
                Update Payment Method
              </h1>
              <p className="news-heading-font pt-sm-5 border-bottom-1px fs-sm-20 ">
                Current Payment Details
              </p>
              <div className="row my-4">
                <div className="col-lg-6 col-12">
                  <div className="visa p-sm-4 p-10-17">
                    <p className="profile-heading pb-sm-3 border-bottom-1px fs-sm-20">
                      Visa/Master Card
                    </p>
                    <div>
                      <p className="fs-16 color-16191E-7 mb-2 ">
                        Jhone Doe
                        <span className="color-16191e fw-500 ms-3">
                          :Name On Card
                        </span>
                      </p>
                    </div>
                    <div className="d-flex mb-2 align-items-center">
                      <div className="fs-16    ">
                        <span className="color-16191e fw-500 ms-3 ">
                          Card Number:
                        </span>
                      </div>
                      <div>
                        <span className=" color-16191E-7 fs-16">
                          4242 4242 4242
                        </span>
                      </div>
                    </div>
                    <div className="d-flex mb-2 align-items-center">
                      <div className="fs-16    ">
                        <span className="color-16191e fw-500 ms-3 ">
                          :Expiry Date
                        </span>
                      </div>
                      <div>
                        <span className=" color-16191E-7 fs-16">
                          25/07/2025
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="update-btn mt-4 ">Change Method </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdatePayment;
