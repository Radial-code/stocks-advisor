import React, { useState } from "react";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import FoundImg from "../../../assets/img/notfound.png";
import { updateUserDetailsAction } from "../../../redux/action/userPanel/user";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";

const initialState = {
  autoRenewalOfPlans: false,
};

let detailsString;

const SubscriptionDetails = () => {
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const myPlanDetails = useSelector((state) => state.list.myPlanDetails);
  const autoRenewal = useSelector((state) => state.auth.userData);
  const [detailsData, setDetailsData] = useState(false);
  const [autoRenewalOfPlans, setAutoRenewalOfPlans] = useState(initialState);

  const updateAutoCard = (e) => {
    setAutoRenewalOfPlans(e.target.checked);
    const data = {
      autoRenewalOfPlans: e.target.checked,
    };
    dispatch(updateUserDetailsAction(data));
  };

  useEffect(() => {
    if (myPlanDetails.details) {
      detailsString = myPlanDetails.details && myPlanDetails.details.split(",");
      setDetailsData(detailsString);
    }
  }, [myPlanDetails]);

  useEffect(() => {
    if (autoRenewal) {
      setAutoRenewalOfPlans(autoRenewal);
    }
  }, [autoRenewal]);

  return (
    <Col xs={12} className="d-flex justify-content-end flex-column">
      <div className="w-xl-1000 box p-md-4  h-100">
        <h2 className="heading-stock fs-sm-20">
          {getValueOf("Manage Subscription")}
        </h2>
        <div className="border-b-1 mt-md-5 mt-3">
          <p className="news-heading-font fs-sm-14">
            {getValueOf("Current Subscription Info")}
          </p>
        </div>
        {!!myPlanDetails && !!myPlanDetails.title ? (
          <Row className="mt-5 ">
            <Col xl={12} xs={12}>
              <section className="plan-card-edituser p-3">
                <div className="d-flex justify-content-between border-b-1">
                  <p className="profile-heading fs-sm-16 ">
                    {myPlanDetails.title}
                  </p>
                  <p className="edituser-amount  fs-sm-16">
                    ${myPlanDetails.price}
                  </p>
                </div>
                <div className="d-flex flex-sm-row flex-column mt-2">
                  <span className="fs-xs fw-500 pr-15 fs-sm-11">
                    {getValueOf("Purchase Date")}:
                  </span>
                  <span className="stock-paragraph fs-sm-11">
                    {myPlanDetails.createdAt}
                  </span>
                </div>
                <div className="d-flex justify-content-between mt-2 mb-4">
                  <div className="d-flex flex-sm-row flex-column">
                    <span className="fs-xs fw-500 pr-15 fs-sm-11">
                      {getValueOf("Expired Date")} :
                    </span>

                    <span className="stock-paragraph fs-sm-11 margin-left-auto">
                      {myPlanDetails.expiresOn}
                    </span>
                  </div>
                </div>
                <div className="pb-4">
                  <span
                    className={`${
                      layoutClickChanger ? "float-end" : " float-start"
                    }  me-auto`}
                  >
                    <div className="d-flex flex-sm-row flex-column ">
                      <span className="fs-xs fw-500 pr-15 fs-sm-11 ">
                        {getValueOf("Auto Renew")}:
                      </span>

                      <label
                        className="switch-2 mx-2 margin-left-auto"
                        for="checkbox-2"
                      >
                        <input
                          type="checkbox"
                          id="checkbox-2"
                          checked={autoRenewalOfPlans.autoRenewalOfPlans}
                          onChange={(e) => updateAutoCard(e)}
                        />
                        <div className="slider-2 round "></div>
                      </label>
                    </div>
                  </span>
                </div>
              </section>
            </Col>

            <Col
              xl={12}
              xs={12}
              ss={12}
              className="d-flex  mt-5 mt-xl-0 mt-3 pt-3"
            >
              <section className="current-para">
                <p className="fs-14 fw-500 ">
                  {layoutClickChanger ? (
                    <> : {getValueOf("Plan Description")}</>
                  ) : (
                    <> {getValueOf("Plan Description")} :</>
                  )}
                </p>
                <p className="stock-paragraph fs-sm-14 ">
                  {detailsString &&
                    !!detailsString.length &&
                    detailsString.map((item, index) => {
                      return (
                        <p className="profile-para fs-sm-14" key={index}>
                          {item}
                        </p>
                      );
                    })}
                </p>
              </section>
            </Col>
          </Row>
        ) : (
          <img
            className="not-found-img mx-auto d-block"
            src={FoundImg}
            alt=""
          />
        )}
      </div>
    </Col>
  );
};
export default SubscriptionDetails;
