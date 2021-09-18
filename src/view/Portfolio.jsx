import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Portfolio1 from "../component/portfolio/Portfolio1";
import PortfoliosSidebar from "../component/common/SideBar/SidebarDashboard";
import Portfolio2 from "../component/portfolio/Portfolio2";
const Portfolio = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-between">
          <PortfoliosSidebar
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
          />

          <Route exact path="/portfolio/portfolio1" component={Portfolio1} />
          <Route />
          <Route exact path="/portfolio/portfolio2" component={Portfolio2} />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
