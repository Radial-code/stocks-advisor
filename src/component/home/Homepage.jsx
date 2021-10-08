import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Hero from "./Hero";
import NewsArticles from "./NewsArticles";
import SubscriptionPlans from "./SubscriptionPlans";
import { getHomeNewsListApiAction } from "../../redux/action/news";

const Homepage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getHomeNewsListApiAction(setLoading));
  }, []);

  return (
    <>
      <Hero loading={loading} />
      <NewsArticles />
      <SubscriptionPlans />
    </>
  );
};

export default Homepage;
