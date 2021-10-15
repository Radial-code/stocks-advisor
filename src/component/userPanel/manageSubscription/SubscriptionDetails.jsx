import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const SubscriptionDetails = () => {
  const myPlanDetails = useSelector((state) => state.list.myPlanDetails);
  return (
    <Col xs={12} className="d-flex justify-content-end ">
      <div className="w-xl-1000 box p-md-5 p-4">
        <h2 className="heading-stock fs-sm-20">Manage Subscription</h2>
        <div className="border-b-1 mt-md-5 mt-3">
          <p className="news-heading-font fs-sm-14">
            Current Subscription Info
          </p>
        </div>
        {myPlanDetails ? (
          <Row className="mt-5 justify-content-between">
            <Col
              lg={5}
              xs={12}
              className="d-flex justify-content-center d-lg-block"
            >
              <section className="plan-card-edituser p-4">
                <div className="d-flex justify-content-between border-b-1">
                  <p className="profile-heading fs-sm-16">
                    {myPlanDetails.title}
                  </p>
                  <p className="edituser-amount  fs-sm-16">
                    ${myPlanDetails.price}
                  </p>
                </div>
                <div className="d-flex mt-2">
                  <span className="fs-xs fw-500 pr-15 fs-sm-11">
                    Purchase Date :
                  </span>
                  <span className="stock-paragraph fs-sm-11">
                    {" "}
                    {myPlanDetails.createdAt}
                  </span>
                </div>
                <div className="d-flex justify-content-between mt-2 mb-2">
                  <div className="d-flex">
                    <span className="fs-xs fw-500 pr-15 fs-sm-11">
                      Auto Renew:
                    </span>

                    <span className="stock-paragraph fs-sm-11">
                      {myPlanDetails.expiresOn}
                    </span>
                  </div>
                  <div className="">
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

            <Col
              lg={6}
              xs={12}
              className="d-flex justify-content-center mt-5 mt-lg-0"
            >
              <section className="current-para">
                <p className="fs-14 fw-500 ">Plan Description:</p>

                <p className="stock-paragraph fs-sm-14">
                  {myPlanDetails.details}
                </p>
              </section>
            </Col>
            {/* 
            <Col xs={12} className="mt-5 d-flex justify-content-center mx-auto">
              <div className="cancel-change-btn">
                <button disabled className="cancel-btn fs-sm-14">
                  Cancel Plan
                </button>

                <button
                  disabled
                  className="update-btn-2 fs-sm-14  change-btn mr-15 mr-xs-0"
                >
                  Change Plan
                </button>
              </div>
            </Col> */}
          </Row>
        ) : (
          "You don't have any plan"
        )}
      </div>
    </Col>
  );
};
export default SubscriptionDetails;
