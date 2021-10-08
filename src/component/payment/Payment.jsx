import React from "react";
import { Container, Row } from "react-bootstrap";
import SubscriptionPlan from "./SubscriptionPlan";
import PaymentForm from "./PaymentForm";
import "./Paymentpage.css";

const Payment = () => {
  return (
    <>
      <Container className="max-w-1400 mt-5 mb-5">
        <Row className="justify-content-between">
          <SubscriptionPlan />
          <PaymentForm />
        </Row>
      </Container>
    </>
  );
};
export default Payment;
