import { NavLink } from "react-router-dom";
import {
  HamburgerIcon,
  HamburgerCrossIcon,
  SearchWhiteIcon,
} from "./icons/Icons";
import "./NavBar.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { withRouter } from "react-router";
import logo from "../../assets/img/Navbar-logo-img.png";
import { useState } from "react";
import England from "../../assets/img/england.png";
import Arbic from "../../assets/img/arbic.png";
import { useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { Drop } from "../common/icons/Icons";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";
import { useEffect } from "react";
import { getSearchResultAction } from "../../redux/action/news";
import { useDispatch } from "react-redux";
import { LogoutAction } from "../../redux/action/auth";
import Loader from "../common/Loader";

const Navbar = ({ history, setLoading, setSearchData, searchData }) => {
  const dispatch = useDispatch();
  const { setLayoutClickChanger, layoutClickChanger } =
    useLayoutChangerProvider();
  const [searchshow, setSearchShow] = useState(false);
  const [Lang, setLang] = useState(false);
  const [loadingLogOut, setLoadingLogOut] = useState(false);
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);
  const userData = useSelector((state) => state.auth.userData);
  const [Language, setLanguage] = useState(
    localStorage.getItem("stock-advisor-lang")
  );
  const firstname = useSelector((state) => state.auth.userData.firstName);
  const lastname = useSelector((state) => state.auth.userData.lastName);
  const [overlayActive, setOverlayActive] = useState(true);
  const auth = useSelector((state) => state.auth.auth);
  const token = useSelector((state) => state.auth.token);
  const dashboardPortfoliosList = useSelector(
    (state) => state.list.dashboardPortfoliosList
  );
  const dashboardPortfoliosListId =
    dashboardPortfoliosList &&
    dashboardPortfoliosList.length &&
    dashboardPortfoliosList[0]._id;
  const layoutleftChangeHandler = () => {
    setLayoutClickChanger(true);
    setLanguage("Arabic");
    localStorage.setItem("stock-advisor-lang", "Arabic");
    setLang(false);
  };
  const overlayActiveHandler = () => {
    setNavbarCollapsed(!navbarCollapsed);
    setOverlayActive(false);
  };
  const layoutrightChangeHandler = () => {
    setLayoutClickChanger(false);
    setLanguage("English");
    localStorage.setItem("stock-advisor-lang", "English");
    setLang(false);
  };
  const sidebarClosedHandler = () => {
    setNavbarCollapsed(true);
    setOverlayActive(true);
  };
  const searchPage = () => {
    setSearchShow(!searchshow);
    history.push("/search/news");
  };
  const overLayClickHandlerClose = () => {
    setNavbarCollapsed(true);
    setOverlayActive(true);
  };
  useEffect(() => {
    if (searchData) {
      dispatch(getSearchResultAction(searchData, setLoading));
    }
  }, [searchData]);
  return (
    <>
      {overlayActive ? (
        ""
      ) : (
        <div
          onClick={overLayClickHandlerClose}
          className="over-lay-navbar"
        ></div>
      )}
      {/* <div className="over-lay-navbar"></div> */}
      <div
        className={`${
          navbarCollapsed
            ? "bg-white shadow py-3  d-none d-xxl-block border-bottom-2px"
            : "stock-sidebar-navbar d-block "
        }`}
      >
        <div className="container">
          <div className="d-flex flex-xxl-row flex-column align-items-xxl-center justify-content-between">
            <div className="d-flex flex-xxl-row flex-column">
              <NavLink
                exact
                to="/"
                className="nav-logo d-none d-xxl-block logo-img-navbar"
              >
                <img className="logo-img-navbar" src={logo} alt="" />
              </NavLink>
              <div
                className="d-block mt-3 cursor-pointer d-xxl-none"
                onClick={sidebarClosedHandler}
                // () =>
              >
                <HamburgerCrossIcon />
              </div>
              <div className="position-relative  mt-3 d-xxl-none d-block ">
                <input
                  type="search"
                  className="search-box-nav py-2 w-100 pe-3"
                  id="search"
                  placeholder="Search..."
                />
                <div className="search-green-icon cursor-pointer top-0 left-0    position-absoulte">
                  <SearchWhiteIcon />
                </div>
              </div>
              <NavLink
                exact
                to="/"
                activeClassName="active_underline_navbar "
                className="navbar_Links_text nav-text-border-bottom  py-2  py-xxl-3 mt-3 my-xxl-auto mx-xxl-4 "
              >
                Home
              </NavLink>
              <NavLink
                exact
                to="/about"
                activeClassName="active_underline_navbar"
                className="navbar_Links_text nav-text-border-bottom  py-2   py-xxl-3 mt-3 my-xxl-auto"
              >
                About
              </NavLink>
              <NavLink
                activeClassName="active_underline_navbar"
                exact
                to="/news"
                className="navbar_Links_text nav-text-border-bottom py-2  py-xxl-3 mx-xxl-4 mt-3 my-xxl-auto "
              >
                News
              </NavLink>
              <NavLink
                exact
                activeClassName="active_underline_navbar"
                to="/our-plan"
                className="navbar_Links_text nav-text-border-bottom py-2  py-xxl-3 mt-3 my-xxl-auto"
              >
                Our Plans
              </NavLink>
              <NavLink
                exact
                to="/contact-us"
                activeClassName="active_underline_navbar"
                className="navbar_Links_text nav-text-border-bottom mx-xxl-4 py-2  py-xxl-3 mt-3 my-xxl-auto "
              >
                Contact Us
              </NavLink>
              <span className="d-flex align-items-center  lang-dropddown  py-2  py-xxl-3 mt-3 my-xxl-auto">
                <li
                  className="d-none d-xxl-block"
                  onClick={() => setLang(!Lang)}
                >
                  <NavLink
                    exact
                    to="#"
                    activeClassName="active"
                    className="nav-links drop-down"
                  >
                    {layoutClickChanger ? (
                      <span className="px-1 ">
                        <Drop />
                      </span>
                    ) : null}
                    {Language}
                    {layoutClickChanger ? null : (
                      <span className="px-1 ">
                        <Drop />
                      </span>
                    )}
                  </NavLink>
                </li>
                {Lang ? (
                  <div className="bg-white  shadow p-2 rounded position-absolute top-72 ">
                    <span
                      onClick={layoutrightChangeHandler}
                      className="d-flex px-2 py-1 cursor-pointer fw-normal"
                    >
                      English
                      <img
                        className="flag-img  mx-2 "
                        src={England}
                        alt="England"
                      />
                    </span>
                    <span
                      onClick={layoutleftChangeHandler}
                      className="d-flex px-2 py-1 cursor-pointer fw-normal"
                    >
                      Arabic
                      <img className="flag-img mx-2" src={Arbic} alt="" />
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </span>
            </div>
            <div className="d-xxl-none mb-3 d-block ">
              <Accordion>
                <Card>
                  <Card.Header className="bg-accordian ">
                    <Accordion.Toggle
                      className="w-100 dashboard-accordian my-auto "
                      eventKey="1"
                    >
                      <div className="d-flex py-2 w-100 justify-content-between ">
                        <p className="mb-0">Language</p>
                        <p className="mb-0">+</p>
                      </div>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <p
                        className="cursor-pointer"
                        onClick={layoutrightChangeHandler}
                      >
                        English
                      </p>
                      <p
                        className="cursor-pointer"
                        onClick={layoutleftChangeHandler}
                      >
                        Arabic
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            {/* ends here ............. language accordian */}
            {!!auth && !!token ? (
              <>
                {userData && !!userData.isAdmin ? (
                  <div className="d-xxl-none d-block ">
                    <Accordion>
                      <Card>
                        <Card.Header className="bg-accordian ">
                          <Accordion.Toggle
                            className="w-100 dashboard-accordian my-auto "
                            eventKey="1"
                          >
                            <div className="d-flex py-2 w-100 justify-content-between ">
                              <p className="mb-0">Dashboard</p>
                              <p className="mb-0">+</p>
                            </div>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <p
                              className="cursor-pointer"
                              onClick={() =>
                                history.push("/dashboard/view/profile")
                              }
                            >
                              User Dashboard
                            </p>
                            <p
                              className="cursor-pointer"
                              onClick={() =>
                                history.push("/content/manager/stocks")
                              }
                            >
                              Admin Dashboard
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                ) : (
                  <NavLink
                    exact
                    activeClassName="active_underline_navbar"
                    to="/dashboard/view/profile"
                    className="navbar_Links_text nav-text-border-bottom py-2  py-xxl-3 mt-3 my-xxl-auto"
                  >
                    Dashboard
                  </NavLink>
                )}
              </>
            ) : null}
            <div className="d-flex  flex-xxl-row flex-column">
              <span className="icon d-none d-xxl-block my-auto ms-3">
                {searchshow ? (
                  <div className="position-relative">
                    <div className="d-flex">
                      <span
                        className="cross-icon-style my-auto "
                        onClick={() => searchPage()}
                      >
                        x
                      </span>
                      <input
                        type="search"
                        className="mx-3 search-box-nav py-2 px-xxl-3"
                        id="search"
                        placeholder="Search..."
                        onChange={(e) => setSearchData(e.target.value)}
                      />
                    </div>
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
                    className="icon cursor-pointer"
                    onClick={() => searchPage()}
                  >
                    <i className="fa fa-search"></i>
                  </span>
                )}
              </span>
              {auth ? (
                <>
                  <NavLink
                    exact
                    to={`/protfolios/stock/${dashboardPortfoliosListId}`}
                    className="navbar_Links_text my-auto my-xxl-auto mt-3 py-2 py-xxl-3 nav-text-border-bottom mx-0 mx-xxl-2"
                  >
                    Portfolio
                  </NavLink>
                  <Dropdown className="d-flex mx-0 mx-xxl-2  stock-dashboard-dropdown  align-items-center">
                    <Dropdown.Toggle id="dropdown-basic">
                      Dashboard
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() =>
                          history.push("/dashboard/manage/subscription")
                        }
                      >
                        User Dashboard
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => history.push("/content/manager/stocks")}
                      >
                        Admin Dashboard
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                ""
              )}
              {auth ? (
                <div className="d-none d-xxl-block my-auto">
                  <div
                    onClick={() => {
                      userData.isAdmin
                        ? history.push("/content/manager/stocks")
                        : history.push("/dashboard/view/profile");
                    }}
                    className="my-auto  cursor-pointer d-flex justify-content-center align-items-center  bg-green-circle "
                  >
                    <div>
                      <span className="first-char">
                        {firstname && firstname.toUpperCase().charAt(0)}
                      </span>
                      <span className="first-char">
                        {lastname && lastname.toUpperCase().charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {auth ? (
                <div className="mx-xxl-2 mx-0  mx-auto  my-auto ">
                  <button
                    onClick={() =>
                      dispatch(LogoutAction(setLoadingLogOut, history))
                    }
                    className="mt-4 mt-xxl-0 py-2  btn log_in_btn "
                  >
                    {loadingLogOut ? <Loader /> : "Log Out"}
                  </button>
                </div>
              ) : (
                <div className="mx-xxl-2 mx-0 mx-auto    my-auto ">
                  <button
                    onClick={() => history.push("/login")}
                    className="mt-4 mt-xxl-0 py-2 ms-3  btn join_now_btn "
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => history.push("/signup")}
                    className="mt-4 mt-xxl-0 py-2  btn log_in_btn "
                  >
                    Join Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={`shadow  py-2 d-block d-xxl-none`}>
        <div className="container ">
          <div className="row">
            <div className="col-6 my-auto ">
              <NavLink exact to="/" className="">
                <img src={logo} className="w-72 cursor-pointer w-36" alt="" />
              </NavLink>
            </div>

            <div className="col-6 my-auto">
              <div className="d-flex justify-content-end ">
                <div className="d-block my-auto d-xxl-none">
                  {auth ? (
                    <div
                      onClick={() => {
                        userData.isAdmin
                          ? history.push("/content/manager/stocks")
                          : history.push("/dashboard/view/profile");
                      }}
                      className="my-auto cursor-pointer d-flex justify-content-center align-items-center  bg-green-circle "
                    >
                      <div>
                        <span className="first-char">
                          {firstname && firstname.toUpperCase().charAt(0)}
                        </span>
                        <span className="first-char">
                          {lastname && lastname.toUpperCase().charAt(0)}
                        </span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className="cursor-pointer me-3  text-start "
                  onClick={overlayActiveHandler}
                >
                  <HamburgerIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default withRouter(Navbar);
