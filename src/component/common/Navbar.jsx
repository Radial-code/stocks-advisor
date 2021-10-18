// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import UserDropDown from "./UserDropDown";
// import England from "../../assets/img/england.png";
// import Arbic from "../../assets/img/arbic.png";
// import { LogoutAction } from "../../redux/action/auth";
// import logo from "../../assets/img/Navbar-logo-img.png";
// import { useFixedScreenProvider } from "../../contexts/FixedScreenProvider";
import {
  HamburgerIcon,
  HamburgerCrossIcon,
  SearchMagnifyIcon,
  SearchWhiteIcon,
} from "./icons/Icons";
import "./NavBar.css";
// import { Drop } from "../common/icons/Icons";
// import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";
// import Loader from "./Loader";

// const Navbar = () => {
//   const { setLayoutClickChanger, layoutClickChanger } =
//     useLayoutChangerProvider();
//   const dispatch = useDispatch();
//   const userData = useSelector((state) => state.auth.userData);
//   const [student, setStudent] = useState(false);
//   const { setScreenFixed } = useFixedScreenProvider();
//   const [HomeActive, setHomeActive] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [AboutActive, setAboutActive] = useState(false);
//   const [NewsActive, setNewsActive] = useState(false);
//   const [LangActive, setLangActive] = useState(false);
//   const [Lang, setLang] = useState(false);
//   const [dropdown, setdropdown] = useState(false);

//   const [PlansActive, setPlansActive] = useState(false);
//   const [ContactActive, setContactActive] = useState(false);
//   const [PortfolioActive, setPortfolioActive] = useState(false);
//   const [DashboardActive, setDashboardActive] = useState(false);
//   const [LoginActive, setLoginActive] = useState(false);

//   const initialLanguage = localStorage.getItem("stock-advisor-lang")
//     ? localStorage.getItem("stock-advisor-lang")
//     : "Arabic";
//   const [Language, setLanguage] = useState(initialLanguage);
//   const auth = useSelector((state) => state.auth.auth);
//   const token = useSelector((state) => state.auth.token);
//   const dashboardPortfoliosList = useSelector(
//     (state) => state.list.dashboardPortfoliosList
//   );
//   const dashboardPortfoliosListId =
//     dashboardPortfoliosList &&
//     dashboardPortfoliosList.length &&
//     dashboardPortfoliosList[0]._id;

//   const dropHandler = () => {
//     setStudent(!student);
//   };
//   let history = useHistory();

//   if (layoutClickChanger) {
//     document.dir = "rtl";
//   } else {
//     document.dir = "ltr";
//   }

//   const layoutleftChangeHandler = () => {
//     setLayoutClickChanger(true);
//     setLanguage("Arabic");
//     localStorage.setItem("stock-advisor-lang", "Arabic");
//     setLang(false);
//   };

