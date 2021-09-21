import React from "react";
import "../dashboardCss/Payment.css";
const UpdatePayment = ({ sideBarHandler, setSidebarActive, sidebarActive }) => {
  return (
    <div className="container my-5 my-xl-0">
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
      ></div>
      <section>
        <div className="row">
          <div className="col-12">
            <div className="border-b-1 content-manager-2 mb-3">
              <div className="d-flex justify-content-between">
                <p className="heading-stock pr-15 fs-sm-20">Dashboard</p>
                <span onClick={sideBarHandler}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </span>
              </div>
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
