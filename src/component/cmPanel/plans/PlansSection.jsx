import React from "react";
import { Col } from "react-bootstrap";
import PlansForm from "./PlansForm";

function PlansSection({ sideBarHandler, setSidebarActive, sidebarActive }) {
  return (
    <div className="container">
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
      ></div>
      <div className="row ">
        <Col xs={12}>
          <div className="border-b-1 content-manager mb-3">
            <div className="d-flex justify-content-between">
              <p className="heading-stock pr-15 fs-sm-20">Content Manager</p>
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
        </Col>
        <PlansForm />
      </div>
    </div>
  );
}

export default PlansSection;
