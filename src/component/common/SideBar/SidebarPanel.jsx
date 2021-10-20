import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import Cancel from "../../../assets/img/cancel.png";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import {
  Stocks,
  News,
  User,
  ServiceIcon,
  PlansIcon,
  Notify,
  TeamIcon,
  Enquiry,
  Back,
} from "../icons/Icons";

const SidebarPanel = ({ history, showSidebar2, setShowSidebar2, match }) => {
  const [activeLink, setActiveLink] = useState("stocks");
  const { layoutClickChanger } = useLayoutChangerProvider();

  useEffect(() => {
    const path = match.path.split("/");
    if (path.includes("our")) {
      setActiveLink("our");
    }
  }, []);
  if (layoutClickChanger) {
    document.dir = "rtl";
  } else {
    document.dir = "ltr";
  }

  const openRoutes = (value) => {
    setShowSidebar2(false);
    setActiveLink(value);
    if (value === "stocks") {
      history.push("/content/manager/stocks");
    } else if (value === "news") {
      history.push("/content/manager/news");
    } else if (value === "users") {
      history.push("/content/manager/users");
    } else if (value === "services") {
      history.push("/content/manager/other/services");
    } else if (value === "our") {
      history.push("/content/manager/our/plans/details");
    } else if (value === "team") {
      history.push("/content/manager/team/cards");
    } else if (value === "enquiry") {
      history.push("/content/manager/enquiry/list");
    } else if (value === "notification") {
      history.push("/content/manager/notification");
    }
  };
  return (
    <div className="row flex-column  justify-content-between mx-lg-2">
      <div
        className={`${showSidebar2 ? "cn-overlay" : ""}`}
        onClick={() => openRoutes(false)}
      ></div>
      <div className="col">
        <div
          className={`${showSidebar2 ? "right-0" : "right-350"} ${
            layoutClickChanger ? "left-350" : "left-0 "
          }${showSidebar2 ? "left-0" : "left-350"}
           bg-white content-manager-sidebar shadow px-3 pt-4`}
        >
          <div className="d-flex align-items-center justify-content-between mb-2">
            <p className="cn-sidebar-text mb-0 pt-4">Content Manager</p>

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
              activeLink === "stocks" ? "cn-sidebar-active" : ""
            }`}
            onClick={() => openRoutes("stocks")}
          >
            <span className="px-2">
              <Stocks />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">Stocks</p>
          </div>
          <div
            className={`cn-sidebar-active-tag align-items-center d-flex my-4 whitespace ${
              activeLink === "news" ? "cn-sidebar-active" : ""
            }`}
            onClick={() => openRoutes("news")}
          >
            <span className="px-2">
              <News />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">News</p>
          </div>
          <div
            className={`cn-sidebar-active-tag align-items-center d-flex my-4 whitespace ${
              activeLink === "users" ? "cn-sidebar-active" : ""
            }`}
            onClick={() => openRoutes("users")}
          >
            <span className="px-2">
              <User />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0 ">Users</p>
          </div>
          <div
            className={`cn-sidebar-active-tag align-items-center d-flex my-4 whitespace ${
              activeLink === "services" ? "cn-sidebar-active" : ""
            }`}
            onClick={() => openRoutes("services")}
          >
            <span className="px-2">
              <ServiceIcon />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">Other Services</p>
          </div>

          <div
            className={`cn-sidebar-active-tag align-items-center d-flex my-4 whitespace ${
              activeLink === "our" ? "cn-sidebar-active" : ""
            }`}
            onClick={() => openRoutes("our")}
          >
            <span className="px-2">
              <PlansIcon />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">Our Plans</p>
          </div>
          <div
            className={`cn-sidebar-active-tag align-items-center d-flex my-4 whitespace ${
              activeLink === "team" ? "cn-sidebar-active" : ""
            }`}
            onClick={() => openRoutes("team")}
          >
            <span className="px-2">
              <TeamIcon />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">Team</p>
          </div>
          <div
            className={`cn-sidebar-active-tag align-items-center d-flex my-4 whitespace ${
              activeLink === "enquiry" ? "cn-sidebar-active" : ""
            }`}
            onClick={() => openRoutes("enquiry")}
          >
            <span className="px-2">
              <Enquiry />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">Enquiry</p>
          </div>
          <div
            className={`cn-sidebar-active-tag align-items-center d-flex my-4 whitespace ${
              activeLink === "notification" ? "cn-sidebar-active" : ""
            }`}
            onClick={() => openRoutes("notification")}
          >
            <span className="px-2">
              <Notify />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0 ">Notification</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className=" px-lg-4 pt-4 d-lg-none d-flex flex-column mb-5">
          <div className="d-flex align-items-center mb-3 justify-content-between">
            <p className="cn-sidebar-text text-end mb-0">Content Manager</p>
            <span
              className=" cursor-pointer"
              onClick={() => setShowSidebar2(true)}
            >
              <Back />
            </span>
          </div>
          <div className="cn-sidebar-border"></div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(SidebarPanel);
