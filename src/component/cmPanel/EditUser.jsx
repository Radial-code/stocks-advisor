import React, { useEffect, useState } from "react";
import { Container, Row, Col, FormGroup } from "react-bootstrap";
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
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";
import { updateUserDetailsAction } from "../../redux/action/userPanel/user";
import {
  getPlansListAction,
  plansUpgradeAction,
} from "../../redux/action/cmPanel/plans";
import Select from "react-select";

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  autoRenewalOfPlans: false,
  countryCode: "",
};
let detailsString = [];
const EditUser = ({ setSidebarActive, sidebarActive, match, history }) => {
  const countries = useSelector((state) => state.list.countries);
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState(false);
  const [userLoading, setUserLoading] = useState(false);
  const [addPlansLoading, setAddPlansLoading] = useState(false);
  const [updateUser, setUpdateUser] = useState(initialState);
  const [countryCode, setCountryCode] = useState();
  const { userId } = match.params;
  const userProfileDetails = useSelector(
    (state) => state.list.userProfileDetails
  );
  const userData = useSelector((state) => state.auth.userData);
  const planList = useSelector((state) => state.list.planList);
  const userPlanDetails = useSelector((state) => state.list.userPlanDetails);
  const { createdAt, expiresOn, details, price, title, planId } =
    userPlanDetails ? userPlanDetails : "";

  // DISPATCH USER PROFILE DETAILS API HERE
  useEffect(() => {
    dispatch(getUserProfileDetailsAction(userId, setLoading));
    return () => {
      dispatch(removeUserProfileDetailsAction());
    };
  }, []);

  useEffect(() => {
    if (!!userProfileDetails) {
      setUpdateUser(userProfileDetails);
      setCountryCode({
        value: userProfileDetails.countryCode,
        label: userProfileDetails.countryCode,
      });
    }
  }, [userProfileDetails]);

  const updateAutoCard = (e) => {
    setUpdateUser({
      ...updateUser,
      autoRenewalOfPlans: e.target.checked,
    });
    const data = {
      autoRenewalOfPlans: e.target.checked,
    };
    dispatch(updateUserDetailsAction(data));
  };

  const UpdateUserFunction = () => {
    dispatch(userUpdateByAdminAction(userId, updateUser, setUserLoading));
  };
  // DISPATCH USER PLAN DETAILS API HERE
  useEffect(() => {
    if (userProfileDetails.isPaidPlan) {
      dispatch(getUserPlanDetailAction(userId, setLoading));
    }

    return () => {
      if (userProfileDetails.isPaidPlan) {
        dispatch(removeUserPlanDetailsAction());
      }
    };
  }, [userProfileDetails.isPaidPlan]);

  useEffect(() => {
    detailsString = details && details.split(",");
  }, [details]);

  const updatePlanGetUserList = () => {
    const limit = 10;
    const page = 0;
    dispatch(getPlansListAction(setLoadingPlan, page, limit));
  };

  const setUserUpdateData = (value) => {
    const refresh = false;
    dispatch(
      plansUpgradeAction(
        { planId: value._id, userId: userData._id },
        setAddPlansLoading,
        history,
        refresh
      )
    );
  };

  const handleChange = (selectedOption) => {
    const codeCountry = {
      value: selectedOption.value,
      label: selectedOption.value,
    };
    setUpdateUser({
      ...updateUser,
      countryCode: codeCountry.value,
    });

    setCountryCode(codeCountry);
  };

  const countriesCode =
    countries && countries.length > 0
      ? countries.map((item) => {
          return {
            value: item.dial_code,
            label: `${item.name}(${item.dial_code})`,
          };
        })
      : "";

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
                {updateUser.firstName}&nbsp;
                {updateUser.lastName}
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
                  <input
                    className="input-edit-user edit-user-input-style "
                    placeholder="username"
                    value={`${updateUser.firstName}`}
                    type="text"
                    onChange={(e) => {
                      setUpdateUser({
                        ...updateUser,
                        firstName: e.target.value,
                      });
                    }}
                  />
                  <input
                    className="input-edit-user edit-user-input-style my-2"
                    placeholder="lastname"
                    value={`${updateUser.lastName}`}
                    type="text"
                    onChange={(e) => {
                      setUpdateUser({
                        ...updateUser,
                        lastName: e.target.value,
                      });
                    }}
                  />
                  <div
                    className={`d-flex my-2 ${
                      layoutClickChanger ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`${
                        layoutClickChanger
                          ? "col-sm-5  pe-0 col-6"
                          : "col-sm-5 ps-0 col-6"
                      } h-100`}
                    >
                      <FormGroup className="edit-user-select">
                        <Select
                          value={countryCode}
                          onChange={handleChange}
                          options={countriesCode}
                        />
                      </FormGroup>
                      {/* <div className="contact-field">
                        <div
                          aria-controls="simple-menu"
                          aria-haspopup="true"
                          onClick={handleClick}
                          className="contact-border "
                        >
                          <span className="contact-text">
                            {updateUser.countryCode
                              ? updateUser.countryCode
                              : "N/A"}
                          </span>
                        </div>{" "}
                        <select
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          {countries &&
                            countries.length &&
                            countries.map((value, i) => {
                              return (
                                <MenuItem
                                  onChange={(e) => {
                                    setUpdateUser({
                                      ...updateUser,
                                      countryCode: e.target.value,
                                    });
                                  }}
                                  value={value.dial_code}
                                  onClick={handleClose}
                                >
                                  {value.name}({value.dial_code})
                                </MenuItem>
                              );
                            })}
                        </select>
                      </div> */}
                    </div>
                    <input
                      className="input-edit-user edit-user-input-style"
                      placeholder={updateUser.phone}
                      value={updateUser.phone}
                      type="number"
                      onChange={(e) => {
                        setUpdateUser({
                          ...updateUser,
                          phone: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <input
                    className="input-edit-user edit-user-input-style"
                    placeholder="your-email@gmail.com"
                    value={updateUser.email}
                    onChange={(e) => {
                      setUpdateUser({
                        ...updateUser,
                        email: e.target.value,
                      });
                    }}
                    type="email"
                  />
                </Col>

                {userProfileDetails.isPaidPlan ? (
                  <Col xl={6} xs={12}>
                    <Row className="pe-xl-4">
                      <Col className="mt-lg-0 ">
                        <section className="current-para mb-4 py-4 m-xl-0 mt-3">
                          <p className="profile-heading fs-sm-16">
                            {getValueOf("Plan Description")}
                          </p>
                          {detailsString &&
                            !!detailsString.length &&
                            detailsString.map((item, index) => {
                              return (
                                <p
                                  className="profile-para fs-sm-14"
                                  key={index}
                                >
                                  {item}
                                </p>
                              );
                            })}
                        </section>
                      </Col>
                    </Row>
                  </Col>
                ) : (
                  ""
                )}
              </Row>
            )}
            {loading ? (
              <div className="d-flex justify-content-center align-items-center w-100 h-300">
                <BubblesLoader />
              </div>
            ) : (
              <>
                {userProfileDetails.isPaidPlan ? (
                  <Row>
                    <Col xs={12} className="d-flex pe-xl-5 flex-column my-3">
                      <section className="plan-card-edituser p-3">
                        <div
                          className={`${
                            layoutClickChanger ? "" : "flex-row-reverse"
                          }  d-flex justify-content-between border-b-1 `}
                        >
                          <p className="edituser-amount d-none d-sm-block">
                            ${price}
                          </p>
                          <p className="profile-heading fs-sm-16">{title}</p>
                          <p className="edituser-amount d-sm-none fs-sm-16">
                            ${price}
                          </p>
                        </div>
                        <div
                          className={`${
                            layoutClickChanger ? "" : "flex-row-reverse"
                          }  d-flex justify-content-between  mt-2`}
                        >
                          <span className="stock-paragraph ps-3 ps-lg-0 ps-xl-1 fs-sm-11">
                            {createdAt && createdAt.split(",")[0]}
                          </span>
                          {layoutClickChanger ? (
                            <span className="fs-xs fw-500 pr-15 fs-sm-11">
                              : Purchase Date
                            </span>
                          ) : (
                            <span className="fs-xs fw-500 pr-15 fs-sm-11">
                              Purchase Date :
                            </span>
                          )}
                        </div>
                        <div
                          className={`${
                            layoutClickChanger ? "" : "flex-row-reverse"
                          }  d-flex justify-content-between  mt-2`}
                        >
                          <span className="stock-paragraph fs-sm-11">
                            {createdAt && expiresOn.split(",")[0]}
                          </span>
                          {layoutClickChanger ? (
                            <span className="fs-xs fw-500 pr-15 fs-sm-11">
                              : Expiry Date
                            </span>
                          ) : (
                            <span className="fs-xs fw-500 pr-15 fs-sm-11">
                              Expiry Date :
                            </span>
                          )}
                        </div>
                        <div
                          className={`${
                            layoutClickChanger ? "" : "flex-row-reverse"
                          }  d-flex justify-content-between  mt-2`}
                        >
                          <div>
                            <span className="float-md-end me-auto ">
                              <label className="switch-2" for="checkbox-2">
                                <input
                                  type="checkbox"
                                  id="checkbox-2"
                                  checked={updateUser.autoRenewalOfPlans}
                                  onChange={(e) => updateAutoCard(e)}
                                />
                                <div className="slider-2 round"></div>
                              </label>
                            </span>
                          </div>
                          {layoutClickChanger ? (
                            <span className="fs-xs fw-500 pr-15 fs-sm-11">
                              : Auto Renew
                            </span>
                          ) : (
                            <span className="fs-xs fw-500 pr-15 fs-sm-11">
                              Auto Renew :
                            </span>
                          )}
                        </div>
                        <div className="d-sm-none">
                          <span className="float-md-end me-auto ">
                            <label className="switch-2" for="checkbox-2">
                              <input
                                type="checkbox"
                                id="checkbox-2"
                                checked={updateUser.autoRenewalOfPlans}
                                onChange={(e) => updateAutoCard(e)}
                              />

                              <div className="slider-2 round"></div>
                            </label>
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => updatePlanGetUserList()}
                          className="update-btn-2 my-3"
                          disabled={loadingPlan}
                        >
                          {loadingPlan ? <Loader /> : "Change Plan"}
                        </button>{" "}
                        {planList && !!planList.length
                          ? planList.map((val) => {
                              return (
                                <>
                                  {val.price === price ? (
                                    <>
                                      {val._id !== planId ? (
                                        <div className="cursor-pointer pt-1 update-plan">
                                          <input
                                            className="cursor-pointer "
                                            type="radio"
                                            id="html"
                                            name="fav_language"
                                            onChange={() =>
                                              setUserUpdateData(val)
                                            }
                                            value="JavaScript"
                                          />
                                          <span className="px-1">
                                            {val.title}
                                          </span>
                                        </div>
                                      ) : (
                                        ""
                                      )}
                                    </>
                                  ) : null}
                                </>
                              );
                            })
                          : null}
                      </section>
                    </Col>
                  </Row>
                ) : (
                  ""
                )}
              </>
            )}
            <button
              className="update-btn-2 mt-3"
              disabled={userLoading}
              onClick={() => UpdateUserFunction()}
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
