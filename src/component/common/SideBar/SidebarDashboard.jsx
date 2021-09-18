import React from "react";

import { NavLink, withRouter } from "react-router-dom";
import { Edit, Manage, Notify, Update } from "../icons/Icons";
import "./Sidebar.css";
// /dashboard/update/payment
const SidebarDashboard = ({ page, sidebarActive, history }) => {
  return (
    <div className={`${sidebarActive ? "hamburgur-active" : ""}`}>
      <div className="w-350 wrapper d-flex justify-content-center bg-white  h-80vh p-4">
        <div className=" mt-5 w-100  ">
          <p className=" mt-2 profile-heading pr-15 ml-2 pb-2 border-b-1">
            Dashboard
          </p>
          <nav>
            <ul className="l-s-t-none cursor-pointer pr-15 admin-hover mt-5 ps-0">
              <NavLink
                to="/dashboard/edit/contact"
                activeClassName="active-dashboard"
              >
                <li
                  className={`pt-13 pb-13 mt-15  ${
                    page === "add" ? "sidebar-active" : ""
                  }`}
                >
                  <span className="px-3">
                    <Edit />
                  </span>
                  <span>Edit Contact</span>
                </li>
              </NavLink>

              <NavLink
                to="/dashboard/manage/subscription"
                activeClassName="active-dashboard"
              >
                <li
                  className={`pt-13 pb-13 mt-15 ${
                    page === "enquiry" ? "sidebar-active" : ""
                  }`}
                >
                  <span className="px-3">
                    <Manage />
                  </span>
                  <span>Manage Subscription</span>
                </li>
              </NavLink>

              <NavLink
                to="/dashboard/update/payment"
                activeClassName="active-dashboard"
              >
                <li
                  className={`pt-13 pb-13 mt-15 ${
                    page === "job" ? "sidebar-active" : ""
                  }`}
                >
                  <span className="px-3">
                    {" "}
                    <Update />
                  </span>
                  <span>Update Payment Method</span>
                </li>
              </NavLink>

              <NavLink
                to="/dashboard/notification"
                activeClassName="active-dashboard"
              >
                <li
                  className={`pt-13 pb-13 mt-15 ${
                    page === "job" ? "sidebar-active" : ""
                  }`}
                >
                  <span className="px-3">
                    <Notify />
                  </span>
                  <span>Notification</span>
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default withRouter(SidebarDashboard);
