import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Hero from "./Hero";
import HomeRelatedNewsSlider from "./HomeRelatedNewsSlider";
import SubscriptionPlans from "./SubscriptionPlans";
import { getHomeNewsListApiAction } from "../../redux/action/news";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

const Homepage = () => {
  const { getValueOf } = useLayoutChangerProvider();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [relatedloader, setRelatedLoading] = useState(false);

  useEffect(() => {
    dispatch(getHomeNewsListApiAction(setLoading));
  }, []);

  return (
    <>
      <Hero
        loading={loading}
        setRelatedLoading={setRelatedLoading}
        getValueOf={getValueOf}
      />
      <HomeRelatedNewsSlider
        relatedloader={relatedloader}
        getValueOf={getValueOf}
      />
      <SubscriptionPlans getValueOf={getValueOf} />
    </>
  );
};

export default Homepage;