//   const layoutrightChangeHandler = () => {
//     setLayoutClickChanger(false);
//     setLanguage("English");
//     localStorage.setItem("stock-advisor-lang", "English");
//     setLang(false);
//   };
//   // ACTIVE HEADER AS PATH
//   const pathName = window.location.pathname;
//   useEffect(() => {
//     if (window.location.pathname.includes("protfolios/stock")) {
//       setHomeActive(false);
//       setAboutActive(false);
//       setNewsActive(false);
//       setPlansActive(false);
//       setLangActive(false);
//       setContactActive(false);
//       setPortfolioActive(true);
//       setDashboardActive(false);
//       setLoginActive(false);
//     } else if (pathName === "/") {
//       setHomeActive(true);
//       setAboutActive(false);
//       setNewsActive(false);
//       setPlansActive(false);
//       setContactActive(false);
//       setPortfolioActive(false);
//       setLangActive(false);
//       setDashboardActive(false);
//       setLoginActive(false);
//     } else if (pathName === "/about") {
//       setHomeActive(false);
//       setAboutActive(true);
//       setNewsActive(false);
//       setPlansActive(false);
//       setContactActive(false);
//       setLangActive(false);
//       setPortfolioActive(false);
//       setDashboardActive(false);
//       setLoginActive(false);
//     } else if (pathName === "/news") {
//       setHomeActive(false);
//       setAboutActive(false);
//       setNewsActive(true);
//       setPlansActive(false);
//       setContactActive(false);
//       setLangActive(false);
//       setPortfolioActive(false);
//       setDashboardActive(false);
//       setLoginActive(false);
//     } else if (pathName === "/our-plan") {
//       setHomeActive(false);
//       setAboutActive(false);
//       setNewsActive(false);
//       setPlansActive(true);
//       setLangActive(false);
//       setContactActive(false);
//       setPortfolioActive(false);
//       setDashboardActive(false);
//       setLoginActive(false);
//     } else if (pathName === "/contact-us") {
//       setHomeActive(false);
//       setAboutActive(false);
//       setNewsActive(false);
//       setPlansActive(false);
//       setContactActive(true);
//       setLangActive(false);
//       setPortfolioActive(false);
//       setDashboardActive(false);
//       setLoginActive(false);
//     } else if (pathName === "/login") {
//       setHomeActive(false);
//       setAboutActive(false);
//       setNewsActive(false);
//       setPlansActive(false);
//       setLangActive(false);
//       setContactActive(false);
//       setPortfolioActive(false);
//       setDashboardActive(false);
//       setLoginActive(true);
//     }
//   }, [pathName]);

//   const [click, setClick] = useState(false);

//   const handleClick = () => {
//     setClick(!click);
//     setScreenFixed((pre) => !pre);
//   };
//   const Close = () => setClick(false);

//   return (
//     <>
//       <div className={click ? "main-container" : ""} onClick={() => Close()}>
//         <nav className="navbar" onClick={(e) => e.stopPropagation()}>
//           <div className="container mx-4 mx-sm-auto justify-content-between">
//             <div>
//               <NavLink exact to="/" className="nav-logo logo-img-navbar">
//                 <img className="logo-img-navbar" src={logo} alt="" />
//               </NavLink>
//             </div>

//             <ul
//               className={`${
//                 click ? "nav-menu active" : "nav-menu"
//               } scroll-sm-bar`}
//             >
//               <div className="d-md-flex align-items-xl-center mt-md-4 w-100 justify-content-xl-between justify-content-around ">
//                 <li className=" d-md-none d-flex justify-content-between mt-4">
//                   <div className="d-flex justify-content-start">
//                     <li className="items-nav  d-xl-none my-auto d-block mr-0">
//                       <div
//                         onClick={handleClick}
//                         className="cursor-pointer close-btn-nav"
//                       >
//                         <HamburgerCrossIcon />
//                       </div>
//                     </li>
//                   </div>
//                   <div className="search-input">
//                     <input
//                       type="text"
//                       className="border-0 w-100"
//                       placeholder="Search"
//                     />
//                     <button className="btn-search-input">
//                       <SearchMagnifyIcon />
//                     </button>
//                   </div>
//                 </li>
//                 <div className="d-xl-flex align-items-center">
//                   <div className="d-xl-none">
//                     <NavLink exact to="/" className="nav-logo logo-img-navbar">
//                       <img className="logo-img-navbar my-3" src={logo} alt="" />
//                     </NavLink>
//                   </div>
//                   <li
//                     className={`${
//                       HomeActive ? "green-bg-active" : ""
//                     } nav-item `}
//                   >
//                     <NavLink
//                       exact
//                       to="/"
//                       activeClassName="active"
//                       className="nav-links"
//                       onClick={click ? handleClick : null}
//                     >
//                       Home
//                     </NavLink>
//                   </li>

//                   <li
//                     className={`${
//                       AboutActive ? "green-bg-active" : ""
//                     } nav-item `}
//                   >
//                     <NavLink
//                       exact
//                       to="/about"
//                       activeClassName="active"
//                       className="nav-links"
//                       onClick={click ? handleClick : null}
//                     >
//                       About
//                     </NavLink>
//                   </li>

