// import { NavLink, withRouter } from "react-router-dom";
// import { useSelector } from "react-redux";
// import "../common/SideBar/Sidebar.css";

// const PortfoliosSidebar = ({ sidebarActive, setPortfoliosId }) => {
//   const dashboardPortfoliosList = useSelector(
//     (state) => state.list.dashboardPortfoliosList
//   );

//   return (
//     <div className={`${sidebarActive ? "hamburgur-active" : ""}`}>
//       <div className="w-350 wrapper d-flex justify-content-center bg-white  h-60vh p-4">
//         <div className=" mt-5 w-100  ">
//           <p className=" mt-2 profile-heading pr-15 ml-2 pb-2 border-b-1">
//             Portfolios
//           </p>
//           <nav>
//             <ul className="l-s-t-none cursor-pointer pr-15 admin-hover mt-5 ">
//               {dashboardPortfoliosList && dashboardPortfoliosList.length
//                 ? dashboardPortfoliosList.map((value) => {
//                     return (
//                       <NavLink
//                         to={`/protfolios/stock/${value._id}`}
//                         activeClassName="active"
//                         onClick={() => setPortfoliosId(value._id)}
//                       >
//                         <li className={`pt-13 pb-13 mt-15 `}>
//                           <span>{value.title}</span>
//                         </li>
//                       </NavLink>
//                     );
//                   })
//                 : null}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default withRouter(PortfoliosSidebar);
import React, { useState } from "react";
import { withRouter } from "react-router";
import Cancel from "../../assets/img/cancel.png";
import { Back } from "../common/icons/Icons";
const PortfoliosSidebar = ({ history }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const openRoutes = (value) => {
    setShowSidebar(false);
    if (value === "protfolios") {
      history.push(`/protfolios/stock/${value._id}`);
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
          className={`${showSidebar ? "right-0" : "right-350"} 
          }  bg-white content-manager-sidebar shadow px-3 pt-4`}
        >
          <div className="d-flex align-items-center justify-content-between mb-2">
            <p className="cn-sidebar-text mb-0">Portfolios</p>

            <img
              className="cancel-icon cursor-pointer"
              onClick={() => openRoutes()}
              src={Cancel}
              alt=""
            />
          </div>
          <div className="cn-sidebar-border"></div>
          <div
            className="cn-sidebar-active-tag align-items-center d-flex  my-4 whitespace"
            onClick={() => openRoutes("protfolios")}
          >
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">Portfolio-1</p>
          </div>
          <div
            className="cn-sidebar-active-tag align-items-center d-flex  my-4 whitespace"
            onClick={() => openRoutes("protfolios")}
          >
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">Portfolio-2</p>
          </div>
          <div
            className="cn-sidebar-active-tag align-items-center d-flex my-4 whitespace"
            onClick={() => openRoutes("protfolios")}
          >
            <p className="cn-sidebar-texts px-sm-3 px-2 mb-0 ">Portfolio-3</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className=" px-lg-4 pt-4 d-lg-none d-flex flex-column mb-5">
          <div className="d-flex align-items-center mb-3 justify-content-between">
            <p className="cn-sidebar-text text-end mb-0">Portfolios</p>
            <span
              className="cursor-pointer"
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

export default withRouter(PortfoliosSidebar);
