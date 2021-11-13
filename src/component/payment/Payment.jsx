import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SubscriptionPlan from "./SubscriptionPlan";
import StripeForm from "./StripeForm";
import "./Paymentpage.css";
import { useDispatch, useSelector } from "react-redux";
import { getPlanDetailsByIdAction } from "../../redux/action/payment";
import { withRouter } from "react-router";

const Payment = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [promoCodeData, setPromoCodeData] = useState(false);
  const planDetails = useSelector((state) => state.list.planDetails);

  useEffect(() => {
    dispatch(getPlanDetailsByIdAction(id, setLoading));
  }, []);

  return (
    <>
      <Container className="max-w-1400 mt-5 mb-5 ">
        <Row className="justify-content-between mt-100 pt-3">
          <SubscriptionPlan
            loading={loading}
            promoCodeData={promoCodeData}
            planDetails={planDetails}
          />
          <StripeForm
            setPromoCodeData={setPromoCodeData}
            promoCodeData={promoCodeData}
            planDetails={planDetails}
          />
        </Row>
      </Container>
    </>
  );
};
export default withRouter(Payment);
