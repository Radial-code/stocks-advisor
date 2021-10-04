import React, { useState } from "react";
import { useFixedScreenProvider } from "../../contexts/FixedScreenProvider";
import { NavLink } from "react-router-dom";

const DashboardDropDown = ({ sideBarHandler }) => {
  const [dashboard, setDashboard] = useState(false);

  const dashboardHandler = () => {
    console.log(dashboard, "dashboard");
    setDashboard(!dashboard);
  };
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setScreenFixed((pre) => !pre);
  };
  const { setScreenFixed } = useFixedScreenProvider();
  return (
    <div className="dashboard-sm-dropdown d-flex justify-content-sm-between">
      <p className="heading-stock pr-15 fs-sm-20 d-none d-sm-block">
        Dashboard
      </p>

      <ul className="l-s-none d-sm-none w-100 pl-0">
        {" "}
        <li
          onClick={dashboardHandler}
          className={`    ${dashboard ? "drop-active" : "dashboard-down"} `}
        >
          <a className="d-flex heading-stock pr-15 fs-sm-20 text-white  nav-links justify-content-between align-items-center">
            Dashboard
            <span className={`ml-20 ${dashboard ? "sidebardropdown" : ""}`}>
              <span className="plus">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </span>
              <span className="subs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-dash bg-5CBD4C"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg>{" "}
              </span>
            </span>
          </a>
        </li>
        <li className=" drop-item mr-0 ">
          <div
            className={`drop-none w-100   ${
              dashboard ? "sidebardropdown" : ""
            }`}
          >
            <ul className="py-2 w-100 drop-down-list">
              <li>
                <NavLink
                  exact
                  to="/dashboard/edit/contact"
                  activeClassName=""
                  className=""
                  onClick={click ? handleClick : null}
                >
                  <div className="all-student">
                    <span>Edit Contact</span>
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink
                  exact
                  to="/dashboard/manage/subscription"
                  activeClassName=""
                  className=""
                  onClick={click ? handleClick : null}
                >
                  <div className="all-student">
                    <span>Manage Subscription</span>
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink
                  exact
                  to="/dashboard/update/payment"
                  activeClassName=""
                  className=""
                  onClick={click ? handleClick : null}
                >
                  <div className="all-student">
                    <span>Update payment Method</span>
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink
                  exact
                  to="/dashboard/notification"
                  activeClassName=""
                  className=""
                  onClick={click ? handleClick : null}
                >
                  <div className="all-student">
                    <span>Notification</span>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/dashboard/profile"
                  activeClassName=""
                  className=""
                  onClick={click ? handleClick : null}
                >
                  <div className="all-student">
                    <span>Profile</span>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/dashboard/payment"
                  activeClassName=""
                  className=""
                  onClick={click ? handleClick : null}
                >
                  <div className="all-student">
                    <span>Payment Details</span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <span onClick={sideBarHandler} className="d-none d-sm-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="54"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </span>
    </div>
  );
};

export default DashboardDropDown;
