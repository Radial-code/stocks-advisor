import React from "react";
import OurPlans from "../common/ourPlans/OurPlans";

const SubscriptionPlans = ({ getValueOf }) => {
  return (
    <>
      <section className="bg-6B8BC1 py-sm-5 py-2 pb-5">
        <OurPlans homepage={true} getValueOf={getValueOf} />
      </section>
    </>
  );
};

export default SubscriptionPlans;
