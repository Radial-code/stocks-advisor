import React from "react";

import { Link, withRouter } from "react-router-dom";
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
              <Link to="/portfolio/portfolio1">
                <li
                  className={`pt-13 pb-13 mt-15 ${
                    page === "enquiry" ? "sidebar-active" : ""
                  }`}
                >
                  <span>Portfolio-1</span>
                </li>
              </Link>

              <Link to="/portfolio/portfolio2">
                <li
                  className={`pt-13 pb-13 mt-15 ${
                    page === "job" ? "sidebar-active" : ""
                  }`}
                >
                  <span>Portfolio-2</span>
                </li>
              </Link>

              <Link to="/portfolio/portfolio3">
                <li
                  className={`pt-13 pb-13 mt-15 ${
                    page === "job" ? "sidebar-active" : ""
                  }`}
                >
                  <span>Portfolio-3</span>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default withRouter(PortfoliosSidebar);
