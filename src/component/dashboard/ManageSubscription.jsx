/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ManageSubscription = ({
  sideBarHandler,
  setSidebarActive,
  sidebarActive,
}) => (
  <>
    <Container>
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? 'w-100vw-m' : ''}`}
      />
      <Row>
        <Col xs={12}>
          <div className="border-b-1 content-manager-2 mb-3">
            <div className="d-flex justify-content-between">
              <p className="heading-stock pr-15">Dashboard</p>
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
        <Col xs={12} className="d-flex justify-content-end ">
          <div className="w-xl-1000 box p-md-5 p-4">
            <h2 className="heading-stock">Manage Subscription</h2>
            <div className="border-b-1 mt-5">
              <p className="news-heading-font fs-sm-14">
                Current Subscription Info
              </p>
            </div>
            <Row className="mt-5 justify-content-between">
              <Col
                lg={5}
                xs={12}
                className="d-flex justify-content-center d-lg-block"
              >
                <section className="plan-card-edituser p-4">
                  <div className="d-flex justify-content-between border-b-1">
                    <p className="profile-heading fs-sm-16">Plan-1</p>
                    <p className="edituser-amount  fs-sm-16">$299.99</p>
                  </div>
                  <div className="d-flex mt-2">
                    <span className="fs-xs fw-500 pr-15 fs-sm-11">
                      Purchase Date :
                    </span>
                    <span className="stock-paragraph fs-sm-11">
                      {' '}
                      17/07/2021
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mt-2 mb-2">
                    <div className="d-flex">
                      <span className="fs-xs fw-500 pr-15 fs-sm-11">
                        Auto Renew:
                      </span>

                      <span className="stock-paragraph fs-sm-11">Enable</span>
                    </div>
                    <div className="">
                      <span className="float-md-end me-auto ">
                        <label className="switch-2" htmlFor="checkbox-2">
                          <input type="checkbox" id="checkbox-2" />
                          <div className="slider-2 round" />
                        </label>
                      </span>
                    </div>
                  </div>
                </section>
              </Col>

              <Col
                lg={6}
                xs={12}
                className="d-flex justify-content-center mt-5 mt-lg-0"
              >
                <section className="current-para">
                  <p className="fs-14 fw-500 ">:Plan Description</p>

                  <p className="stock-paragraph fs-sm-14">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                  </p>
                </section>
              </Col>

              <Col
                xs={12}
                className="mt-5 d-flex justify-content-center d-sm-block"
              >
                <button className="cancel-btn fs-sm-14 ">Cancel Plan</button>

                <button className="update-btn fs-sm-14 mr-15">
                  Change Plan
                </button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  </>
);

export default ManageSubscription;
