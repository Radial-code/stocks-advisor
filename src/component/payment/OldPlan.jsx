import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { plansUpgradeAction } from "../../redux/action/cmPanel/plans";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";
import Loader from "../common/Loader";

function OldPlan({ allPlanDetails, history }) {
  const { getValueOf } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const [addPlansLoading, setAddPlansLoading] = useState(false);

  const upgradePlan = (id) => {
    dispatch(plansUpgradeAction({ planId: id }, setAddPlansLoading, history));
  };

  return (
    <div className="col pt-lg-0 pt-4 mt-lg-4 mt-3">
      <section className="bg-white br-9_4 p-30 p-9 shadow-sm payment-container px-3 py-4 h-100 ">
        <div>
          <p className="fs-24 payment-stripe-text">{getValueOf("Payment")}</p>
        </div>
        <div className="d-flex justify-content-between pb-2">
          <p className="profile-heading-promo">Old Plan</p>
          <p className="payment-page-amount-promo">
            ${allPlanDetails && allPlanDetails.oldPlan.price}
          </p>
        </div>
        <div className="d-flex justify-content-between payment-border pb-2">
          <p className="profile-heading-promo">Current Plan</p>
          <p className="payment-page-amount-promo">
            ${allPlanDetails && allPlanDetails.details.price}
          </p>
        </div>
        <div className="d-flex justify-content-between payment-border pb-2">
          <p className="profile-heading-promo">Amount to be Paid</p>
          <p className="payment-page-amount-promo">
            ${allPlanDetails && allPlanDetails.youHaveToPay}
          </p>
        </div>
        {allPlanDetails.youHaveToPay === 0 && (
          <button
            className="btn btn-primary mt-2"
            type="button"
            onClick={() => upgradePlan(allPlanDetails.details._id)}
          >
            {addPlansLoading ? <Loader /> : "Upgrade Plan"}
          </button>
        )}
      </section>
    </div>
  );
}
export default withRouter(OldPlan);
