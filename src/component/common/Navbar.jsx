import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import UserDropDown from "./UserDropDown";
import England from "../../assets/img/england.png";
import Arbic from "../../assets/img/arbic.png";
import { LogoutAction } from "../../redux/action/auth";
import logo from "../../assets/img/Navbar-logo-img.png";
import { useFixedScreenProvider } from "../../contexts/FixedScreenProvider";
import {
  HamburgerIcon,
  HamburgerCrossIcon,
  SearchMagnifyIcon,
} from "./icons/Icons";
import "./NavBar.css";
import { Drop } from "../common/icons/Icons";

const Navbar = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const [student, setStudent] = useState(false);
  const { setScreenFixed } = useFixedScreenProvider();
  const [HomeActive, setHomeActive] = useState(false);
  const [AboutActive, setAboutActive] = useState(false);
  const [NewsActive, setNewsActive] = useState(false);
  const [LangActive, setLangActive] = useState(false);
  const [Lang, setLang] = useState(false);

  const [PlansActive, setPlansActive] = useState(false);
  const [ContactActive, setContactActive] = useState(false);
  const [PortfolioActive, setPortfolioActive] = useState(false);
  const [DashboardActive, setDashboardActive] = useState(false);
  const [LoginActive, setLoginActive] = useState(false);
  const auth = useSelector((state) => state.auth.auth);
  const token = useSelector((state) => state.auth.token);
  const dashboardPortfoliosList = useSelector(
    (state) => state.list.dashboardPortfoliosList
  );
  const dashboardPortfoliosListId =
    dashboardPortfoliosList &&
    dashboardPortfoliosList.length &&
    dashboardPortfoliosList[0]._id;

  const dropHandler = () => {
    setStudent(!student);
  };
  let history = useHistory();

  // ACTIVE HEADER AS PATH
  const pathName = window.location.pathname;
  useEffect(() => {
    if (pathName === "/") {
      setHomeActive(true);
      setAboutActive(false);
      setNewsActive(false);
      setPlansActive(false);
      setContactActive(false);
      setPortfolioActive(false);
      setLangActive(false);
      setDashboardActive(false);
      setLoginActive(false);
    } else if (pathName === "/about") {
      setHomeActive(false);
      setAboutActive(true);
      setNewsActive(false);
      setPlansActive(false);
      setContactActive(false);
      setLangActive(false);
      setPortfolioActive(false);
      setDashboardActive(false);
      setLoginActive(false);
    } else if (pathName === "/news") {
      setHomeActive(false);
      setAboutActive(false);
      setNewsActive(true);
      setPlansActive(false);
      setContactActive(false);
      setLangActive(false);
      setPortfolioActive(false);
      setDashboardActive(false);
      setLoginActive(false);
    } else if (pathName === "/our-plan") {
      setHomeActive(false);
      setAboutActive(false);
      setNewsActive(false);
      setPlansActive(true);
      setLangActive(false);
      setContactActive(false);
      setPortfolioActive(false);
      setDashboardActive(false);
      setLoginActive(false);
    } else if (pathName === "/contact-us") {
      setHomeActive(false);
      setAboutActive(false);
      setNewsActive(false);
      setPlansActive(false);
      setContactActive(true);
      setLangActive(false);
      setPortfolioActive(false);
      setDashboardActive(false);
      setLoginActive(false);
    } else if (pathName === `/protfolios/stock/${dashboardPortfoliosListId}`) {
      setHomeActive(false);
      setAboutActive(false);
      setNewsActive(false);
      setPlansActive(false);
      setLangActive(false);
      setContactActive(false);
      setPortfolioActive(true);
      setDashboardActive(false);
      setLoginActive(false);
    } else if (pathName === "/login") {
      setHomeActive(false);
      setAboutActive(false);
      setNewsActive(false);
      setPlansActive(false);
      setLangActive(false);
      setContactActive(false);
      setPortfolioActive(false);
      setDashboardActive(false);
      setLoginActive(true);
    } else if (pathName === "/") {
      setHomeActive(false);
      setAboutActive(false);
      setNewsActive(false);
      setPlansActive(false);
      setLangActive(true);
      setContactActive(false);
      setPortfolioActive(false);
      setDashboardActive(false);
      setLoginActive(false);
    }
  }, [pathName]);

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setScreenFixed((pre) => !pre);
  };
  const Close = () => setClick(false);

  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()}>
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="container mx-4 mx-sm-auto justify-content-between">
            <div>
              <NavLink exact to="/" className="nav-logo logo-img-navbar">
                <img className="logo-img-navbar" src={logo} alt="" />
              </NavLink>
            </div>

            <ul
              className={`${
                click ? "nav-menu active" : "nav-menu"
              } scroll-sm-bar`}
            >
              <div className="d-md-flex align-items-xl-center mt-md-4 w-100 justify-content-xl-between justify-content-around ">
                <li className=" d-md-none d-flex justify-content-between mt-4">
                  <div className="d-flex justify-content-start">
                    <li className="items-nav mt-0 d-xl-none d-block mr-0">
                      <div
                        onClick={handleClick}
                        className="cursor-pointer close-btn-nav"
                      >
                        <HamburgerCrossIcon />
                      </div>
                    </li>
                  </div>
                  <div className="search-input">
                    <input
                      type="text"
                      className="border-0 w-100"
                      placeholder="Search"
                    />
                    <button className="btn-search-input">
                      <SearchMagnifyIcon />
                    </button>
                  </div>
                </li>
                <div className="d-xl-flex align-items-center">
                  <div className="d-xl-none">
                    <NavLink exact to="/" className="nav-logo logo-img-navbar">
                      <img className="logo-img-navbar my-3" src={logo} alt="" />
                    </NavLink>
                  </div>
                  <li
                    className={`${
                      HomeActive ? "green-bg-active" : ""
                    } nav-item `}
                  >
                    <NavLink
                      exact
                      to="/"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      Home
                    </NavLink>
                  </li>

                  <li
                    className={`${
                      AboutActive ? "green-bg-active" : ""
                    } nav-item `}
                  >
                    <NavLink
                      exact
                      to="/about"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      About
                    </NavLink>
                  </li>

                  <li
                    className={`${
                      NewsActive ? "green-bg-active" : ""
                    } nav-item `}
                  >
                    <NavLink
                      exact
                      to="/news"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      News
                    </NavLink>
                  </li>

                  <li
                    className={`${
                      PlansActive ? "green-bg-active" : ""
                    } nav-item `}
                  >
                    <NavLink
                      exact
                      to="/our-plan"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      Our Plans
                    </NavLink>
                  </li>
                  <span>
                    <li
                      onClick={() => setLang(!Lang)}
                      className={`${
                        LangActive ? "green-bg-active" : ""
                      } nav-item `}
                    >
                      <NavLink
                        exact
                        to="/"
                        activeClassName="active"
                        className="nav-links"
                        onClick={click ? handleClick : null}
                      >
                        <span className="ps-1">
                          {" "}
                          <Drop />
                        </span>
                        Lang
                      </NavLink>
                    </li>
                    {Lang ? (
                      <div className="bg-white shadow p-2 rounded position-absolute">
                        {" "}
                        <span className="d-flex px-2 py-1 cursor-pointer">
                          English{" "}
                          <img
                            className="flag-img  mx-2 "
                            src={England}
                            alt="England"
                          />
                        </span>
                        <span className="d-flex px-2 py-1 cursor-pointer">
                          Arabic{" "}
                          <img className="flag-img mx-2" src={Arbic} alt="" />{" "}
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </span>

                  <li
                    className={`${
                      ContactActive ? "green-bg-active" : ""
                    } nav-item `}
                  >
                    <NavLink
                      exact
                      to="/contact-us"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  {/* Drop down end here */}
                  {auth && !!token ? (
                    <li className="nav-item d-xl-none d-flex">
                      <NavLink
                        exact
                        to={
                          userData.isAdmin
                            ? "/content/manager/stocks"
                            : "/dashboard/view/profile"
                        }
                        activeClassName="active"
                        className="nav-links"
                        onClick={click ? handleClick : null}
                      >
                        Dashboard
                      </NavLink>
                    </li>
                  ) : (
                    ""
                  )}
                  <li className="nav-item d-md-block d-none d-xl-none">
                    <NavLink
                      exact
                      to={`/protfolios/stock/${dashboardPortfoliosListId}`}
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      Portfolios
                    </NavLink>
                  </li>

                  {/*start here drop down  */}
                  {auth && !!token ? (
                    <li
                      onClick={dropHandler}
                      className={` nav-item  d-md-none ${
                        student ? "drop-down-active" : ""
                      }`}
                    >
                      <a className="d-flex  nav-links justify-content-between align-items-center">
                        Portfolios
                        <span
                          className={`ml-20 ${
                            student ? "sidebardropdown" : ""
                          }`}
                        >
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
                  ) : (
                    ""
                  )}
                  <li className=" drop-item d-md-none mr-0">
                    <div
                      className={`drop-none w-100   ${
                        student ? "sidebardropdown" : ""
                      }`}
                    >
                      <ul className="py-2 w-100 drop-down-list">
                        <li>
                          <NavLink
                            exact
                            to="/portfolio/portfolio1"
                            activeClassName=""
                            className=""
                            onClick={click ? handleClick : null}
                          >
                            <div className="all-student">
                              <span>Portfolio-1</span>
                            </div>
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
                            exact
                            to="/portfolio/portfolio2"
                            activeClassName=""
                            className=""
                            onClick={click ? handleClick : null}
                          >
                            <div className="all-student">
                              <span>Portfolio-2</span>
                            </div>
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
                            exact
                            to="/portfolio/portfolio3"
                            activeClassName=""
                            className=""
                            onClick={click ? handleClick : null}
                          >
                            <div className="all-student">
                              <span>Portfolio-3</span>
                            </div>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {auth && !!token ? (
                    <div className="d-flex d-xl-none  flex-lg-row flex-column  align-items-sm-start  align-items-center">
                      <div className="d-md-none d-flex">
                        <UserDropDown />
                      </div>
                      {/* <UserDropDown />s */}
                      <div className="w-100 me-2 me-sm-0 mt-2 text-sm-end text-center">
                        <button
                          type="button"
                          onClick={() => dispatch(LogoutAction(history))}
                          className="update-btn "
                        >
                          Log Out
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="d-xl-none d-flex flex-md-row  flex-column justify-content-center">
                      <button
                        className="form-btn px-4 mt-2"
                        onClick={() => history.push("/login")}
                      >
                        Login
                      </button>
                      <button
                        onClick={() => history.push("/signup")}
                        className="update-btn me-md-3 mt-2"
                      >
                        Join Now
                      </button>
                    </div>
                  )}
                  <div className="d-flex flex-sm-row flex-column justify-content-start-end ">
                    <li className=" d-flex d-xl-none flex-column align-items-center">
                      <NavLink
                        exact
                        to="/signup"
                        activeClassName="active"
                        className="nav-links d-flex justify-content-center"
                        onClick={click ? handleClick : null}
                      >
                        <button className="update-btn">Join Now</button>
                      </NavLink>
                    </li>
                  </div>
                </div>

                <div className="d-xl-flex align-items-center">
                  {auth && !!token && userData.isPaidPlan ? (
                    <>
                      <li className=" d-none d-xl-block">
                        <input
                          type="search"
                          className="search-icon-input-header"
                          placeholder="search"
                        />
                      </li>
                      <li className="nav-item d-none d-xl-block">
                        <NavLink
                          exact
                          to={`/protfolios/stock/${dashboardPortfoliosListId}`}
                          activeClassName="active"
                          className="nav-links"
                          onClick={click ? handleClick : null}
                        >
                          Portfolios
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    ""
                  )}
                  {/*start here drop down  */}
                  {/* {auth && !!token ? (
                    <li
                      onClick={dropHandler}
                      className={` nav-item  d-md-none ${
                        student ? "drop-down-active" : ""
                      }`}
                    >
                      <a className="d-flex  nav-links justify-content-between align-items-center">
                        Portfolios
                        <span
                          className={`ml-20 ${
                            student ? "sidebardropdown" : ""
                          }`}
                        >
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
                  ) : (
                    ""
                  )}
                  <li className=" drop-item d-md-none">
                    <div
                      className={`drop-none w-100   ${
                        student ? "sidebardropdown" : ""
                      }`}
                    >
                      <ul className="py-2 w-100 drop-down-list">
                        <li>
                          <NavLink
                            exact
                            to="/portfolio/portfolio1"
                            activeClassName=""
                            className=""
                            onClick={click ? handleClick : null}
                          >
                            <div className="all-student">
                              <span>Portfolio-1</span>
                            </div>
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
                            exact
                            to="/portfolio/portfolio2"
                            activeClassName=""
                            className=""
                            onClick={click ? handleClick : null}
                          >
                            <div className="all-student">
                              <span>Portfolio-2</span>
                            </div>
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
                            exact
                            to="/portfolio/portfolio3"
                            activeClassName=""
                            className=""
                            onClick={click ? handleClick : null}
                          >
                            <div className="all-student">
                              <span>Portfolio-3</span>
                            </div>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li> */}
                  {/* Drop down end here */}
                  {auth && !!token ? (
                    <li className="nav-item d-xl-flex d-none">
                      <NavLink
                        exact
                        to={
                          userData.isAdmin
                            ? "/content/manager/stocks"
                            : "/dashboard/view/profile"
                        }
                        activeClassName="active"
                        className="nav-links"
                        onClick={click ? handleClick : null}
                      >
                        Dashboard
                      </NavLink>
                    </li>
                  ) : (
                    ""
                  )}
                  {/* <li
                    className={`${
                      LoginActive ? "green-bg-active" : ""
                    } nav-item `}
                  >
                <NavLink
                      exact
                      to="/login"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      Login
                    </NavLink> 
                  </li> */}
                  {auth && !!token ? (
                    <div className="d-xl-flex flex-lg-row flex-column d-none align-items-sm-start  align-items-center">
                      <UserDropDown
                        onClick={() =>
                          history.push(
                            userData.isAdmin
                              ? "/content/manager/stocks"
                              : "/dashboard/view/profile"
                          )
                        }
                      />
                      <div className="w-100 me-2 me-sm-0 mt-2 text-sm-end text-center">
                        <button
                          type="button"
                          onClick={() => dispatch(LogoutAction(history))}
                          className="update-btn "
                        >
                          Log Out
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="d-xl-flex d-none">
                      <button
                        className="form-btn px-4"
                        onClick={() => history.push("/login")}
                      >
                        Login
                      </button>
                      <button
                        onClick={() => history.push("/signup")}
                        className="update-btn me-3"
                      >
                        Join Now
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* <div className="d-flex flex-sm-row flex-column justify-content-center ">
                <li className=" d-flex d-xl-none flex-column align-items-center">
                  <NavLink
                    exact
                    to="/signup"
                    activeClassName="active"
                    className="nav-links d-flex justify-content-center"
                    onClick={click ? handleClick : null}
                  >
                    <button className="update-btn">Join Now</button>
                  </NavLink>
                </li>
              </div> */}
            </ul>

            <div className="nav-icon d-flex d-xl-none   align-items-center">
              <li className=" d-md-flex d-none">
                <input
                  type="search"
                  className="search-icon-input-header py-0"
                  placeholder="search"
                />
              </li>
              {/* <div className="search-input d-md-flex d-none">
                <input
                  type="text"
                  className="border-0 w-100"
                  placeholder="Search"
                />
                <button className="btn-search-input">
                  <SearchMagnifyIcon />
                </button>
              </div> */}
              <div className="d-md-flex d-none">
                <UserDropDown />
              </div>
              <div onClick={handleClick}>
                {" "}
                <HamburgerIcon />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
