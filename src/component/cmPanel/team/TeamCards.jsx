import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cards from "./Cards";

const TeamCards = ({ sideBarHandler, setSidebarActive, sidebarActive }) => {
  return (
    <>
      <div className="container">
        <div
          onClick={() => setSidebarActive((preState) => !preState)}
          className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
        ></div>
        <div className="row">
          <div className="col-12">
            <div className="border-b-1 mt-5 content-manager mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <p className="heading-stock pr-15 fs-sm-20 mb-0">
                  Content Manager
                </p>
                <span className="cursor-pointer" onClick={sideBarHandler}>
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
          <Col className="d-flex justify-content-lg-end">
            <section className="user-panel-card w-xl-1000 p-4 mt-5 pt-5">
              <div className="d-flex justify-content-sm-between align-items-center flex-sm-row flex-column">
                <p className="heading-stock fs-sm-20 fs-sm-20">Team</p>
                <div>
                  <Link to="/content/manager/team/form" className="add-new-btn">
                    <button className="update-btn">Add Members</button>
                  </Link>
                </div>
              </div>
              <div className="h-calc-100vh-380 scroll-bar overflow-auto mt-5">
                <Cards />
              </div>
            </section>
          </Col>
        </div>
      </div>
    </>
  );
};

export default TeamCards;