//                   <li
//                     className={`${
//                       NewsActive ? "green-bg-active" : ""
//                     } nav-item `}
//                   >
//                     <NavLink
//                       exact
//                       to="/news"
//                       activeClassName="active"
//                       className="nav-links"
//                       onClick={click ? handleClick : null}
//                     >
//                       News
//                     </NavLink>
//                   </li>

//                   <li
//                     className={`${
//                       PlansActive ? "green-bg-active" : ""
//                     } nav-item `}
//                   >
//                     <NavLink
//                       exact
//                       to="/our-plan"
//                       activeClassName="active"
//                       className="nav-links"
//                       onClick={click ? handleClick : null}
//                     >
//                       Our Plans
//                     </NavLink>
//                   </li>

//                   <li
//                     className={`${
//                       ContactActive ? "green-bg-active" : ""
//                     } nav-item `}
//                   >
//                     <NavLink
//                       exact
//                       to="/contact-us"
//                       activeClassName="active"
//                       className="nav-links"
//                       onClick={click ? handleClick : null}
//                     >
//                       Contact Us
//                     </NavLink>
//                   </li>
//                   <span>
//                     <li onClick={() => setLang(!Lang)}>
//                       <NavLink
//                         exact
//                         to="#"
//                         activeClassName="active"
//                         className="nav-links drop-down"
//                       >
//                         {layoutClickChanger ? (
//                           <span className="px-1 ">
//                             {" "}
//                             <Drop />
//                           </span>
//                         ) : null}
//                         {Language}
//                         {layoutClickChanger ? null : (
//                           <span className="px-1 ">
//                             {" "}
//                             <Drop />
//                           </span>
//                         )}
//                       </NavLink>
//                     </li>
//                     {Lang ? (
//                       <div className="bg-white shadow p-2 rounded position-absolute">
//                         {" "}
//                         <span
//                           onClick={layoutrightChangeHandler}
//                           className="d-flex px-2 py-1 cursor-pointer fw-normal"
//                         >
//                           English{" "}
//                           <img
//                             className="flag-img  mx-2 "
//                             src={England}
//                             alt="England"
//                           />
//                         </span>
//                         <span
//                           onClick={layoutleftChangeHandler}
//                           className="d-flex px-2 py-1 cursor-pointer fw-normal"
//                         >
//                           Arabic{" "}
//                           <img className="flag-img mx-2" src={Arbic} alt="" />{" "}
//                         </span>
//                       </div>
//                     ) : (
//                       ""
//                     )}
//                   </span>
//                   {/* Drop down end here */}
//                   {auth && !!token ? (
//                     <li className="nav-item d-xl-none d-flex">
//                       <NavLink
//                         exact
//                         to={
//                           userData.isAdmin
//                             ? "/content/manager/stocks"
//                             : "/dashboard/view/profile"
//                         }
//                         activeClassName="active"
//                         className="nav-links"
//                         onClick={click ? handleClick : null}
//                       >
//                         <span>Dashboard</span>
//                       </NavLink>
//                     </li>
//                   ) : (
//                     ""
//                   )}
//                   {console.log("dropdown", dropdown)}
//                   {dropdown ? (
//                     <div
//                       className="bg-white shadow p-2  rounded position-absolute"
//                       style={{ bottom: "-95px" }}
//                     >
//                       {" "}
//                       <p className=" px-2 py-1 cursor-pointer fw-normal text-center mb-0">
//                         User Profile
//                       </p>
//                       <p className=" px-2 py-1 cursor-pointer fw-normal text-center">
//                         Admin DashBoard
//                       </p>
//                     </div>
//                   ) : (
//                     ""
//                   )}

//                   <li className="nav-item d-md-block d-none d-xl-none">
//                     <NavLink
//                       exact
//                       to={`/protfolios/stock/${dashboardPortfoliosListId}`}
//                       activeClassName="active"
//                       className="nav-links"
//                       onClick={click ? handleClick : null}
//                     >
//                       Portfolios
//                     </NavLink>
//                   </li>

