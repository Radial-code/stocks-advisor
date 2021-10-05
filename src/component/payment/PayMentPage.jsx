import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Paymentpage.css';

const PayMentPage = () => (
  <>
    <Container className="max-w-1400 mt-5">
      <Row className="justify-content-between">
        <Col lg={7} className="d-flex justify-content-center">
          <section className=" select-plan-payment p-lg-4 p-3">
            <p className="heading-stock fs-sm-20 d-sm-flex justify-content-center d-lg-block">
              Selected Subscription Plan
            </p>
            <div className="d-flex justify-content-between payment-border pb-2">
              <p className="profile-heading fs-sm-16">Plan-1</p>
              <p className="payment-page-amount">$299.99</p>
            </div>
            <p className="fs-xs fw-500 mt-3 fs-sm-14">:Description</p>
            <p className="stock-paragraph fs-sm-14">
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
              <p className="fs-xs fw-500 fs-sm-14">:Plan Type</p>
            </div>
            <p className="fs-xs fw-500 mt-4 fs-sm-14">:Benifits</p>
            <p className="stock-paragraph fs-sm-16 max-w-sm-263">
              Duis venenatis aliquot, Eros, non feugiat Tortor semper sed. In
              diam risus, efficitur Sit amet dolor vitae Finibus tristique
              Arcu finibus tristique
            </p>
          </section>
        </Col>
        <Col
          lg={5}
          className="mt-5 mt-xl-0 d-flex d-lg-block justify-content-center"
        >
          <section className="card-payment p-4">
            <p className="heading-stock  d-sm-flex fs-sm-14 justify-content-center d-lg-block">
              Payment
            </p>
            <div className=" d-flex align-items-center ">
              <p className="stock-paragraph mb-0 fs-sm-12">
                Use same information as in your profile
                {' '}
              </p>
              <span>
                <input className="payment-checkbox" type="Checkbox" />
              </span>
              {' '}
            </div>
            <div className="form-input-payment mt-4 d-flex align-items-center">
              <input className="border-0 " type="text" placeholder="Name" />
            </div>
            <div className="form-input-payment mt-4 d-flex align-items-center">
              <input className="border-0 " type="text" placeholder="Email" />
            </div>
            <div className="form-input-payment mt-4 d-flex align-items-center">
              <input
                className="border-0 arrow-none"
                type="number"
                placeholder="Phone"
              />
            </div>
            <div className="d-flex justify-content-between">
              {/* <img src={img_2} alt='' />
                <img src={img_1} alt='' /> */}
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  </>
);

export default PayMentPage;
