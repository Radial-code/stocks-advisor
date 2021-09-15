import React from "react";
import OurPlans from "../common/ourPlans/OurPlans";

const SubscriptionPlans = () => {
  return (
    <>
      <section className="bg-6B8BC1 py-5">
        <div className="container pb-5">
          {/* <h1 className="text-center">Subscription Plans</h1> */}

          <OurPlans homepage={true} />
        </div>
      </section>
    </>
  );
};

export default SubscriptionPlans;
