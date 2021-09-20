import React from "react";

const Portfolio3 = ({ sideBarHandler, setSidebarActive, sidebarActive }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column">
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
      ></div>
      <div className="row">
        <div className="col-12">
          <div className="border-b-1 content-manager-2">
            <div className="d-flex justify-content-between">
              <p className="heading-stock pr-15">Portfolios</p>
              <span onClick={sideBarHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  fill="currentColor"
                  class="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <h1>No Data in This</h1>
        </div>
      </div>
    </div>
  );
};

export default Portfolio3;
