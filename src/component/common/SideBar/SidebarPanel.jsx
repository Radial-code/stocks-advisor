// import React from "react";
// import { NavLink, withRouter } from "react-router-dom";
// import {
//   Enquiry,
//   News,
//   PlansIcon,
//   ServiceIcon,
//   Stocks,
//   TeamIcon,
//   User,
// } from "../icons/Icons";
// import "./Sidebar.css";

// const SidebarPanel = ({ sidebarActive }) => {
//   return (
//     <div className={`${sidebarActive ? "hamburgur-active" : ""} mt-5`}>
//       <div className="w-350 wrapper d-flex justify-content-center bg-white  h-80vh p-4">
//         <div className=" mt-4 w-100  ">
//           <p className="  profile-heading pr-15 pb-2 border-b-1">
//             Content Manager
//           </p>
//           <nav>
//             <ul className="l-s-t-none cursor-pointer pr-15 admin-hover mt-5 ">
//               <NavLink activeClassName="active" to="/content/manager/stocks">
//                 <li className={`pt-13 pb-13 mt-15 `}>
//                   <span className="svg-image pl-15">
//                     <Stocks />
//                   </span>
//                   <span>Stocks</span>
//                 </li>
//               </NavLink>

//               <NavLink activeClassName="active" to="/content/manager/news">
//                 <li className={`pt-13 pb-13 mt-15 `}>
//                   <span className="svg-image pl-15">
//                     <News />
//                   </span>
//                   <span>News</span>
//                 </li>
//               </NavLink>

//               <NavLink activeClassName="active" to="/content/manager/users">
//                 <li className={`pt-13 pb-13 mt-15 `}>
//                   <span className="svg-image pl-15">
//                     <User />
//                   </span>
//                   <span>Users</span>
//                 </li>
//               </NavLink>
//               <NavLink
//                 activeClassName="active"
//                 to="/content/manager/other/services"
//               >
//                 <li className={`pt-13 pb-13 mt-15 `}>
//                   <span className="svg-image pl-15">
//                     <ServiceIcon />
//                   </span>
//                   <span>Other Services</span>
//                 </li>
//               </NavLink>
//               <NavLink
//                 activeClassName="active"
//                 to="/content/manager/our/plans/details"
//               >
//                 <li className={`pt-13 pb-13 mt-15 `}>
//                   <span className="svg-image pl-15">
//                     <PlansIcon />
//                   </span>
//                   <span>Our Plans</span>
//                 </li>
//               </NavLink>
//               <NavLink
//                 activeClassName="active"
//                 to="/content/manager/team/cards"
//               >
//                 <li className={`pt-13 pb-13 mt-15 `}>
//                   <span className="svg-image pl-15">
//                     <TeamIcon />
//                   </span>
//                   <span>Team</span>
//                 </li>
//               </NavLink>
//               <NavLink
//                 activeClassName="active"
//                 to="/content/manager/enquiry/list"
//               >
//                 <li className={`pt-13 pb-13 mt-15 `}>
//                   <span className="svg-image pl-15">
//                     <Enquiry />
//                   </span>
//                   <span>Enquiry</span>
//                 </li>
//               </NavLink>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default withRouter(SidebarPanel);
import React, { useState } from "react";
import { withRouter } from "react-router";
import Cancel from "../../../assets/img/cancel.png";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import {
  Stocks,
  News,
  User,
  ServiceIcon,
  PlansIcon,
  TeamIcon,
  Enquiry,
  Back,
} from "../icons/Icons";
const SidebarPanel = ({ history }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeLink, setActiveLink] = useState("stocks");
  const { setLayoutClickChanger, layoutClickChanger } =
    useLayoutChangerProvider();
  const layoutleftChangeHandler = () => {
    setLayoutClickChanger(true);

    localStorage.setItem("stock-advisor-lang", "Arabic");
  };
  if (layoutClickChanger) {
    document.dir = "rtl";
  } else {
    document.dir = "ltr";
  }
  const layoutrightChangeHandler = () => {
    setLayoutClickChanger(false);

    localStorage.setItem("stock-advisor-lang", "English");
  };
  const openRoutes = (value) => {
    setShowSidebar(false);
    setActiveLink(value);
    if (value === "stocks") {
      history.push("/content/manager/stocks");
    } else if (value === "news") {
      history.push("/content/manager/news");
    } else if (value === "user") {
      history.push("/content/manager/users");
    } else if (value === "services") {
      history.push("/content/manager/other/services");
    } else if (value === "details") {
      history.push("/content/manager/our/plans/details");
    } else if (value === "team") {
      history.push("/content/manager/team/cards");
    } else if (value == "enquiry") {
      history.push("/content/manager/enquiry/list");
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
              {" "}
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
              {" "}
              <News />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">News</p>
          </div>
          <div
            className={`cn-sidebar-active-tag align-items-center d-flex my-4 whitespace ${
              activeLink === "user" ? "cn-sidebar-active" : ""
            }`}
            onClick={() => openRoutes("user")}
          >
            <span className="px-2">
              {" "}
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
              {" "}
              <ServiceIcon />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">Other Services</p>
          </div>

          <div
            className={`cn-sidebar-active-tag align-items-center d-flex my-4 whitespace ${
              activeLink === "details" ? "cn-sidebar-active" : ""
            }`}
            onClick={() => openRoutes("details")}
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
        </div>
      </div>
      <div className="col">
        <div className=" px-lg-4 pt-4 d-lg-none d-flex flex-column mb-5">
          <div className="d-flex align-items-center mb-3 justify-content-between">
            <p className="cn-sidebar-text text-end mb-0">Content Manager</p>
            <span
              className=" cursor-pointer"
              onClick={() => setShowSidebar(true)}
            >
              {" "}
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
