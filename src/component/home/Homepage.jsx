import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Hero from "./Hero";
import HomeRelatedNewsSlider from "./HomeRelatedNewsSlider";
import SubscriptionPlans from "./SubscriptionPlans";
import { getHomeNewsListApiAction } from "../../redux/action/news";

const Homepage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [relatedloader, setRelatedLoading] = useState(false);

  useEffect(() => {
    dispatch(getHomeNewsListApiAction(setLoading));
  }, []);

  return (
    <>
      <Hero loading={loading} setRelatedLoading={setRelatedLoading} />
      <HomeRelatedNewsSlider />
      <SubscriptionPlans />
    </>
  );
};

export default Homepage;
