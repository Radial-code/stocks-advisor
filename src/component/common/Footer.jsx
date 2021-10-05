import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Navbar-logo-img.png";
import { InstagramIcon } from "../common/icons/Icons";

const Footer = () => {
  return (
    <section className="bg-16191E pb-3">
      <div className="container pt-lg-5 pt-3  pb-3 pt-lg-5">
        <div className="row justify-content-between align-items-end">
          <div className="col-lg-3 col-md-4 col-12 d-flex  flex-md-column justify-content-center">
            <Link to="/">
              <img className="filter-img" src={logo} alt="" />
            </Link>
            <span className="d-inline-block mt-3">
              <Link
                className="text-decoration-none text-white footer-btn"
                to="/contact-us"
              >
                Contact Us
              </Link>
            </span>
          </div>

          <div className="col-lg-5 col-md-7 col-12 mt-5 mt-md-0 d-flex justify-content-center d-md-block flex-column ">
            <p className="text-white text-center mb-0 stock-paragraph mw-480">
              Duis venenatis aliquet eros, non feugiat tortor semper sed. In
              diam risus, efficitur sit amet dolor vitae, finibus tristique arcu
              finibus tristique arcu finibus tristique arcu finibus
            </p>
          </div>

          <div className="col-xl-2  col-lg-3 col- mt-5 mt-lg-0  col-12 d-flex d-xsm-block justify-content-center ">
            <div className="d-flex justify-content-between w-xs-250 ">
              <ul className="list-unstyled footer-ul d-flex flex-column align-items-center">
                <li>
                  <Link
                    className="text-decoration-none text-white fs-15"
                    to="/home"
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
                    to="/"
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
                    to="/dashboard/edit/contact"
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
      </div>

      <div className="b-b-1"></div>
      <div className="container d-flex mt-3 justify-content-between align-items-center">
        <p className="text-white mx-auto mx-md-0 mb-0 mw-479 ">
          Copyright @ 2021 Nala's Mane
        </p>

        <div>
          <InstagramIcon />

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