//                   {/*start here drop down  */}
//                   {auth && !!token ? (
//                     <li
//                       onClick={() =>
//                         history.push(
//                           `/protfolios/stock/${dashboardPortfoliosListId}`
//                         )
//                       }
//                       className={` nav-item  d-md-none ${
//                         student ? "drop-down-active" : ""
//                       }`}
//                     >
//                       <a className="d-flex  nav-links justify-content-between align-items-center">
//                         Portfolios
//                         <span
//                           className={`ml-20 ${
//                             student ? "sidebardropdown" : ""
//                           }`}
//                         >
//                           <span className="plus">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="16"
//                               height="16"
//                               fill="currentColor"
//                               className="bi bi-plus"
//                               viewBox="0 0 16 16"
//                             >
//                               <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
//                             </svg>
//                           </span>
//                           <span className="subs">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width="16"
//                               height="16"
//                               fill="currentColor"
//                               className="bi bi-dash bg-5CBD4C"
//                               viewBox="0 0 16 16"
//                             >
//                               <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
//                             </svg>{" "}
//                           </span>
//                         </span>
//                       </a>
//                     </li>
//                   ) : (
//                     ""
//                   )}

//                   {auth && !!token ? (
//                     <div className="d-flex d-xl-none  flex-lg-row flex-column  align-items-sm-start  align-items-center">
//                       <div className="d-md-none d-flex">
//                         <UserDropDown />
//                       </div>
//                       {/* <UserDropDown />s */}
//                       <div className="w-100 me-2 me-sm-0 mt-2 text-sm-end text-center">
//                         <button
//                           type="button"
//                           onClick={() => dispatch(LogoutAction(history))}
//                           className="update-btn "
//                         >
//                           Log Out
//                         </button>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="d-xl-none d-flex flex-md-row  flex-column justify-content-center">
//                       <button
//                         className="form-btn px-4 mt-2"
//                         onClick={() => history.push("/login")}
//                       >
//                         Login
//                       </button>
//                       <button
//                         onClick={() => history.push("/signup")}
//                         className="update-btn ms-md-3 mt-2"
//                       >
//                         Join Now
//                       </button>
//                     </div>
//                   )}
//                   <div
//                     className={`${
//                       layoutClickChanger
//                         ? "d-flex flex-sm-row flex-column justify-content-start-end "
//                         : "d-flex flex-sm-row flex-column justify-content-end "
//                     }`}
//                   >
//                     {/* <li className=" d-flex d-xl-none flex-column align-items-center">
//                       <NavLink
//                         exact
//                         to="/signup"
//                         activeClassName="active"
//                         className="nav-links d-flex justify-content-center"
//                         onClick={click ? handleClick : null}
//                       >
//                         <button className="update-btn">Join Now</button>
//                       </NavLink>
//                     </li> */}
//                   </div>
//                 </div>

