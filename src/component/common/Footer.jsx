import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import logo from "../../assets/img/Navbar-logo-img.png";
const Footer = () => {
  return (
    <section className="bg-16191E pb-3">
      <div className="container pt-lg-5 pt-3  pb-3 pt-lg-5">
        <div className="row justify-content-between align-items-end">
          <div className="col-lg-3  col-md-4 col-12 d-flex d-md-block justify-content-center  ">
            <Link to="/">
              <div className="">
                <img className="filter-img" src={logo} alt="" />
              </div>
            </Link>
            <div className="d-none d-md-block mt-5 mb-4 ">
              <Link
                className="text-decoration-none text-white footer-btn"
                to="/contactus"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="col-lg-5 col-md-7 col-12 mt-5 mt-md-0 d-flex justify-content-center d-md-block flex-column ">
            <p className="text-white text-center mb-0 stock-paragraph mw-480">
              Duis venenatis aliquet eros, non feugiat tortor semper sed. In
              diam risus, efficitur sit amet dolor vitae, finibus tristique arcu
              finibus tristique arcu finibus tristique arcu finibus
            </p>
            <div className="text-center d-md-none mt-5 mb-4 ">
              <Link
                className="text-decoration-none text-white footer-btn"
                to="/contactus"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="col-lg-3  col- mt-5 mt-lg-0  col-12 d-flex d-xsm-block justify-content-center ">
            <div className="d-flex justify-content-between w-xs-250 ">
              <ul className="list-unstyled  footer-ul d-sm-none d-flex flex-column align-items-center">
                <li>
                  <Link
                    className="text-decoration-none text-white fs-15"
                    to="/portfolio/portfolio1"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white fs-15"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white fs-15"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white fs-15"
                    to="/signup"
                  >
                    Join
                  </Link>
                </li>
              </ul>

              <ul className="list-unstyled footer-ul d-flex flex-column align-items-center">
                <li>
                  <Link
                    className="text-decoration-none text-white fs-15"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white fs-15"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white fs-15"
                    to="/news"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white fs-15"
                    to="/ourplans"
                  >
                    Our Plan
                  </Link>
                </li>
              </ul>

              <ul className="list-unstyled  footer-ul d-none d-sm-block">
                <li>
                  <Link
                    className="text-decoration-none text-white fs-15"
                    to="/portfolio/portfolio1"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white fs-15"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white fs-15"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white fs-15"
                    to="/signup"
                  >
                    Join
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center d-md-none">
          <svg
            className="mx-2 svg"
            id="Group_9984"
            data-name="Group 9984"
            xmlns="http://www.w3.org/2000/svg"
            width="26.397"
            height="26.398"
            viewBox="0 0 26.397 26.398"
          >
            <g
              id="Group_9983"
              data-name="Group 9983"
              transform="translate(0 0)"
            >
              <circle
                id="Circle"
                cx="13.199"
                cy="13.199"
                r="13.199"
                fill="#fff"
              />
              <path
                id="Vector"
                d="M7.919,1.427c2.115,0,2.365.008,3.2.046a4.381,4.381,0,0,1,1.471.273,2.454,2.454,0,0,1,.911.592,2.454,2.454,0,0,1,.592.911,4.381,4.381,0,0,1,.273,1.47c.038.835.046,1.086.046,3.2s-.008,2.365-.046,3.2a4.381,4.381,0,0,1-.273,1.47,2.622,2.622,0,0,1-1.5,1.5,4.381,4.381,0,0,1-1.471.273c-.835.038-1.085.046-3.2.046s-2.365-.008-3.2-.046a4.381,4.381,0,0,1-1.471-.273,2.453,2.453,0,0,1-.911-.592,2.454,2.454,0,0,1-.592-.911,4.381,4.381,0,0,1-.273-1.47c-.038-.835-.046-1.086-.046-3.2s.008-2.365.046-3.2a4.381,4.381,0,0,1,.273-1.47,2.453,2.453,0,0,1,.592-.911,2.453,2.453,0,0,1,.911-.592,4.381,4.381,0,0,1,1.471-.273C5.554,1.435,5.8,1.427,7.919,1.427ZM7.919,0C5.769,0,5.5.009,4.654.048A5.813,5.813,0,0,0,2.732.416a3.882,3.882,0,0,0-1.4.913,3.882,3.882,0,0,0-.913,1.4A5.812,5.812,0,0,0,.048,4.654C.009,5.5,0,5.769,0,7.919s.009,2.42.048,3.265a5.812,5.812,0,0,0,.368,1.922,3.882,3.882,0,0,0,.913,1.4,3.882,3.882,0,0,0,1.4.913,5.812,5.812,0,0,0,1.922.368c.845.039,1.114.048,3.265.048s2.42-.009,3.265-.048a5.812,5.812,0,0,0,1.922-.368,4.049,4.049,0,0,0,2.316-2.316,5.813,5.813,0,0,0,.368-1.922c.039-.845.048-1.114.048-3.265s-.009-2.42-.048-3.265a5.813,5.813,0,0,0-.368-1.922,3.882,3.882,0,0,0-.913-1.4,3.882,3.882,0,0,0-1.4-.913A5.813,5.813,0,0,0,11.184.048C10.34.009,10.07,0,7.919,0Z"
                transform="matrix(1, 0, 0, 1, 5.279, 5.279)"
                fill="#16191e"
              />
              <g id="Group" transform="translate(9.136 9.136)">
                <path
                  id="Vector-2"
                  data-name="Vector"
                  d="M4.067,0A4.067,4.067,0,1,0,8.133,4.067,4.067,4.067,0,0,0,4.067,0Zm0,6.706a2.64,2.64,0,1,1,2.64-2.64A2.64,2.64,0,0,1,4.067,6.706Z"
                  transform="matrix(1, 0, 0, 1, 0, 0)"
                  fill="#16191e"
                />
              </g>
              <g
                id="Group-2"
                data-name="Group"
                transform="translate(16.479 8.022)"
              >
                <path
                  id="Vector-3"
                  data-name="Vector"
                  d="M1.9.95A.95.95,0,1,1,.95,0,.95.95,0,0,1,1.9.95Z"
                  transform="matrix(1, 0, 0, 1, 0, 0)"
                  fill="#16191e"
                />
              </g>
            </g>
          </svg>

          <svg
            className="mx-2 svg"
            id="Group_9985"
            data-name="Group 9985"
            xmlns="http://www.w3.org/2000/svg"
            width="26.397"
            height="26.398"
            viewBox="0 0 26.397 26.398"
          >
            <circle
              id="Circle"
              cx="13.199"
              cy="13.199"
              r="13.199"
              transform="translate(0 0)"
              fill="#fff"
            />
            <path
              id="Vector"
              d="M15.839,1.524a6.488,6.488,0,0,1-1.866.512A3.258,3.258,0,0,0,15.4.238a6.508,6.508,0,0,1-2.063.789A3.252,3.252,0,0,0,7.8,3.99,9.224,9.224,0,0,1,1.1.595,3.253,3.253,0,0,0,2.109,4.933,3.239,3.239,0,0,1,.637,4.526v.041A3.253,3.253,0,0,0,3.243,7.754a3.249,3.249,0,0,1-1.468.055,3.254,3.254,0,0,0,3.036,2.257A6.521,6.521,0,0,1,.776,11.457,6.475,6.475,0,0,1,0,11.412a9.2,9.2,0,0,0,4.981,1.46,9.182,9.182,0,0,0,9.245-9.245c0-.141,0-.281-.01-.42A6.618,6.618,0,0,0,15.839,1.524Z"
              transform="translate(5.279 6.763)"
              fill="#16191e"
            />
          </svg>

          <svg
            className="mx-2"
            id="Group_9986"
            data-name="Group 9986"
            xmlns="http://www.w3.org/2000/svg"
            width="26.397"
            height="26.398"
            viewBox="0 0 26.397 26.398"
          >
            <g
              id="Group_9982"
              data-name="Group 9982"
              transform="translate(0 0)"
            >
              <circle
                id="Circle"
                cx="13.199"
                cy="13.199"
                r="13.199"
                fill="#fff"
              />
              <path
                id="Vector"
                d="M3.151,1.507a1.493,1.493,0,0,1-1.6,1.487A1.454,1.454,0,0,1,0,1.507,1.454,1.454,0,0,1,1.566,0,1.491,1.491,0,0,1,3.151,1.507ZM.079,13.739V4.168H3.054v9.57H.079Z"
                transform="matrix(1, 0, 0, 1, 6.6, 5.279)"
                fill="#16191e"
              />
              <g id="Group" transform="translate(11.958 9.234)">
                <path
                  id="Vector-2"
                  data-name="Vector"
                  d="M.079,3.268C.079,2.074.039,1.056,0,.215H2.584l.137,1.311H2.78A3.5,3.5,0,0,1,5.735,0C7.692,0,9.16,1.292,9.16,4.109V9.786H6.185v-5.3c0-1.234-.43-2.075-1.507-2.075A1.587,1.587,0,0,0,3.172,3.522a2.112,2.112,0,0,0-.117.744V9.786H.08V3.268Z"
                  transform="matrix(1, 0, 0, 1, 0, 0)"
                  fill="#16191e"
                />
              </g>
            </g>
          </svg>

          <svg
            className="mx-2 svg"
            id="Group_9987"
            data-name="Group 9987"
            xmlns="http://www.w3.org/2000/svg"
            width="26.397"
            height="26.398"
            viewBox="0 0 26.397 26.398"
          >
            <g
              id="Group_9980"
              data-name="Group 9980"
              transform="translate(0 0)"
            >
              <circle
                id="Circle"
                cx="13.199"
                cy="13.199"
                r="13.199"
                transform="translate(0 0)"
                fill="#fff"
              />
              <path
                id="Vector"
                d="M6.807,2.612a7.788,7.788,0,0,0-1.316-.144c-.946,0-1.008.411-1.008,1.07V4.709H6.848L6.642,7.136H4.483v7.382H1.522V7.136H0V4.709H1.522v-1.5C1.522,1.152,2.489,0,4.915,0A10.322,10.322,0,0,1,7.177.288Z"
                transform="matrix(1, 0, 0, 1, 9.898, 5.939)"
                fill="#16191e"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="b-b-1"></div>
      <div className="container d-flex mt-3 justify-content-between align-items-center">
        <p className="text-white mx-auto mx-md-0 mb-0 mw-479 ">
          Copyright @ 2021 Nala's Mane
        </p>

        <div className=" d-none d-md-block  ">
          <svg
            className="mx-3 svg"
            id="Group_9984"
            data-name="Group 9984"
            xmlns="http://www.w3.org/2000/svg"
            width="26.397"
            height="26.398"
            viewBox="0 0 26.397 26.398"
          >
            <g
              id="Group_9983"
              data-name="Group 9983"
              transform="translate(0 0)"
            >
              <circle
                id="Circle"
                cx="13.199"
                cy="13.199"
                r="13.199"
                fill="#fff"
              />
              <path
                id="Vector"
                d="M7.919,1.427c2.115,0,2.365.008,3.2.046a4.381,4.381,0,0,1,1.471.273,2.454,2.454,0,0,1,.911.592,2.454,2.454,0,0,1,.592.911,4.381,4.381,0,0,1,.273,1.47c.038.835.046,1.086.046,3.2s-.008,2.365-.046,3.2a4.381,4.381,0,0,1-.273,1.47,2.622,2.622,0,0,1-1.5,1.5,4.381,4.381,0,0,1-1.471.273c-.835.038-1.085.046-3.2.046s-2.365-.008-3.2-.046a4.381,4.381,0,0,1-1.471-.273,2.453,2.453,0,0,1-.911-.592,2.454,2.454,0,0,1-.592-.911,4.381,4.381,0,0,1-.273-1.47c-.038-.835-.046-1.086-.046-3.2s.008-2.365.046-3.2a4.381,4.381,0,0,1,.273-1.47,2.453,2.453,0,0,1,.592-.911,2.453,2.453,0,0,1,.911-.592,4.381,4.381,0,0,1,1.471-.273C5.554,1.435,5.8,1.427,7.919,1.427ZM7.919,0C5.769,0,5.5.009,4.654.048A5.813,5.813,0,0,0,2.732.416a3.882,3.882,0,0,0-1.4.913,3.882,3.882,0,0,0-.913,1.4A5.812,5.812,0,0,0,.048,4.654C.009,5.5,0,5.769,0,7.919s.009,2.42.048,3.265a5.812,5.812,0,0,0,.368,1.922,3.882,3.882,0,0,0,.913,1.4,3.882,3.882,0,0,0,1.4.913,5.812,5.812,0,0,0,1.922.368c.845.039,1.114.048,3.265.048s2.42-.009,3.265-.048a5.812,5.812,0,0,0,1.922-.368,4.049,4.049,0,0,0,2.316-2.316,5.813,5.813,0,0,0,.368-1.922c.039-.845.048-1.114.048-3.265s-.009-2.42-.048-3.265a5.813,5.813,0,0,0-.368-1.922,3.882,3.882,0,0,0-.913-1.4,3.882,3.882,0,0,0-1.4-.913A5.813,5.813,0,0,0,11.184.048C10.34.009,10.07,0,7.919,0Z"
                transform="matrix(1, 0, 0, 1, 5.279, 5.279)"
                fill="#16191e"
              />
              <g id="Group" transform="translate(9.136 9.136)">
                <path
                  id="Vector-2"
                  data-name="Vector"
                  d="M4.067,0A4.067,4.067,0,1,0,8.133,4.067,4.067,4.067,0,0,0,4.067,0Zm0,6.706a2.64,2.64,0,1,1,2.64-2.64A2.64,2.64,0,0,1,4.067,6.706Z"
                  transform="matrix(1, 0, 0, 1, 0, 0)"
                  fill="#16191e"
                />
              </g>
              <g
                id="Group-2"
                data-name="Group"
                transform="translate(16.479 8.022)"
              >
                <path
                  id="Vector-3"
                  data-name="Vector"
                  d="M1.9.95A.95.95,0,1,1,.95,0,.95.95,0,0,1,1.9.95Z"
                  transform="matrix(1, 0, 0, 1, 0, 0)"
                  fill="#16191e"
                />
              </g>
            </g>
          </svg>

          <svg
            className="mx-3 svg"
            id="Group_9985"
            data-name="Group 9985"
            xmlns="http://www.w3.org/2000/svg"
            width="26.397"
            height="26.398"
            viewBox="0 0 26.397 26.398"
          >
            <circle
              id="Circle"
              cx="13.199"
              cy="13.199"
              r="13.199"
              transform="translate(0 0)"
              fill="#fff"
            />
            <path
              id="Vector"
              d="M15.839,1.524a6.488,6.488,0,0,1-1.866.512A3.258,3.258,0,0,0,15.4.238a6.508,6.508,0,0,1-2.063.789A3.252,3.252,0,0,0,7.8,3.99,9.224,9.224,0,0,1,1.1.595,3.253,3.253,0,0,0,2.109,4.933,3.239,3.239,0,0,1,.637,4.526v.041A3.253,3.253,0,0,0,3.243,7.754a3.249,3.249,0,0,1-1.468.055,3.254,3.254,0,0,0,3.036,2.257A6.521,6.521,0,0,1,.776,11.457,6.475,6.475,0,0,1,0,11.412a9.2,9.2,0,0,0,4.981,1.46,9.182,9.182,0,0,0,9.245-9.245c0-.141,0-.281-.01-.42A6.618,6.618,0,0,0,15.839,1.524Z"
              transform="translate(5.279 6.763)"
              fill="#16191e"
            />
          </svg>

          <svg
            className="mx-3 svg"
            id="Group_9986"
            data-name="Group 9986"
            xmlns="http://www.w3.org/2000/svg"
            width="26.397"
            height="26.398"
            viewBox="0 0 26.397 26.398"
          >
            <g
              id="Group_9982"
              data-name="Group 9982"
              transform="translate(0 0)"
            >
              <circle
                id="Circle"
                cx="13.199"
                cy="13.199"
                r="13.199"
                fill="#fff"
              />
              <path
                id="Vector"
                d="M3.151,1.507a1.493,1.493,0,0,1-1.6,1.487A1.454,1.454,0,0,1,0,1.507,1.454,1.454,0,0,1,1.566,0,1.491,1.491,0,0,1,3.151,1.507ZM.079,13.739V4.168H3.054v9.57H.079Z"
                transform="matrix(1, 0, 0, 1, 6.6, 5.279)"
                fill="#16191e"
              />
              <g id="Group" transform="translate(11.958 9.234)">
                <path
                  id="Vector-2"
                  data-name="Vector"
                  d="M.079,3.268C.079,2.074.039,1.056,0,.215H2.584l.137,1.311H2.78A3.5,3.5,0,0,1,5.735,0C7.692,0,9.16,1.292,9.16,4.109V9.786H6.185v-5.3c0-1.234-.43-2.075-1.507-2.075A1.587,1.587,0,0,0,3.172,3.522a2.112,2.112,0,0,0-.117.744V9.786H.08V3.268Z"
                  transform="matrix(1, 0, 0, 1, 0, 0)"
                  fill="#16191e"
                />
              </g>
            </g>
          </svg>

          <svg
            className="mx-3 svg"
            id="Group_9987"
            data-name="Group 9987"
            xmlns="http://www.w3.org/2000/svg"
            width="26.397"
            height="26.398"
            viewBox="0 0 26.397 26.398"
          >
            <g
              id="Group_9980"
              data-name="Group 9980"
              transform="translate(0 0)"
            >
              <circle
                id="Circle"
                cx="13.199"
                cy="13.199"
                r="13.199"
                transform="translate(0 0)"
                fill="#fff"
              />
              <path
                id="Vector"
                d="M6.807,2.612a7.788,7.788,0,0,0-1.316-.144c-.946,0-1.008.411-1.008,1.07V4.709H6.848L6.642,7.136H4.483v7.382H1.522V7.136H0V4.709H1.522v-1.5C1.522,1.152,2.489,0,4.915,0A10.322,10.322,0,0,1,7.177.288Z"
                transform="matrix(1, 0, 0, 1, 9.898, 5.939)"
                fill="#16191e"
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Footer;
