import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SubscriptionPlan from "./SubscriptionPlan";
import StripeForm from "./StripeForm";
import "./Paymentpage.css";
import { useDispatch, useSelector } from "react-redux";
import { getPlanDetailsByIdAction } from "../../redux/action/payment";
import { withRouter } from "react-router";
import OldPlan from "./OldPlan";
import OldPlanDetails from "./OldPlanDetails";

const Payment = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [promoCodeData, setPromoCodeData] = useState(false);
  const planDetails = useSelector((state) => state.list.planDetails);
  const allPlanDetails = useSelector((state) => state.list.allPlanDetails);

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
          {allPlanDetails.isOldPlan ? (
            <OldPlanDetails
              loading={loading}
              planDetails={allPlanDetails.oldPlan}
            />
          ) : (
            ""
          )}
          {allPlanDetails.youHaveToPay === 0 ? (
            <OldPlan allPlanDetails={allPlanDetails} loading={loading} />
          ) : (
            <>
              {allPlanDetails.youHaveToPay > 0 && allPlanDetails.isOldPlan ? (
                <>
                  <OldPlan allPlanDetails={allPlanDetails} loading={loading} />
                  <StripeForm
                    setPromoCodeData={setPromoCodeData}
                    promoCodeData={promoCodeData}
                    youHaveToPay={allPlanDetails.youHaveToPay}
                  />
                </>
              ) : (
                <StripeForm
                  setPromoCodeData={setPromoCodeData}
                  promoCodeData={promoCodeData}
                  youHaveToPay={allPlanDetails.youHaveToPay}
                />
              )}
            </>
          )}
        </Row>
      </Container>
      {/* <div className="d-flex flex-lg-row flex-column mt-100 max-w-1400 justify-content-center">
        <div>
          <SubscriptionPlan
            loading={loading}
            promoCodeData={promoCodeData}
            planDetails={planDetails}
          />
          {!!allPlanDetails && !!allPlanDetails.isOldPlan ? (
            <OldPlanDetails
              loading={loading}
              planDetails={allPlanDetails.oldPlan}
            />
          ) : (
            ""
          )}
        </div>
        <div>
          {allPlanDetails.youHaveToPay === 0 ? (
            <OldPlan allPlanDetails={allPlanDetails} loading={loading} />
          ) : (
            <>
              {allPlanDetails.youHaveToPay > 0 && allPlanDetails.isOldPlan ? (
                <>
                  <StripeForm
                    setPromoCodeData={setPromoCodeData}
                    promoCodeData={promoCodeData}
                    youHaveToPay={allPlanDetails.youHaveToPay}
                  />
                  <OldPlan allPlanDetails={allPlanDetails} loading={loading} />
                </>
              ) : (
                <StripeForm
                  setPromoCodeData={setPromoCodeData}
                  promoCodeData={promoCodeData}
                  youHaveToPay={allPlanDetails.youHaveToPay}
                />
              )}
            </>
          )}
        </div>
      </div> */}
    </>
  );
};
export default withRouter(Payment);
