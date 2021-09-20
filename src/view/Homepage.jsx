import React from "react";
import Hero from "../component/home/Hero";
import NewsArticles from "../component/home/NewsArticles";
import SubscriptionPlans from "../component/home/SubscriptionPlans";
import Navbar from "../component/common/Navbar";
const Homepage = () => {
  return (
    <>
      <Hero />
      <NewsArticles />
      <SubscriptionPlans />
    </>
  );
};

export default Homepage;
