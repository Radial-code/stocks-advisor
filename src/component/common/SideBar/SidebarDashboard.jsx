import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import {
  Manage,
  Notify,
  ProfileIcon,
  Back,
  Payment,
  Invite,
} from "../icons/Icons";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import Cancel from "../../../assets/img/cancel.png";
import { withRouter } from "react-router";

function SidebarDashboard({ history, showSidebar, setShowSidebar, match }) {
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();
  const [activeLink, setActiveLink] = useState("manage");
  if (layoutClickChanger) {
    document.dir = "rtl";
  } else {
    document.dir = "ltr";
  }

  useEffect(() => {
    const path = window.location.pathname.split("/");
    if (path.includes("manage")) {
      setActiveLink("manage");
    } else if (path.includes("update")) {
      setActiveLink("update");
    } else if (path.includes("users")) {
      setActiveLink("users");
    } else if (path.includes("notification")) {
      setActiveLink("notification");
    } else if (path.includes("profile")) {
      setActiveLink("profile");
    } else if (path.includes("payment")) {
      setActiveLink("payment");
    } else if (path.includes("invite")) {
      setActiveLink("invite");
    }
  }, []);
  const openRoutes = (value) => {
    setShowSidebar(false);
    setActiveLink(value);

    if (value === "manage") {
      history.push("/dashboard/manage/subscription");
    } else if (value === "update") {
      history.push("/dashboard/update/payment");
    } else if (value === "notification") {
      history.push("/dashboard/notification");
    } else if (value === "profile") {
      history.push("/dashboard/view/profile");
    } else if (value === "payment") {
      history.push("/dashboard/payment");
    } else if (value === "invite") {
      history.push("/dashboard/invite");
    }
  };

  return (
    <div className="row flex-column  justify-content-between mx-lg-2">
      <div
        className={`${showSidebar ? "cn-overlay" : ""}`}
        onClick={() => openRoutes(false)}
      ></div>
      <div className="col">
        <div
          className={`${showSidebar ? "right-0" : "right-350"} ${
            layoutClickChanger ? "left-350" : "left-0 "
          }${showSidebar ? "left-0" : "left-350"}
           bg-white content-manager-sidebar shadow px-3 pt-4`}
        >
          <div className="d-flex align-items-center justify-content-between mb-2 py-2">
            <p className="cn-sidebar-text mb-0 ">{getValueOf("Dashboard")}</p>

            <img
              className="cancel-icon cursor-pointer"
              onClick={() => openRoutes()}
              src={Cancel}
              alt=""
            />
          </div>
          <div className="cn-sidebar-border"></div>
          <div
            className={`cn-sidebar-active-tag align-items-center d-flex my-4 whitespace ${
              activeLink == "manage" ? "cn-sidebar-active" : ""
            }`}
            onClick={() => openRoutes("manage")}
          >
            <span className="px-2">
              <Manage />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0 ">
              {getValueOf("Manage Subscription")}
            </p>
          </div>

          <div
            className={`cn-sidebar-active-tag align-items-center d-flex my-4 whitespace ${
              activeLink == "notification" ? "cn-sidebar-active" : ""
            }`}
            onClick={() => openRoutes("notification")}
          >
            <span className="px-2">
              <Notify />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">
              {getValueOf("Notification")}
            </p>
          </div>
          <div
            className={`cn-sidebar-active-tag align-items-center d-flex my-4 whitespace ${
              activeLink == "profile" ? "cn-sidebar-active" : ""
            }`}
            onClick={() => openRoutes("profile")}
          >
            <span className="px-2">
              <ProfileIcon />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">
              {getValueOf("Profile")}
            </p>
          </div>
          <div
            className={`cn-sidebar-active-tag align-items-center d-flex my-4 whitespace ${
              activeLink == "payment" ? "cn-sidebar-active" : ""
            }`}
            onClick={() => openRoutes("payment")}
          >
            <span className="px-2">
              <Payment />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">
              {getValueOf("Payment Details")}
            </p>
          </div>
          <div
            className={`cn-sidebar-active-tag align-items-center d-flex my-4 whitespace ${
              activeLink == "invite" ? "cn-sidebar-active" : ""
            }`}
            onClick={() => openRoutes("invite")}
          >
            <span className="px-2">
              <Invite />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">
              {getValueOf("Invite")}
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className=" px-lg-4 pt-4 d-lg-none d-flex flex-column mb-5">
          <div className="d-flex align-items-center mb-3 justify-content-between">
            <p className="cn-sidebar-text text-end mb-0">
              {getValueOf("Dashboard")}
            </p>
            <span
              className=" cursor-pointer"
              onClick={() => setShowSidebar(true)}
            >
              <Back />
            </span>
          </div>
          <div className="cn-sidebar-border"></div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(SidebarDashboard);
