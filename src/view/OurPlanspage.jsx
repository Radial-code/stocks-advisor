import React from "react";
import OurPlans from "../component/common/ourPlans/OurPlans";
import "../component/common/ourPlans/ourplan.css";
import { useLayoutChangerProvider } from "../redux/LayoutChangerProvider";

const OurPlanspage = () => {
  const { getValueOf } = useLayoutChangerProvider();
  return (
    <div className="bg-f9f9f9 pb-5 mt-100">
      <OurPlans getValueOf={getValueOf} />
    </div>
  );
};
export default OurPlanspage;