//                 <div className="d-xl-flex align-items-center">
//                   {auth && !!token && userData.isPaidPlan ? (
//                     <>
//                       <li className=" d-none d-xl-block">
//                         <input
//                           type="search"
//                           className="search-icon-input-header"
//                           placeholder="search"
//                         />
//                       </li>
//                       <li className="nav-item d-none d-xl-block">
//                         <NavLink
//                           exact
//                           to={`/protfolios/stock/${dashboardPortfoliosListId}`}
//                           activeClassName="active"
//                           className="nav-links"
//                           onClick={click ? handleClick : null}
//                         >
//                           Portfolios
//                         </NavLink>
//                       </li>
//                     </>
//                   ) : (
//                     ""
//                   )}
//                   {auth && !!token ? (
//                     <li className="nav-item d-xl-flex d-none">
//                       <NavLink
//                         exact
//                         to={
//                           userData.isAdmin
//                             ? "/content/manager/stocks"
//                             : "/dashboard/view/profile"
//                         }
//                         activeClassName="active"
//                         className="nav-links"
//                         onClick={click ? handleClick : null}
//                       >
//                         Dashboard
//                       </NavLink>
//                     </li>
//                   ) : (
//                     ""
//                   )}
//                   {auth && !!token ? (
//                     <div className="d-xl-flex flex-lg-row flex-column d-none align-items-sm-start  align-items-center">
//                       <UserDropDown
//                         onClick={() =>
//                           history.push(
//                             userData.isAdmin
//                               ? "/content/manager/stocks"
//                               : "/dashboard/view/profile"
//                           )
//                         }
//                       />
//                       <div
//                         className={`${
//                           layoutClickChanger
//                             ? "w-100 me-2 me-sm-0 mt-2 text-sm-end text-center"
//                             : "w-100  mt-2 text-sm-end text-center"
//                         }`}
//                       >
//                         <button
//                           type="button"
//                           onClick={() =>
//                             dispatch(LogoutAction(setLoading, history))
//                           }
//                           className="update-btn "
//                         >
//                           {loading ? <Loader /> : "Log Out"}
//                         </button>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="d-xl-flex d-none">
//                       <button
//                         className="form-btn px-4"
//                         onClick={() => history.push("/login")}
//                       >
//                         Login
//                       </button>
//                       <button
//                         onClick={() => history.push("/signup")}
//                         className="update-btn mx-3"
//                       >
//                         Join Now
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </ul>
//             <div className="nav-icon d-flex d-xl-none   align-items-center">
//               <li className=" d-md-flex d-none">
//                 <input
//                   type="search"
//                   className="search-icon-input-header py-0"
//                   placeholder="search"
//                 />
//               </li>
//               <div className="d-md-flex d-none">
//                 <UserDropDown />
//               </div>
//               <div onClick={handleClick}>
//                 {" "}
//                 <HamburgerIcon />
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };
// export default Navbar;

import React from "react";
import logo from "../../assets/img/Navbar-logo-img.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";

