import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/Navbar-logo-img.png";
import { useFixedScreenProvider } from "../../contexts/FixedScreenProvider";
import {
  HamburgerIcon,
  HamburgerCrossIcon,
  SearchMagnifyIcon,
} from "./icons/Icons";
import "./NavBar.css";
import { useHistory } from "react-router-dom";
import UserDropDown from "./UserDropDown";

const Navbar = () => {
  const [student, setStudent] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const { setScreenFixed } = useFixedScreenProvider();
  const auth = useSelector((state) => state.auth.auth);
  // const auth = false;
  // FOR ACTIVE CLASS HEADER
  const [HomeActive, setHomeActive] = useState(false);
  const [AboutActive, setAboutActive] = useState(false);
  const [NewsActive, setNewsActive] = useState(false);
  const [PlansActive, setPlansActive] = useState(false);
  const [ContactActive, setContactActive] = useState(false);
  const [PortfolioActive, setPortfolioActive] = useState(false);
  const [DashboardActive, setDashboardActive] = useState(false);
  const [LoginActive, setLoginActive] = useState(false);

  const dropHandler = () => {
    setStudent(!student);
  };
  let history = useHistory();

  // ACTIVE HEADER AS PATH
  const pathNane = window.location.pathname;
  useEffect(() => {
    if (pathNane === "/home") {
      setHomeActive(true);
      setAboutActive(false);
      setNewsActive(false);
      setPlansActive(false);
      setContactActive(false);
      setPortfolioActive(false);
      setDashboardActive(false);
      setLoginActive(false);
    } else if (pathNane === "/about") {
      setHomeActive(false);
      setAboutActive(true);
      setNewsActive(false);
      setPlansActive(false);
      setContactActive(false);
      setPortfolioActive(false);
      setDashboardActive(false);
      setLoginActive(false);
    } else if (pathNane === "/news") {
      setHomeActive(false);
      setAboutActive(false);
      setNewsActive(true);
      setPlansActive(false);
      setContactActive(false);
      setPortfolioActive(false);
      setDashboardActive(false);
      setLoginActive(false);
    } else if (pathNane === "/") {
      setHomeActive(false);
      setAboutActive(false);
      setNewsActive(false);
      setPlansActive(true);
      setContactActive(false);
      setPortfolioActive(false);
      setDashboardActive(false);
      setLoginActive(false);
    } else if (pathNane === "/contact-us") {
      setHomeActive(false);
      setAboutActive(false);
      setNewsActive(false);
      setPlansActive(false);
      setContactActive(true);
      setPortfolioActive(false);
      setDashboardActive(false);
      setLoginActive(false);
    } else if (pathNane === "/portfolio/portfolio1") {
      setHomeActive(false);
      setAboutActive(false);
      setNewsActive(false);
      setPlansActive(false);
      setContactActive(false);
      setPortfolioActive(true);
      setDashboardActive(false);
      setLoginActive(false);
    } else if (pathNane === "/login") {
      setHomeActive(false);
      setAboutActive(false);
      setNewsActive(false);
      setPlansActive(false);
      setContactActive(false);
      setPortfolioActive(false);
      setDashboardActive(false);
      setLoginActive(true);
    }
  }, [pathNane]);

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setScreenFixed((pre) => !pre);
  };
  const Close = () => setClick(false);

  const firstName = "Sharukh";
  const lastName = "Khan";

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
                    <li className="items-nav mt-0 d-xl-none d-block">
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
                  <li
                    className={`${
                      HomeActive ? "green-bg-active" : ""
                    } nav-item `}
                  >
                    <NavLink
                      exact
                      to="/home"
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
                      to="/"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      Our Plans
                    </NavLink>
                  </li>

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
                </div>
                <li className="d-xl-none d-none d-md-block">
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
                  {auth ? (
                    <>
                      <li className=" d-none d-xl-block">
                        <input
                          type="search"
                          className="search-icon-input-header"
                          placeholder="search"
                        />
                      </li>
                      <li className="nav-item d-none d-md-block">
                        <NavLink
                          exact
                          to="/portfolio/portfolio1"
                          activeClassName="active"
                          className="nav-links"
                          onClick={click ? handleClick : null}
                        >
                          Portfolios{" "}
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    ""
                  )}
                  {/*start here drop down  */}
                  {auth ? (
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
                  </li>
                  {/* Drop down end here */}
                  {auth ? (
                    <li className="nav-item ">
                      <NavLink
                        exact
                        to="/dashboard/edit/contact"
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
                  {auth ? (
                    <div className="d-flex">
                      <UserDropDown />
                      <button className="update-btn ">Log Out</button>
                    </div>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              </div>

              <div className="d-flex justify-content-center">
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
            </ul>

            <div className="nav-icon" onClick={handleClick}>
              <HamburgerIcon />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
