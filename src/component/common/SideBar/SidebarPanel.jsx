import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { News, Stocks, User } from "../icons/Icons";

import "./Sidebar.css";
// /dashboard/update/payment
const SidebarPanel = ({ page, sidebarActive, history }) => {
  return (
    <div className={`${sidebarActive ? "hamburgur-active" : ""} mt-5`}>
      <div className="w-350 wrapper d-flex justify-content-center bg-white  h-80vh p-4">
        <div className=" mt-4 w-100  ">
          <p className="  profile-heading pr-15 pb-2 border-b-1">
            Content Manager
          </p>
          <nav>
            <ul className="l-s-t-none cursor-pointer pr-15 admin-hover mt-5 ">
              <NavLink
                to="/content/manager/stocks"
                activeClassName="sidebar-background"
              >
                <li
                  className={`pt-13 pb-13 mt-15  ${
                    page === "add" ? "sidebar-active" : ""
                  }`}
                >
                  <span className="svg-image px-3">
                    <Stocks />
                  </span>
                  <span>Stocks</span>
                </li>
              </NavLink>

              <NavLink
                to="/content/manager/news"
                activeClassName="sidebar-background"
              >
                <li
                  className={`pt-13 pb-13 mt-15 ${
                    page === "enquiry" ? "sidebar-active" : ""
                  }`}
                >
                  <span className="svg-image px-3">
                    <News />
                  </span>
                  <span>News</span>
                </li>
              </NavLink>

              <NavLink
                to="/content/manager/users"
                activeClassName="sidebar-background"
              >
                <li
                  className={`pt-13 pb-13 mt-15 ${
                    page === "job" ? "sidebar-active" : ""
                  }`}
                >
                  <span className="svg-image px-3">
                    <User />
                  </span>
                  <span>Users</span>
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default withRouter(SidebarPanel);
