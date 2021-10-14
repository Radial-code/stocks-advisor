import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import {
  News,
  PlansIcon,
  ServiceIcon,
  Stocks,
  TeamIcon,
  User,
} from "../icons/Icons";
import "./Sidebar.css";

const SidebarPanel = ({ sidebarActive }) => {
  return (
    <div className={`${sidebarActive ? "hamburgur-active" : ""} mt-5`}>
      <div className="w-350 wrapper d-flex justify-content-center bg-white  h-80vh p-4">
        <div className=" mt-4 w-100  ">
          <p className="  profile-heading pr-15 pb-2 border-b-1">
            Content Manager
          </p>
          <nav>
            <ul className="l-s-t-none cursor-pointer pr-15 admin-hover mt-5 ">
              <NavLink activeClassName="active" to="/content/manager/stocks">
                <li className={`pt-13 pb-13 mt-15 `}>
                  <span className="svg-image pl-15">
                    <Stocks />
                  </span>
                  <span>Stocks</span>
                </li>
              </NavLink>

              <NavLink activeClassName="active" to="/content/manager/news">
                <li className={`pt-13 pb-13 mt-15 `}>
                  <span className="svg-image pl-15">
                    <News />
                  </span>
                  <span>News</span>
                </li>
              </NavLink>

              <NavLink activeClassName="active" to="/content/manager/users">
                <li className={`pt-13 pb-13 mt-15 `}>
                  <span className="svg-image pl-15">
                    <User />
                  </span>
                  <span>Users</span>
                </li>
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/content/manager/other/services"
              >
                <li className={`pt-13 pb-13 mt-15 `}>
                  <span className="svg-image pl-15">
                    <ServiceIcon />
                  </span>
                  <span>Other Services</span>
                </li>
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/content/manager/our/plans/details"
              >
                <li className={`pt-13 pb-13 mt-15 `}>
                  <span className="svg-image pl-15">
                    <PlansIcon />
                  </span>
                  <span>Our Plans</span>
                </li>
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/content/manager/team/cards"
              >
                <li className={`pt-13 pb-13 mt-15 `}>
                  <span className="svg-image pl-15">
                    <TeamIcon />
                  </span>
                  <span>Team</span>
                </li>
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/content/manager/enquiry/list"
              >
                <li className={`pt-13 pb-13 mt-15 `}>
                  <span className="svg-image pl-15">
                    <TeamIcon />
                  </span>
                  <span>Enquiry</span>
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
