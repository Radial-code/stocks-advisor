import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
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
      <Container className="mt-100 pt-sm-5 mb-4">
        <div className="d-flex flex-lg-row flex-column justify-content-between">
          <div className="w-100 px-2">
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
          <div className="w-100">
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
                    <OldPlan
                      allPlanDetails={allPlanDetails}
                      loading={loading}
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
          </div>
        </div>
      </Container>
    </>
  );
};
export default withRouter(Payment);
