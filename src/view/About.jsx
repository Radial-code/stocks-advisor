import React, { useEffect, useState } from "react";
import AboutHero from "../component/about/AboutHero";
import AboutUs from "../component/about/AboutUs";
import History from "../component/about/History";
import AboutSlider from "../component/about/AboutSlider";
import { useDispatch } from "react-redux";
import { getTeamMemberListAction } from "../redux/action/cmPanel/stock";
import { useLayoutChangerProvider } from "../redux/LayoutChangerProvider";

const Homepage = () => {
  const { getValueOf } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getTeamMemberListAction(setLoading));
  }, []);

  return (
    <>
      <AboutHero />
      <section className="bg-f9f9f9 py-5 ">
        <div className="container  p-left-right ">
          <AboutUs getValueOf={getValueOf} />
          <History getValueOf={getValueOf} />
          <div className="mb-5">
            <AboutSlider loading={loading} getValueOf={getValueOf} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
