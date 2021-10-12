import React from "react";

import { NavLink, withRouter } from "react-router-dom";
import "./Sidebar.css";

const PortfoliosSidebar = ({ sidebarActive }) => {
  return (
    <div className={`${sidebarActive ? "hamburgur-active" : ""}`}>
      <div className="w-350 wrapper d-flex justify-content-center bg-white  h-60vh p-4">
        <div className=" mt-5 w-100  ">
          <p className=" mt-2 profile-heading pr-15 ml-2 pb-2 border-b-1">
            Portfolios
          </p>
          <nav>
            <ul className="l-s-t-none cursor-pointer pr-15 admin-hover mt-5 ">
              <NavLink to="/portfolio/portfolio1" activeClassName="active">
                <li className={`pt-13 pb-13 mt-15 `}>
                  <span>Portfolio-1</span>
                </li>
              </NavLink>

              <NavLink to="/portfolio/portfolio2" activeClassName="active">
                <li className={`pt-13 pb-13 mt-15 `}>
                  <span>Portfolio-2</span>
                </li>
              </NavLink>

              <NavLink to="/portfolio/portfolio3" activeClassName="active">
                <li className={`pt-13 pb-13 mt-15 `}>
                  <span>Portfolio-3</span>
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default withRouter(PortfoliosSidebar);
