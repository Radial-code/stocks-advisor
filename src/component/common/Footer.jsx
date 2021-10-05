import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Navbar-logo-img.png";
import {
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
} from "../common/icons/Icons";

const Footer = () => {
  return (
    <section className="bg-16191E">
      <div className="container pt-lg-5 pt-3  pb-3 pt-lg-5">
        <div className="row justify-content-between align-items-end">
          <div className="col-lg-3 col-12 d-flex  flex-column justify-content-center align-items-lg-start">
            <Link to="/" className="text-center">
              <img className="filter-img" src={logo} alt="" />
            </Link>

            <p className="text-white text-center stock-paragraph mw-480 d-lg-none my-4 my-lg-0">
              Duis venenatis aliquet eros, non feugiat tortor semper sed. In
              diam risus, efficitur sit amet dolor vitae, finibus tristique arcu
              finibus tristique arcu finibus tristique arcu finibus
            </p>
            <span className="d-flex justify-content-center mt-3">
              <button
                className="text-decoration-none text-white footer-btn"
                to="/contact-us"
              >
                Contact Us
              </button>
            </span>
          </div>

          <div className="col-lg-5 col-12 mt-5 mt-md-0 d-none d-lg-block">
            <p className="text-white text-center stock-paragraph mw-480 ">
              Duis venenatis aliquet eros, non feugiat tortor semper sed. In
              diam risus, efficitur sit amet dolor vitae, finibus tristique arcu
              finibus tristique arcu finibus tristique arcu finibus
            </p>
          </div>

          <div className="col-xl-2 col-lg-3 col-12">
            <div className="d-flex justify-content-around justify-content-lg-between mt-4 mt-lg-0">
              <ul className="list-unstyled footer-ul mb-0 text-center text-lg-start">
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

              <ul className="list-unstyled mb-0 footer-ul text-center text-lg-start">
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

      <div className="b-b-1 d-none d-lg-block"></div>
      <div className="container">
        <div className="row my-3 justify-content-between align-items-center">
          <div className="col-12 d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between">
            <p className="text-white mx-auto mx-md-0 mb-0 mw-479 d-none d-lg-block">
              Copyright @ 2021 Nala's Mane
            </p>
            <span className="d-flex justify-content-center">
              <InstagramIcon />
              <TwitterIcon />
              <LinkedinIcon />
              <FacebookIcon />
            </span>
          </div>
        </div>
      </div>
      <div className="b-b-1 d-lg-none"></div>
      <p className="text-white text-center my-2 mw-479 d-lg-none">
        Copyright @ 2021 Nala's Mane
      </p>
    </section>
  );
};

export default Footer;