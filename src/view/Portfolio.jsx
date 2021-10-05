import React, { useState } from "react";
import { Route } from "react-router";
import Portfolio1 from "../component/portfolio/Portfolio1";
import PortfoliosSidebar from "../component/common/SideBar/PortfoliosSidebar";
import Portfolio2 from "../component/portfolio/Portfolio2";
import Portfolio3 from "../component/portfolio/Portfolio3";

const Portfolio = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const sideBarHandler = () => setSidebarActive(!sidebarActive);

  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-between">
          <PortfoliosSidebar
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
          />
          <Route exact path="/portfolio/portfolio1">
            <Portfolio1
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route exact path="/portfolio/portfolio2">
            <Portfolio2
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route exact path="/portfolio/portfolio3">
            <Portfolio3
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
