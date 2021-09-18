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
            Dashboard
          </p>
          <nav>
            <ul className="l-s-t-none cursor-pointer pr-15 admin-hover mt-5 ">
              <Link to="/dashboard/edit/contact">
                <li
                  className={`pt-13 pb-13 mt-15  ${
                    page === "add" ? "sidebar-active" : ""
                  }`}
                >
                  <span>Edit Contact</span>
                </li>
              </Link>

              <Link to="/dashboard/manage/subscription">
                <li
                  className={`pt-13 pb-13 mt-15 ${
                    page === "enquiry" ? "sidebar-active" : ""
                  }`}
                >
                  <span>Manage Subscription</span>
                </li>
              </Link>

              <Link to="/dashboard/update/payment">
                <li
                  className={`pt-13 pb-13 mt-15 ${
                    page === "job" ? "sidebar-active" : ""
                  }`}
                >
                  <span>Update Payment Method</span>
                </li>
              </Link>

              <Link to="/dashboard/notification">
                <li
                  className={`pt-13 pb-13 mt-15 ${
                    page === "job" ? "sidebar-active" : ""
                  }`}
                >
                  <span>Notification</span>
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
