import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Payment.css";
const PayMentPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xl={7}>
            <section className=" select-plan-payment">
              <p className="heading-stock">Selected Subscription Plan</p>
              <div className="d-flex justify-content-between payment-border pb-2">
                <p className="profile-heading">Plan-1</p>
                <p className="payment-page-amount">$299.99</p>
              </div>
              <p className="fs-xs fw-500 mt-3">:Description</p>
              <p className="stock-paragraph">
                Duis venenatis aliquot, Eros, non feugiat Tortor semper sed. In
                diam risus, efficitur Sit amet dolor vitae Finibus tristique
                Arcu finibus tristique Duis venenatis aliquot, Eros, non feugiat
                Tortor semper sed
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <select name="" id="" className="monthly-payment">
                  <option value="" defaultValue>
                    Monthly Payment
                  </option>
                  <option value="">Monthly Payment</option>
                  <option value="">Monthly Payment</option>
                  <option value="">Monthly Payment</option>
                  <option value="">Monthly Payment</option>
                </select>
                <p className="fs-xs fw-500">:Plan Type</p>
              </div>
              <p className="fs-xs fw-500 mt-4">:Benifits</p>
              <p className="stock-paragraph">
                Duis venenatis aliquot, Eros, non feugiat Tortor semper sed. In
                diam risus, efficitur Sit amet dolor vitae Finibus tristique
                Arcu finibus tristique
              </p>
            </section>
          </Col>
          <Col>
            <section>
              <p className="heading-stock">Payment</p>
              <div className=" d-flex align-items-center">
                <p className="stock-paragraph mb-0">
                  Use same information as in your profile{" "}
                </p>
                <span>
                  <input className="payment-checkbox" type="Checkbox" />
                </span>{" "}
              </div>
              <div className="form-input-payment mt-4 d-flex align-items-center">
                <input className="border-0 " type="text" placeholder="Name" />
              </div>
              <div className="form-input-payment mt-4 d-flex align-items-center">
                <input className="border-0 " type="text" placeholder="Email" />
              </div>
              <div className="form-input-payment mt-4 d-flex align-items-center">
                <input
                  className="border-0 "
                  type="number"
                  placeholder="Phone"
                />
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PayMentPage;
