import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserPlanDetailAction,
  getUserProfileDetailsAction,
  removeUserPlanDetailsAction,
  removeUserProfileDetailsAction,
} from "../../redux/action/cmPanel/stock";
import { withRouter } from "react-router";
import BubblesLoader from "../common/BubblesLoader";
import "../cmPanelCss/userEdit.css";

const EditUser = ({
  sideBarHandler,
  setSidebarActive,
  sidebarActive,
  match,
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { userId } = match.params;

  // GET DATA FROM REDUX
  const userProfileDetails = useSelector(
    (state) => state.list.userProfileDetails
  );
  const userPlanDetails = useSelector((state) => state.list.userPlanDetails);
  const { email, firstName, lastName, phone, isPaidPlan } = userProfileDetails;
  const { createdAt, expiresOn, details, price, title } = userPlanDetails
    ? userPlanDetails
    : "";
  // DISPATCH USER PROFILE DETAILS API HERE
  useEffect(() => {
    dispatch(getUserProfileDetailsAction(userId, setLoading));
    return () => {
      dispatch(removeUserProfileDetailsAction());
    };
  }, []);

  // DISPATCH USER PLAN DETAILS API HERE
  useEffect(() => {
    if (isPaidPlan) {
      dispatch(getUserPlanDetailAction(userId, setLoading));
    }

    return () => {
      if (isPaidPlan) {
        dispatch(removeUserPlanDetailsAction());
      }
    };
  }, [isPaidPlan]);
  console.log(createdAt && createdAt.split(","));
  return (
    <Container>
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
      ></div>
      <Row>
        <Col xs={12}>
          <div className="border-b-1 content-manager mb-3">
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
        </Col>
        <Col className="d-flex justify-content-sm-end justify-content-center ">
          <section className="edituser-card p-3 p-sm-5 mt-5">
            <div className="mt-4 d-flex flex-sm-row flex-column justify-content-sm-between align-items-center">
              <p className="heading-stock fs-sm-20">
                {firstName}&nbsp;{lastName}
              </p>
              <Link to="/content/manager/users">
                <button className="update-btn-2 ">Back</button>
              </Link>
            </div>

            <div className="border-b-1 mt-5">
              <p className="fs-22 fw-500 fs-sm-14">Contact Info</p>
            </div>

            {loading ? (
              <div className="d-flex justify-content-center align-items-center w-100 h-300">
                <BubblesLoader />
              </div>
            ) : (
              <Row>
                <Col lg={6} xs={12}>
                  <Row className="mt-4">
                    <Col lg={6}>
                      <div className="edit-user">
                        <input
                          className="input-edit-user"
                          placeholder={`${firstName} ${lastName}`}
                          type="text"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6} className="mt-3">
                      <div className="edit-user">
                        <input
                          className="input-edit-user"
                          placeholder={phone}
                          type="number"
                        />
                      </div>
                    </Col>
                  </Row>{" "}
                  <Row>
                    <Col lg={6} className="mt-3 ">
                      <div className="edit-user">
                        <input
                          className="input-edit-user"
                          placeholder={email}
                          type="email"
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>

                {isPaidPlan ? (
                  <Col lg={6} xs={12}>
                    <Row>
                      <Col className=" mt-5 mt-lg-0 ">
                        <section className="current-para my-4">
                          <div className="d-none">
                            <p className="fs-14 fw-500 ">:Plan Description</p>
                          </div>
                          <p className="stock-paragraph fs-sm-14">{details}</p>
                        </section>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        lg={5}
                        xs={12}
                        className="d-flex justify-content-center d-lg-block"
                      >
                        <section className="plan-card-edituser p-4">
                          <div className="d-flex justify-content-between border-b-1">
                            <p className="edituser-amount d-none d-sm-block">
                              ${price}
                            </p>
                            <p className="profile-heading fs-sm-16">{title}</p>
                            <p className="edituser-amount d-sm-none fs-sm-16">
                              ${price}
                            </p>
                          </div>
                          <div className="d-flex justify-content-sm-end mt-2">
                            <span className="stock-paragraph fs-sm-11">
                              {createdAt && createdAt.split(",")[0]}
                            </span>
                            <span className="fs-xs fw-500 pr-15 fs-sm-11">
                              :Purchase Date
                            </span>
                          </div>
                          <div className="d-flex justify-content-sm-end mt-2">
                            <span className="stock-paragraph fs-sm-11">
                              {createdAt && expiresOn.split(",")[0]}
                            </span>
                            <span className="fs-xs fw-500 pr-15 fs-sm-11">
                              :Expiry Date
                            </span>
                          </div>
                          <div className="d-flex justify-content-between mt-2 mb-2">
                            <div className="d-none d-sm-block">
                              <span className="float-md-end me-auto ">
                                <label className="switch" for="checkbox">
                                  <input type="checkbox" id="checkbox" />
                                  <div className="slider round"></div>
                                </label>
                              </span>
                            </div>
                            <div className="d-flex justify-content-end">
                              <span className="stock-paragraph fs-sm-11">
                                Enable
                              </span>
                              <span className="fs-xs fw-500 pr-15 fs-sm-11">
                                :Auto Renew
                              </span>
                            </div>
                            <div className="d-sm-none">
                              <span className="float-md-end me-auto ">
                                <label className="switch-2" for="checkbox-2">
                                  <input type="checkbox" id="checkbox-2" />
                                  <div className="slider-2 round"></div>
                                </label>
                              </span>
                            </div>
                          </div>
                        </section>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xs={12}
                        className="mt-5 d-flex justify-content-center d-sm-block"
                      >
                        <button className="update-btn fs-sm-14">
                          Cancel Subscription
                        </button>
                      </Col>
                    </Row>
                  </Col>
                ) : (
                  ""
                )}
              </Row>
            )}

            {/* asdfghjkl */}

            {/* <Row className="mt-5">
              <Col lg={6}>
                <div className="edit-user">
                  <input
                    className="input-edit-user"
                    placeholder="Jhone Doe"
                    type="text"
                  />
                </div>
              </Col>
              <Col
                lg={6}
                xs={12}
                className="d-flex justify-content-center mt-5 mt-lg-0"
              >
                <section className="current-para">
                  <div className="d-none">
                    <p className="fs-14 fw-500 ">:Plan Description</p>
                  </div>
                  <p className="stock-paragraph fs-sm-14">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                  </p>
                </section>
              </Col>
            </Row>
            <Row>
              <Col lg={6} className="mt-3 ">
                <div className="edit-user">
                  <input
                    className="input-edit-user"
                    placeholder="Jhondoe@gmail.com"
                    type="email"
                  />
                </div>
              </Col>
              <Col
                lg={5}
                xs={12}
                className="d-flex justify-content-center d-lg-block"
              >
                <section className="plan-card-edituser p-4">
                  <div className="d-flex justify-content-between border-b-1">
                    <p className="edituser-amount d-none d-sm-block">$299.99</p>
                    <p className="profile-heading fs-sm-16">Plan-1</p>
                    <p className="edituser-amount d-sm-none fs-sm-16">
                      $299.99
                    </p>
                  </div>
                  <div className="d-flex justify-content-sm-end mt-2">
                    <span className="stock-paragraph fs-sm-11">17/07/2021</span>
                    <span className="fs-xs fw-500 pr-15 fs-sm-11">
                      :Purchase Date
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mt-2 mb-2">
                    <div className="d-none d-sm-block">
                      <span className="float-md-end me-auto ">
                        <label className="switch" for="checkbox">
                          <input type="checkbox" id="checkbox" />
                          <div className="slider round"></div>
                        </label>
                      </span>
                    </div>
                    <div className="d-flex justify-content-end">
                      <span className="stock-paragraph fs-sm-11">Enable</span>
                      <span className="fs-xs fw-500 pr-15 fs-sm-11">
                        :Auto Renew
                      </span>
                    </div>
                    <div className="d-sm-none">
                      <span className="float-md-end me-auto ">
                        <label className="switch-2" for="checkbox-2">
                          <input type="checkbox" id="checkbox-2" />
                          <div className="slider-2 round"></div>
                        </label>
                      </span>
                    </div>
                  </div>
                </section>
              </Col>
            </Row>
            <Row>
              <Col lg={6} className="mt-3">
                <div className="edit-user">
                  <input
                    className="input-edit-user"
                    placeholder="1234567890"
                    type="number"
                  />
                </div>
              </Col>
            </Row> */}
            {/* <div className="d-flex justify-content-center d-sm-block w-100">
              <button className="update-btn mt-5 fs-sm-16">Udpdate</button>
            </div>
            <div className="border-b-1 mt-5">
              <p className="news-heading-font fs-sm-14">
                Current Subscription Info
              </p>
            </div> */}
            {/* <Row className="mt-5 justify-content-between">
              <Col
                xs={12}
                className="mt-5 d-flex justify-content-center d-sm-block"
              >
                <button className="update-btn fs-sm-14">
                  Cancel Subscription
                </button>
              </Col>
            </Row> */}
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(EditUser);
