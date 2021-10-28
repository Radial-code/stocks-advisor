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
import {
  getSearchResultAction,
  removeSearchResultList,
} from "../../redux/action/news";
import { useDispatch } from "react-redux";
import { LogoutAction } from "../../redux/action/auth";
import Loader from "../common/Loader";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = ({
  history,
  setLoading,
  setSearchData,
  searchData,
  searchshow,
  setSearchShow,
}) => {
  // new usestate

  const [activeId, setActiveId] = useState("");

  function toggleActive(id) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // its ends here...
  const dispatch = useDispatch();
  const { setLayoutClickChanger, layoutClickChanger } =
    useLayoutChangerProvider();

  const [Lang, setLang] = useState(false);
  const [loadingLogOut, setLoadingLogOut] = useState(false);
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);
  const userData = useSelector((state) => state.auth.userData);
  const initialLanguage = localStorage.getItem("stock-advisor-lang")
    ? localStorage.getItem("stock-advisor-lang")
    : "Arabic";

  const [Language, setLanguage] = useState(initialLanguage);
  const firstname = useSelector((state) => state.auth.userData.firstName);
  const lastname = useSelector((state) => state.auth.userData.lastName);
  const [overlayActive, setOverlayActive] = useState(true);
  const auth = useSelector((state) => state.auth.auth);
  const token = localStorage.getItem("stock-advisor");
  const dashboardPortfoliosList = useSelector(
    (state) => state.list.dashboardPortfoliosList
  );
  const dashboardPortfoliosListId =
    dashboardPortfoliosList &&
    dashboardPortfoliosList.length &&
    dashboardPortfoliosList[0]._id;

  const layoutleftChangeHandler = (value) => {
    setLayoutClickChanger(true);
    setLanguage("Arabic");
    localStorage.setItem("stock-advisor-lang", "Arabic");
    setLang(false);
    if (value === "english") {
      setNavbarCollapsed(true);
      setOverlayActive(true);
    } else if (value === "arabic") {
      setNavbarCollapsed(true);
      setOverlayActive(true);
    }
  };

  const overlayActiveHandler = () => {
    setNavbarCollapsed(!navbarCollapsed);
    setOverlayActive(false);
  };

  const layoutrightChangeHandler = (value) => {
    setLayoutClickChanger(false);
    setLanguage("English");
    localStorage.setItem("stock-advisor-lang", "English");
    setLang(false);
    if (value === "english") {
      setNavbarCollapsed(true);
      setOverlayActive(true);
    } else if (value === "arabic") {
      setNavbarCollapsed(true);
      setOverlayActive(true);
    }
  };
  const sidebarClosedHandler = () => {
    setNavbarCollapsed(true);
    setOverlayActive(true);
  };
  const searchPage = () => {
    dispatch(removeSearchResultList());
    setSearchShow(!searchshow);
    history.push("/search/news");
  };
  const overLayClickHandlerClose = () => {
    setNavbarCollapsed(true);
    setOverlayActive(true);
  };

  const searchHandler = () => {
    history.goBack();
    searchPage();
  };

  const closeSidebar = (value) => {
    if (value === "home") {
      history.push("/");
      setNavbarCollapsed(true);
      setOverlayActive(true);
    } else if (value === "about") {
      history.push("/about");
      setNavbarCollapsed(true);
      setOverlayActive(true);
    } else if (value === "news") {
      history.push("/news");
      setNavbarCollapsed(true);
      setOverlayActive(true);
    } else if (value === "ourplan") {
      history.push("/our-plan");
      setNavbarCollapsed(true);
      setOverlayActive(true);
    } else if (value === "contact") {
      history.push("/contact-us");
      setNavbarCollapsed(true);
      setOverlayActive(true);
    } else if (value === "login") {
      history.push("/login");
      setNavbarCollapsed(true);
      setOverlayActive(true);
    } else if (value === "joinnow") {
      history.push("/signup");
      setNavbarCollapsed(true);
      setOverlayActive(true);
    } else if (value === "userdashboard") {
      history.push("/dashboard/view/profile");
      setNavbarCollapsed(true);
      setOverlayActive(true);
    } else if (value === "admin") {
      history.push("/content/manager/stocks");
      setNavbarCollapsed(true);
      setOverlayActive(true);
    } else if (value === "search") {
      history.push("/search/news");
      setNavbarCollapsed(true);
      setOverlayActive(true);
    }
  };

  useEffect(() => {
    if (searchData) {
      dispatch(getSearchResultAction(searchData, setLoading));
    }
  }, [searchData]);

  if (layoutClickChanger) {
    document.dir = "rtl";
  } else {
    document.dir = "ltr";
  }

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
      <div
        className={`${
          navbarCollapsed
            ? "bg-white shadow py-3 navbar-fixed-stock  d-none d-xxl-block border-bottom-2px"
            : "stock-sidebar-navbar d-block "
        }`}
      >
        <div className="container">
          <div className="d-flex flex-xxl-row flex-column align-items-xxl-center justify-content-between">
            <div className="d-flex flex-xxl-row flex-column">
              <NavLink
                exact
                to="/"
                onClick={() => closeSidebar("home")}
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
                  onClick={() => closeSidebar("search")}
                />
                <div
                  className={`${
                    layoutClickChanger ? "left-0" : "right-0"
                  } search-green-icon cursor-pointer  top-0 position-absoulte`}
                >
                  <SearchWhiteIcon />
                </div>
              </div>
              <NavLink
                exact
                to="/"
                onClick={() => closeSidebar("home")}
                activeClassName="active_underline_navbar "
                className="navbar_Links_text nav-text-border-bottom px-2 px-xxl-0  py-2  py-xxl-3 mt-3 my-xxl-auto mx-xxl-4 "
              >
                Home
              </NavLink>
              <NavLink
                exact
                to="/about"
                onClick={() => closeSidebar("about")}
                activeClassName="active_underline_navbar"
                className="navbar_Links_text nav-text-border-bottom px-2 px-xxl-0   py-2   py-xxl-3 mt-3 my-xxl-auto"
              >
                About
              </NavLink>
              <NavLink
                activeClassName="active_underline_navbar"
                exact
                to="/news"
                onClick={() => closeSidebar("news")}
                className="navbar_Links_text nav-text-border-bottom py-2 px-2 px-xxl-0   py-xxl-3 mx-xxl-4 mt-3 my-xxl-auto "
              >
                News
              </NavLink>
              <NavLink
                exact
                to="/our-plan"
                activeClassName="active_underline_navbar"
                onClick={() => closeSidebar("ourplan")}
                className="navbar_Links_text nav-text-border-bottom px-2 px-xxl-0  py-2  py-xxl-3 mt-3 my-xxl-auto"
              >
                Our Plans
              </NavLink>
              <NavLink
                exact
                to="/contact-us"
                onClick={() => closeSidebar("contact")}
                activeClassName="active_underline_navbar"
                className="navbar_Links_text nav-text-border-bottom px-2 px-xxl-0  mx-xxl-4 py-2  py-xxl-3 mt-3 my-xxl-auto "
              >
                Contact Us
              </NavLink>
              <span className="d-flex align-items-center  lang-dropddown  py-xxl-2  py-xxl-3   my-xxl-auto">
                <li
                  className="d-none d-xxl-block"
                  // onClick={() => setLang(!Lang)}
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
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
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <span
                      onClick={() => layoutrightChangeHandler("english")}
                      className="d-flex px-2 py-1 cursor-pointer fw-normal"
                    >
                      English
                      <img
                        className="flag-img  mx-1 "
                        src={England}
                        alt="England"
                      />
                    </span>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    {" "}
                    <span
                      onClick={() => layoutleftChangeHandler("arabic")}
                      className="d-flex px-2 py-1 cursor-pointer fw-normal"
                    >
                      Arabic
                      <img className="flag-img mx-2 " src={Arbic} alt="" />
                    </span>
                  </MenuItem>
                </Menu>
              </span>
              <div className="d-xxl-none my-3 d-block ">
                <Accordion
                  className="langu-accordian"
                  defaultActiveKey={activeId}
                >
                  <Card className="rounded-lg  border-0">
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      onClick={() => toggleActive("0")}
                      className={activeId === "0" ? "active" : null}
                    >
                      <div className="d-flex py-2 px-2 justify-content-between ">
                        <p className="mb-0">Language</p>
                        {activeId === "0" ? (
                          <p className="mb-0">-</p>
                        ) : (
                          <p className="mb-0">+</p>
                        )}
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body className="card-body-Lang">
                        <p
                          className="cursor-pointer lang-accor-text"
                          onClick={() => layoutrightChangeHandler("english")}
                        >
                          English
                        </p>
                        <p
                          className="cursor-pointer"
                          onClick={() => layoutleftChangeHandler("arabic")}
                        >
                          Arabic
                        </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>

            {/* ends here ............. language accordian */}

            <div className="d-flex  flex-xxl-row flex-column">
              <span className="icon d-none d-xxl-block my-auto ms-3">
                {searchshow ? (
                  <div className="position-relative">
                    <div className="d-flex">
                      <span
                        className="cross-icon-style my-auto "
                        onClick={searchHandler}
                      >
                        x
                      </span>
                      <input
                        type="search"
                        className="mx-3 search-box-nav py-2 px-xxl-3"
                        id="search"
                        placeholder="Search..."
                        onChange={(e) => setSearchData(e.target.value.trim())}
                      />
                    </div>
                    <div
                      className={`${
                        layoutClickChanger
                          ? "search-green-icon cursor-pointer  top-10 left-20 position-absoulte"
                          : "search-green-icon cursor-pointer  top-10 right-10 position-absoulte"
                      }`}
                    >
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
                    className="icon  cursor-pointer"
                    onClick={() => searchPage()}
                  >
                    <i className="fa pe-2 fa-search"></i>
                  </span>
                )}
              </span>
              {userData.isPaidPlan ? (
                <NavLink
                  exact
                  activeClassName="active_underline_navbar"
                  to={
                    dashboardPortfoliosListId
                      ? `/protfolios/stock/${dashboardPortfoliosListId}`
                      : `/protfolios/stock`
                  }
                  className="navbar_Links_text my-auto px-2 px-xxl-0  my-xxl-auto  py-2 py-xxl-3 nav-text-border-bottom mx-0 mx-xxl-2"
                >
                  Portfolio
                </NavLink>
              ) : null}
              {!!auth && token !== null ? (
                <>
                  {userData && !!userData.isAdmin ? (
                    <div className="d-xxl-none mt-3 d-block ">
                      <Accordion
                        className="dash-accordian"
                        defaultActiveKey={activeId}
                      >
                        <Card className="rounded-lg  border-0">
                          <Accordion.Toggle
                            as={Card.Header}
                            eventKey="1"
                            onClick={() => toggleActive("1")}
                            className={activeId === "1" ? "active" : null}
                          >
                            <div className="d-flex py-2 px-2 justify-content-between ">
                              <p className="mb-0">Dashboard</p>
                              {activeId === "1" ? (
                                <p className="mb-0">-</p>
                              ) : (
                                <p className="mb-0">+</p>
                              )}
                            </div>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body className="dash-body-accord">
                              <p
                                className="cursor-pointer"
                                onClick={() => closeSidebar("userdashboard")}
                              >
                                User Dashboard
                              </p>
                              <p
                                className="cursor-pointer"
                                onClick={() => closeSidebar("admin")}
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
                      className="navbar_Links_text nav-text-border-bottom py-2 mx-xxl-3  py-xxl-3 mt-3 my-xxl-auto"
                    >
                      Dashboard
                    </NavLink>
                  )}
                </>
              ) : null}
              {!!auth && token !== null ? (
                <>
                  {userData.isAdmin ? (
                    <Dropdown className="d-flex  mx-0 mx-xxl-2  stock-dashboard-dropdown  align-items-center">
                      <Dropdown.Toggle
                        className="d-none d-xxl-block "
                        id="dropdown-basic"
                      >
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
                          onClick={() =>
                            history.push("/content/manager/stocks")
                          }
                        >
                          Admin Dashboard
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : null}
                </>
              ) : (
                ""
              )}
              {!!auth && !!firstname && !!lastname ? (
                <div className="d-none d-xxl-block my-auto position-relative">
                  <span className="d-block notify-dot"></span>
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
              {!!auth && token !== null ? (
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
                    onClick={() => closeSidebar("login")}
                    className="mt-4 mt-xxl-0 py-2 ms-3 mx-2  btn join_now_btn "
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => closeSidebar("joinnow")}
                    className="mt-4 mt-xxl-0 py-2 btn log_in_btn "
                  >
                    Join Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={`shadow navbar-fixed-stock  py-2 d-block d-xxl-none`}>
        <div className="container ">
          <div className="row">
            <div className="col-6 my-auto ">
              <NavLink exact to="/" className="">
                <img src={logo} className="w-72 cursor-pointer w-36" alt="" />
              </NavLink>
            </div>

            <div className="col-6 my-auto">
              <div className="d-flex justify-content-end ">
                <div className="d-block my-auto d-xxl-none position-relative">
                  <span className="d-block notify-dot"></span>
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
                  className={`${
                    layoutClickChanger
                      ? "cursor-pointer me-3  text-start"
                      : "cursor-pointer  text-end"
                  }`}
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
