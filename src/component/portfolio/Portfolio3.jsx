/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';

const Portfolio3 = ({ sideBarHandler, setSidebarActive, sidebarActive }) => (
  <div className="container">
    <div
      onClick={() => setSidebarActive((preState) => !preState)}
      className={`admin-overlay ${sidebarActive ? 'w-100vw-m' : ''}`}
    />
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
        <h1>No Data in This</h1>
      </div>
    </div>
  </div>
);

export default Portfolio3;
