import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const OurPlans = ({ homepage }) => {
  console.log(homepage);
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="d-flex  justify-content-center">
            <p
              className={`subscription-plans ${homepage ? "text-white" : ""} `}
            >
              Subscription Plans
            </p>
          </Col>

          <div className="row mt-5 pt-5">
            <Col
              xl={4}
              md={6}
              className={` ${
                homepage ? "down-animation" : ""
              } d-flex justify-content-center mt-5 mt-md-0`}
            >
              <section className="bg-card-plan">
                <p className="plan-card d-flex justify-content-center pt-5">
                  Plan - 2
                </p>
                <div className="card-amount text-white d-flex justify-content-center align-items-center p-9-0 mt-4">
                  <p className="amount-card-month align-items-center d-flex  mb-0">
                    <span className="d-none d-sm-block month">month/</span>

                    <span> 299.99 $</span>
                  </p>
                </div>
                <p className="card-paragraph  mt-4">
                  Duis venenatis aliquet Eros, non feugiat Tortor semper sed. In
                  diam risus, efficitur Sit amet dolor vitae Finibus tristique
                  Arcu finibus tristique
                </p>
                <div className="d-flex justify-content-center mt-5 pb-5">
                  <button className="join-now-btn text-white">Join Now</button>
                </div>
              </section>
            </Col>

            <Col
              xl={4}
              md={6}
              className={` ${
                homepage ? "down-animation" : ""
              } d-flex justify-content-center mt-5 mt-md-0`}
            >
              <section className="bg-card-plan">
                <p className="plan-card d-flex justify-content-center pt-5">
                  Plan - 2
                </p>
                <div className="card-amount text-white d-flex justify-content-center align-items-center p-9-0 mt-4">
                  <p className="amount-card-month align-items-center d-flex  mb-0">
                    <span className="d-none d-sm-block month">month/</span>

                    <span> 299.99 $</span>
                  </p>
                </div>
                <p className="card-paragraph  mt-4">
                  Duis venenatis aliquet Eros, non feugiat Tortor semper sed. In
                  diam risus, efficitur Sit amet dolor vitae Finibus tristique
                  Arcu finibus tristique
                </p>
                <div className="d-flex justify-content-center mt-5 pb-5">
                  <button className="join-now-btn text-white">Join Now</button>
                </div>
              </section>
            </Col>

            <Col
              xl={4}
              lg={12}
              className={` ${
                homepage ? "down-animation" : ""
              } d-flex justify-content-center mt-5 mt-md-0`}
            >
              <section className="bg-card-plan">
                <p className="plan-card d-flex justify-content-center pt-5">
                  Plan - 1
                </p>
                <div className="card-amount text-white d-flex justify-content-center align-items-center p-9-0 mt-4">
                  <p className="amount-card-month align-items-center d-flex  mb-0">
                    <span className="d-none d-sm-block month">month/</span>

                    <span> 299.99 $</span>
                  </p>
                </div>
                <p className="card-paragraph  mt-4">
                  Duis venenatis aliquet Eros, non feugiat Tortor semper sed. In
                  diam risus, efficitur Sit amet dolor vitae Finibus tristique
                  Arcu finibus tristique
                </p>
                <div className="d-flex justify-content-center mt-5 pb-5">
                  <button className="join-now-btn text-white">Join Now</button>
                </div>
              </section>
            </Col>
          </div>

          {!homepage ? (
            <Col xs={12} className="d-flex justify-content-center mt-5">
              <button className="sing-up-btn text-white">
                Sign up for Free
              </button>
            </Col>
          ) : (
            ""
          )}
        </Row>
      </Container>
    </>
  );
};

export default OurPlans;
