import React from "react";
import AboutHero from "../component/about/AboutHero";
import AboutUs from "../component/about/AboutUs";
import History from "../component/about/History";
import AboutSlider from "../component/about/AboutSlider";

const Homepage = () => {
  return (
    <>
      <AboutHero />
      <section className="bg-f9f9f9 py-5">
        <div className="container  p-left-right">
          <AboutUs />
          <History />
          <div className="mb-5">
            <AboutSlider />
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
