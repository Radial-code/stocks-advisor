// import React from "react";
// import { Manage, Notify, ProfileIcon } from "../icons/Icons";
// import { NavLink, withRouter } from "react-router-dom";
// import "./Sidebar.css";
// const SidebarDashboard = ({ sidebarActive }) => {
//   return (
//     <div className={`${sidebarActive ? "hamburgur-active" : ""}`}>
//       <div
//         className={`${
//           sidebarActive ? "d-flex" : "d-none-el d-1297-flex"
//         } w-350 wrapper  justify-content-center bg-white  h-80vh p-4`}
//       >
//         <div className=" mt-5 w-100">
//           <p className=" mt-2 profile-heading pr-15 ml-1 pb-2 border-b-1">
//             Dashboard
//           </p>
//           <nav>
//             <ul className="l-s-t-none cursor-pointer pr-15 admin-hover mt-5  pl-0 ">
//               {/* <NavLink activeClassName="active" to="/dashboard/edit/contact">
//                 <li className={`pt-13 pb-13 mt-15 `}>
//                   <span className="pl-15">
//                     <EditPencilIcon />
//                   </span>
//                   <span>Edit Contact</span>
//                 </li>
//               </NavLink> */}

//               <NavLink
//                 activeClassName="active"
//                 to="/dashboard/manage/subscription"
//               >
//                 <li className={`pt-13 pb-13 mt-15 `}>
//                   <span className="pl-15">
//                     <Manage />
//                   </span>
//                   <span className="ms-2">Manage Subscription</span>
//                 </li>
//               </NavLink>

//               {/* <NavLink activeClassName="active" to="/dashboard/update/payment">
//                 <li className={`pt-13 pb-13 mt-15 `}>
//                   <span className="pl-15">
//                     {" "}
//                     <Update />
//                   </span>
//                   <span>Update Payment Method</span>
//                 </li>
//               </NavLink> */}

//               <NavLink activeClassName="active" to="/dashboard/notification">
//                 <li className={`pt-13 pb-13 mt-15 `}>
//                   <span className="pl-15">
//                     <Notify />
//                   </span>
//                   <span className="ms-2">Notification</span>
//                 </li>
//               </NavLink>
//               <NavLink activeClassName="active" to="/dashboard/view/profile">
//                 <li className={`pt-13 pb-13 mt-15 `}>
//                   <span className="pl-15">
//                     <ProfileIcon />
//                   </span>
//                   <span className="ms-2">Profile</span>
//                 </li>
//               </NavLink>
//               <NavLink activeClassName="active" to="/dashboard/payment">
//                 <li className={`pt-13 pb-13 mt-15 `}>
//                   <span className="pl-15"></span>
//                   <span>Payment Details</span>
//                 </li>
//               </NavLink>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default withRouter(SidebarDashboard);

import React, { useState } from "react";
import "./Sidebar.css";
import {
  Manage,
  Notify,
  ProfileIcon,
  EditPencilIcon,
  Update,
  Back,
  Payment,
} from "../icons/Icons";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import Cancel from "../../../assets/img/cancel.png";
import { withRouter } from "react-router";
function SidebarDashboard({
  history,
  showSidebar,
  setShowSidebar,
  sideBarHandler,
}) {
  const { setLayoutClickChanger, layoutClickChanger } =
    useLayoutChangerProvider();

  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [activeClass, setActiveClass] = useState(false);
  const [showemoji, setShowEmoji] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);

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
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  const openRoutes = (value) => {
    setShowSidebar(false);
    // if (value === "editcontact") {
    //   history.push("/dashboard/edit/contact");
    // }
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
            <p className="cn-sidebar-text mb-0 pt-4">Dashboard</p>

            <img
              className="cancel-icon cursor-pointer"
              onClick={() => openRoutes()}
              src={Cancel}
              alt=""
            />
          </div>
          <div className="cn-sidebar-border"></div>

          {/* <div
            className="cn-sidebar-active-tag align-items-center d-flex  my-4 whitespace"
            onClick={() => openRoutes("editcontact")}
          >
            <span className="px-2">
              {" "}
              <EditPencilIcon />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">Edit Contact</p>
          </div> */}
          <div
            className="cn-sidebar-active-tag align-items-center d-flex my-4 whitespace"
            onClick={() => openRoutes("manage")}
          >
            <span className="px-2">
              {" "}
              <Manage />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0 ">
              Manage Subscription
            </p>
          </div>
          <div
            className="cn-sidebar-active-tag align-items-center d-flex  my-4 whitespace"
            onClick={() => openRoutes("update")}
          >
            <span className="px-2">
              {" "}
              <Update />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">
              Update Payment Method
            </p>
          </div>

          <div
            className="cn-sidebar-active-tag align-items-center d-flex  my-4 whitespace"
            onClick={() => openRoutes("notification")}
          >
            <span className="px-2">
              <Notify />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">Notification</p>
          </div>
          <div
            className="cn-sidebar-active-tag align-items-center d-flex  my-4 whitespace"
            onClick={() => openRoutes("profile")}
          >
            <span className="px-2">
              <ProfileIcon />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">Profile</p>
          </div>
          <div
            className="cn-sidebar-active-tag align-items-center d-flex  my-4 whitespace"
            onClick={() => openRoutes("payment")}
          >
            <span className="px-2">
              <Payment />
            </span>
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">
              Payment Details
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className=" px-lg-4 pt-4 d-lg-none d-flex flex-column mb-5">
          <div className="d-flex align-items-center mb-3 justify-content-between">
            <p className="cn-sidebar-text text-end mb-0">Dashboard</p>
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
}

export default withRouter(SidebarDashboard);
