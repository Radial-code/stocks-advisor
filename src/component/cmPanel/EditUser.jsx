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
import { userUpdateByAdminAction } from "../../redux/action/portfolios";
import Loader from "../common/Loader";

let data = {};
const EditUser = ({ setSidebarActive, sidebarActive, match }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(false);
  const [updateUser, setUpdateUser] = useState({
    firstName: "",
    lastName: "",
  });
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

  const UpdateUser = () => {
    data = {
      firstName: updateUser.firstName === "" ? firstName : updateUser.firstName,
      lastName: updateUser.lastName === "" ? lastName : updateUser.lastName,
    };
    dispatch(userUpdateByAdminAction(userId, data, setUserLoading));
  };
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
  data = {
    firstName: updateUser.firstName === "" ? firstName : updateUser.firstName,
    lastName: updateUser.lastName === "" ? lastName : updateUser.lastName,
  };
  return (
    <Container>
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
      ></div>
      <Row>
        <Col xs={12} className="d-flex  w-100 ">
          <section className="shadow bg-white w-1000 w-100  p-3 p-sm-5 ">
            <div className="mt-4 d-flex flex-sm-row flex-column justify-content-sm-between align-items-center">
              <p className="heading-stock fs-sm-20">
                {data.firstName}&nbsp;{data.lastName}
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
                <Col xl={6} xs={12}>
                  <Row className="mt-4">
                    <Col>
                      <div className="edit-user">
                        <input
                          className="input-edit-user"
                          placeholder={`${firstName} `}
                          type="text"
                          onChange={(e) => {
                            setUpdateUser({
                              ...updateUser,
                              firstName: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col>
                      <div className="edit-user">
                        <input
                          className="input-edit-user"
                          placeholder={` ${lastName}`}
                          type="text"
                          onChange={(e) => {
                            setUpdateUser({
                              ...updateUser,
                              lastName: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mt-3">
                      <div className="edit-user  bg-dark-grey">
                        <input
                          className="input-edit-user  bg-dark-grey"
                          placeholder={phone}
                          type="number"
                          disabled={true}
                        />
                      </div>
                    </Col>
                  </Row>{" "}
                  <Row>
                    <Col className="mt-3 ">
                      <div className="edit-user  bg-dark-grey">
                        <input
                          className="input-edit-user  bg-dark-grey"
                          placeholder={email}
                          disabled={true}
                          type="email"
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>

                {isPaidPlan ? (
                  <Col xl={6} xs={12}>
                    <Row className="pe-xl-4">
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
                      <Col xs={12} className="d-flex pe-xl-5 flex-column">
                        <section className="plan-card-edituser p-3">
                          <div className="d-flex justify-content-between border-b-1">
                            <p className="edituser-amount d-none d-sm-block">
                              ${price}
                            </p>
                            <p className="profile-heading fs-sm-16">{title}</p>
                            <p className="edituser-amount d-sm-none fs-sm-16">
                              ${price}
                            </p>
                          </div>
                          <div className="d-flex justify-content-between  mt-2">
                            <span className="stock-paragraph ps-3 ps-lg-0 ps-xl-1 fs-sm-11">
                              {createdAt && createdAt.split(",")[0]}
                            </span>
                            <span className="fs-xs fw-500 pr-15 fs-sm-11">
                              :Purchase Date
                            </span>
                          </div>
                          <div className="d-flex justify-content-between mt-2">
                            <span className="stock-paragraph fs-sm-11">
                              {createdAt && expiresOn.split(",")[0]}
                            </span>
                            <span className="fs-xs fw-500 pr-15 fs-sm-11">
                              :Expiry Date
                            </span>
                          </div>

                          <div className="d-flex justify-content-between  mt-2 mb-2">
                            <span className="stock-paragraph fs-sm-11">
                              Enable
                            </span>
                            <span className="fs-xs fw-500 pr-15 fs-sm-11">
                              :Auto Renew
                            </span>
                          </div>
                          {/* <div className="d-sm-none">
                              <span className="float-md-end me-auto ">
                                <label className="switch-2" for="checkbox-2">
                                  <input type="checkbox" id="checkbox-2" />
                                  <div className="slider-2 round"></div>
                                </label>
                              </span>
                            </div> */}
                        </section>
                      </Col>
                    </Row>
                  </Col>
                ) : (
                  ""
                )}
              </Row>
            )}
            <button
              className="update-btn-2 mt-3"
              disabled={userLoading}
              onClick={() => UpdateUser()}
            >
              {userLoading ? <Loader /> : "Update"}
            </button>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(EditUser);
