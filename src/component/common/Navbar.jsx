import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/Navbar-logo-img.png";
import "./NavBar.css";
const Navbar = () => {
  const [student, setStudent] = useState(false);
  const dropHandler = () => {
    setStudent(!student);
  };

  const [dashboard, setDashboard] = useState(false);
  const dashboardHandler = () => {
    setDashboard(!dashboard);
  };

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="container justify-content-between">
          <NavLink exact to="/" className="nav-logo logo-img-navbar">
            <img className="logo-img-navbar" src={logo} alt="" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <div className="d-flex justify-content-start">
              <li className="items-nav d-xl-none d-block">
                <div
                  onClick={handleClick}
                  className="cursor-pointer close-btn-nav"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-x-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
                </div>
              </li>
            </div>

            <div className="d-md-flex align-items-xl-center w-100 justify-content-xl-between justify-content-around ">
              <li className=" d-md-none d-flex justify-content-center mt-4">
                <div className="search-input">
                  <input
                    type="text"
                    className="border-0 w-100"
                    placeholder="Search"
                  />
                  <button className="btn-search-input">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                </div>
              </li>
              <div className="d-xl-flex align-items-center">
                <li className="nav-item">
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

                <li className="nav-item">
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

                <li className="nav-item">
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

                <li className="nav-item">
                  <NavLink
                    exact
                    to="/ourplans"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Our Plans
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    exact
                    to="/contactus"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </div>
              <li className=" d-xl-none d-none d-md-block">
                <div className="search-input">
                  <input
                    type="text"
                    className="border-0 w-100"
                    placeholder="Search"
                  />
                  <button className="btn-search-input">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                </div>
              </li>
              <div className="d-xl-flex align-items-center">
                <li className="nav-item d-none d-xl-block">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </span>
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

                {/*start here drop down  */}
                <li onClick={dropHandler} className={` nav-item  d-md-none`}>
                  <a className="d-flex   nav-links justify-content-between align-items-center">
                    Portfolios
                    <span
                      className={`ml-20 ${student ? "sidebardropdown" : ""}`}
                    >
                      <span className="plus">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-plus"
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
                          class="bi bi-dash bg-5CBD4C"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>{" "}
                      </span>
                    </span>
                  </a>
                </li>

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
                          to="#"
                          activeClassName=""
                          className=""
                          onClick={click ? handleClick : null}
                        >
                          <div className="all-student">
                            <span>All Students</span>
                          </div>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          exact
                          to="#"
                          activeClassName=""
                          className=""
                          onClick={click ? handleClick : null}
                        >
                          <div className="all-student">
                            <span>All Students</span>
                          </div>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          exact
                          to="#"
                          activeClassName=""
                          className=""
                          onClick={click ? handleClick : null}
                        >
                          <div className="all-student">
                            <span>All Students</span>
                          </div>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>

                <li
                  onClick={dashboardHandler}
                  className={` nav-item  d-md-none`}
                >
                  <a className="d-flex   nav-links justify-content-between align-items-center">
                    Dashboard
                    <span
                      className={`ml-20 ${dashboard ? "sidebardropdown" : ""}`}
                    >
                      <span className="plus">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-plus"
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
                          class="bi bi-dash bg-5CBD4C"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>{" "}
                      </span>
                    </span>
                  </a>
                </li>

                <li className=" drop-item d-md-none">
                  <div
                    className={`drop-none w-100   ${
                      dashboard ? "sidebardropdown" : ""
                    }`}
                  >
                    <ul className="py-2 w-100 drop-down-list">
                      <li>
                        <NavLink
                          exact
                          to="#"
                          activeClassName=""
                          className=""
                          onClick={click ? handleClick : null}
                        >
                          <div className="all-student">
                            <span>All Students</span>
                          </div>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          exact
                          to="#"
                          activeClassName=""
                          className=""
                          onClick={click ? handleClick : null}
                        >
                          <div className="all-student">
                            <span>All Students</span>
                          </div>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          exact
                          to="#"
                          activeClassName=""
                          className=""
                          onClick={click ? handleClick : null}
                        >
                          <div className="all-student">
                            <span>All Students</span>
                          </div>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Drop down end here */}
                <li className="nav-item d-none d-md-block">
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

                <li className="nav-item">
                  <NavLink
                    exact
                    to="/login"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Login
                  </NavLink>
                </li>

                <li className=" d-flex d-none d-xl-block flex-column align-items-center">
                  <NavLink
                    exact
                    to="/#"
                    activeClassName="active"
                    className="nav-links d-flex justify-content-center"
                    onClick={click ? handleClick : null}
                  >
                    <button className="update-btn ">Join Now</button>
                  </NavLink>
                </li>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <li className=" d-flex d-xl-none flex-column align-items-center">
                <NavLink
                  exact
                  to="/#"
                  activeClassName="active"
                  className="nav-links d-flex justify-content-center"
                  onClick={click ? handleClick : null}
                >
                  <button className="update-btn ">Join Now</button>
                </NavLink>
              </li>
            </div>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>
      </nav>
      <div className="container"></div>
    </div>
  );
};

export default Navbar;
