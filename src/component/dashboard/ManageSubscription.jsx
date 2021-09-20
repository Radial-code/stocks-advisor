import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ManageSubscription = ({
  sideBarHandler,
  setSidebarActive,
  sidebarActive,
}) => {
  return (
    <>
      <Container>
        <div
          onClick={() => setSidebarActive((preState) => !preState)}
          className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
        ></div>
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
                        {" "}
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
                          <label class="switch-2" for="checkbox-2">
                            <input type="checkbox" id="checkbox-2" />
                            <div class="slider-2 round"></div>
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
};

export default ManageSubscription;
