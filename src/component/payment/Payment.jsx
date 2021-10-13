import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SubscriptionPlan from "./SubscriptionPlan";
import StripeForm from "./StripeForm";
import "./Paymentpage.css";
import { useDispatch } from "react-redux";
import { getPlanDetailsByIdAction } from "../../redux/action/payment";
import { withRouter } from "react-router";

const Payment = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getPlanDetailsByIdAction(id, setLoading));
  }, []);

  return (
    <>
      <Container className="max-w-1400 mt-5 mb-5">
        <Row className="justify-content-between">
          <SubscriptionPlan loading={loading} />
          <StripeForm />
        </Row>
      </Container>
    </>
  );
};
export default withRouter(Payment);
