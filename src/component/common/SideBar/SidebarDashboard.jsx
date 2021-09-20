import React from "react";
import { EditPencilIcon, Manage, Notify, Update } from "../icons/Icons";
import { NavLink, withRouter } from "react-router-dom";
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
            <ul className="l-s-t-none cursor-pointer pr-15 admin-hover mt-5 ">
              <NavLink activeClassName="active" to="/dashboard/edit/contact">
                <li className={`pt-13 pb-13 mt-15 `}>
                  <span className="pl-15">
                    <EditPencilIcon />
                  </span>
                  <span>Edit Contact</span>
                </li>
              </NavLink>

              <NavLink
                activeClassName="active"
                to="/dashboard/manage/subscription"
              >
                <li className={`pt-13 pb-13 mt-15 `}>
                  <span className="pl-15">
                    <Manage />
                  </span>
                  <span>Manage Subscription</span>
                </li>
              </NavLink>

              <NavLink activeClassName="active" to="/dashboard/update/payment">
                <li className={`pt-13 pb-13 mt-15 `}>
                  <span className="pl-15">
                    {" "}
                    <Update />
                  </span>
                  <span>Update Payment Method</span>
                </li>
              </NavLink>

              <NavLink activeClassName="active" to="/dashboard/notification">
                <li className={`pt-13 pb-13 mt-15 `}>
                  <span className="pl-15">
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