const Navbar = () => {
  const [searchshow, setSearchShow] = useState(false);
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);
  const userData = useSelector((state) => state.auth.userData);

  const [Language, setLanguage] = useState(
    localStorage.getItem("stock-advisor-lang")
  );
  const auth = useSelector((state) => state.auth.auth);
  const token = useSelector((state) => state.auth.token);
  const dashboardPortfoliosList = useSelector(
    (state) => state.list.dashboardPortfoliosList
  );
  const dashboardPortfoliosListId =
    dashboardPortfoliosList &&
    dashboardPortfoliosList.length &&
    dashboardPortfoliosList[0]._id;

  return (
    <>
      <div
        className={`${
          navbarCollapsed
            ? "bg-white shadow py-3  d-none d-xl-block border-bottom-2px"
            : "stock-sidebar-navbar d-block "
        }`}
      >
        <div className="container">
          <div className="d-flex flex-xl-row flex-column align-items-xl-center justify-content-between">
            <div className="d-flex flex-xl-row flex-column">
              <NavLink
                exact
                to="/"
                className="nav-logo d-none d-xl-block logo-img-navbar"
              >
                <img className="logo-img-navbar" src={logo} alt="" />
              </NavLink>
              <div
                className="d-block mt-3 d-xl-none"
                onClick={() => setNavbarCollapsed(true)}
              >
                <HamburgerCrossIcon />
              </div>
              <div className="position-relative  mt-3 d-xl-none d-block ">
                <input
                  type="search"
                  className="search-box-nav py-2   px-xxl-3"
                  id="search"
                  placeholder="Search..."
                />
                <div className="search-green-icon cursor-pointer top-0 left-80 left-374-61   position-absoulte">
                  <SearchWhiteIcon />
                </div>
              </div>
              <NavLink
                exact
                to="/"
                activeClassName="active_underline_navbar "
                className="navbar_Links_text nav-text-border-bottom  py-2  py-xl-3 mt-3 my-xl-auto mx-xl-4 "
              >
                Home
              </NavLink>
              <NavLink
                exact
                to="/about"
                activeClassName="active_underline_navbar"
                className="navbar_Links_text nav-text-border-bottom  py-2   py-xl-3 mt-3 my-xl-auto"
              >
                About
              </NavLink>
              <NavLink
                activeClassName="active_underline_navbar"
                exact
                to="/news"
                className="navbar_Links_text nav-text-border-bottom py-2  py-xl-3 mx-xl-4 mt-3 my-xl-auto "
              >
                News
              </NavLink>
              <NavLink
                exact
                activeClassName="active_underline_navbar"
                to="/our-plan"
                className="navbar_Links_text nav-text-border-bottom py-2  py-xl-3 mt-3 my-xl-auto"
              >
                Our Plans
              </NavLink>
              <NavLink
                exact
                to="/contact-us"
                activeClassName="active_underline_navbar"
                className="navbar_Links_text nav-text-border-bottom mx-xl-4 py-2  py-xl-3 mt-3 my-xl-auto "
              >
                Contact Us
              </NavLink>
            </div>

            <div className="d-flex  flex-xl-row flex-column">
              <span class="icon d-none d-xl-block my-auto mx-3">
                {searchshow ? (
                  <div className="position-relative">
                    <input
                      type="search"
                      className="mx-3 search-box-nav py-2 px-xxl-3"
                      id="search"
                      placeholder="Search..."
                    />

                    <div className="search-green-icon cursor-pointer  top-10 left-20 position-absoulte">
                      <SearchWhiteIcon />
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {searchshow ? (
                  ""
                ) : (
                  <span
                    class="icon cursor-pointer"
                    onClick={() => setSearchShow(!searchshow)}
                  >
                    <i class="fa fa-search"></i>
                  </span>
                )}
              </span>
              {auth ? (
                <div className="d-flex profile-box-name mx-0 mx-xl-2 justify-content-center align-items-center">
                  {" "}
                  <span className="first-char">P</span>
                  <span className="first-char">P</span>{" "}
                </div>
              ) : (
                ""
              )}
              <Dropdown className="d-flex mx-0 mx-xl-2  stock-dashboard-dropdown  align-items-center">
                <Dropdown.Toggle id="dropdown-basic">Lang</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Arbic</Dropdown.Item>
                  <Dropdown.Item>English</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {auth ? (
                <>
                  <NavLink
                    exact
                    to={`/protfolios/stock/${dashboardPortfoliosListId}`}
                    className="navbar_Links_text my-auto my-xl-auto mt-3 py-2 py-xl-3 nav-text-border-bottom mx-0 mx-xl-2"
                  >
                    Portfolio
                  </NavLink>

                  {/* <NavLink
                    exact
                    to={
                      userData.isAdmin
                        ? "/content/manager/stocks"
                        : "/dashboard/view/profile"
                    }
                    data-toggle="dropdown"
                    className="dropdown-toggle navbar_Links_text my-auto my-xl-auto mt-3 py-2 py-xl-3 nav-text-border-bottom mx-xxl-4 mx-xl-3 "
                  >
                    Dashboard
                  </NavLink> */}

                  <Dropdown className="d-flex mx-0 mx-xl-2  stock-dashboard-dropdown  align-items-center">
                    <Dropdown.Toggle id="dropdown-basic">
                      Dashboard
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>User Dashboard</Dropdown.Item>
                      <Dropdown.Item>Admin Dashboard</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                ""
              )}
              {auth ? (
                <div className="mx-xl-2 mx-0    my-auto ">
                  <button className="mt-4 mt-xl-0 py-2  btn join_now_btn ">
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="mx-xl-2 mx-0    my-auto ">
                  <button className="mt-4 mt-xl-0 py-2  btn join_now_btn ">
                    Join Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="shadow py-2 d-block d-xl-none ">
        <div className="container ">
          <div className="row">
            <div className="col-6">
              <img src={logo} className=" w-sm-80 h-sm-80" alt="" />
            </div>
            <div className="col-6 my-auto">
              <div
                className="cursor-pointer  text-start "
                onClick={() => setNavbarCollapsed(!navbarCollapsed)}
              >
                <HamburgerIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// import React from "react";

// function Navbar() {
//   return <div></div>;
// }

// export default Navbar;
