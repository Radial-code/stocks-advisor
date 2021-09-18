import React from "react";
import { News, Stocks, User } from "../icons/Icons";

import { NavLink, withRouter } from "react-router-dom";
import "./Sidebar.css";
// /dashboard/update/payment
const PortfoliosSidebar = ({ page, sidebarActive, history }) => {
  return (
    <div className={`${sidebarActive ? "hamburgur-active" : ""}`}>
      <div className="w-350 wrapper d-flex justify-content-center bg-white  h-80vh p-4">
        <div className=" mt-5 w-100  ">
          <p className=" mt-2 profile-heading pr-15 ml-2 pb-2 border-b-1">
            Portfolios
          </p>
          <nav>
            <ul className="l-s-t-none cursor-pointer pr-15 admin-hover mt-5 ">
              <NavLink
                to="/portfolio/portfolio1"
                activeClassName="porfolio-dashboard"
              >
                <li
                  className={`pt-13 pb-13 mt-15 ${
                    page === "enquiry" ? "sidebar-active" : ""
                  }`}
                >
                  <span className="svg-image px-3">
                    <Stocks />
                  </span>
                  <span>Portfolio-1</span>
                </li>
              </NavLink>

              <NavLink
                to="/portfolio/portfolio2"
                activeClassName="porfolio-dashboard"
              >
                <li
                  className={`pt-13 pb-13 mt-15 ${
                    page === "job" ? "sidebar-active" : ""
                  }`}
                >
                  <span className="svg-image px-3">
                    <News />
                  </span>
                  <span>Portfolio-2</span>
                </li>
              </NavLink>

              <NavLink
                to="/portfolio/portfolio3"
                activeClassName="porfolio-dashboard"
              >
                <li
                  className={`pt-13 pb-13 mt-15 ${
                    page === "job" ? "sidebar-active" : ""
                  }`}
                >
                  <span className="svg-image px-3">
                    <User />
                  </span>
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
