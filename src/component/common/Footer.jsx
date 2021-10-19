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
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

const Footer = ({ history }) => {
  const { setLayoutClickChanger, layoutClickChanger } =
    useLayoutChangerProvider();
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
    <section className="bg-16191E">
      <div className="container pt-3 pb-4 pt-lg-5">
        <div className="row justify-content-between">
          <div className="col-lg-3 col-12 d-flex  flex-column justify-content-center align-items-lg-start">
            <Link to="/" className="text-center">
              <img className="filter-img" src={logo} alt="" />
            </Link>

            <p
              className={`${
                layoutClickChanger
                  ? "text-white text-center stock-paragraph mw-480 d-lg-none my-4 my-lg-0"
                  : "text-white text-center stock-paragraph   d-lg-none my-4 my-lg-0"
              } `}
            >
              Duis venenatis aliquet eros, non feugiat tortor semper sed. In
              diam risus, efficitur sit amet dolor vitae, finibus tristique arcu
              finibus tristique arcu finibus tristique arcu finibus
            </p>
            <span className="d-flex justify-content-center mt-3">
              <button
                className="text-decoration-none text-white footer-btn"
                onClick={() => history.push("/contact-us")}
              >
                Contact Us
              </button>
            </span>
          </div>

          <div className="col-lg-5 col-12 mt-5 mt-md-0 d-none d-lg-block">
            <p
              className={`${
                layoutClickChanger
                  ? "text-white text-center stock-paragraph mw-480"
                  : "text-white text-center  stock-paragraph mw-480 "
              }`}
            >
              Duis venenatis aliquet eros, non feugiat tortor semper sed. In
              diam risus, efficitur sit amet dolor vitae, finibus tristique arcu
              finibus tristique arcu finibus tristique arcu finibus
            </p>
          </div>

          <div className="col-xl-3 col-lg-3 col-12">
            <div className="d-flex justify-content-lg-end justify-content-md-around justify-content-between  mt-4 mt-lg-0">
              <ul className="list-unstyled footer-ul mb-0 text-center text-lg-start">
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
                    to="/our-plan"
                  >
                    Our Plan
                  </Link>
                </li>
              </ul>

              <ul className="list-unstyled mb-0 footer-ul text-center text-lg-start">
                {auth && !!token ? (
                  <li>
                    <Link
                      className="text-decoration-none text-white fs-15"
                      to={`/protfolios/stock/${dashboardPortfoliosListId}`}
                    >
                      Portfolio
                    </Link>
                  </li>
                ) : null}
                {auth && token ? (
                  <li>
                    <Link
                      className="text-decoration-none text-white fs-15"
                      to="/dashboard/manage/subscription"
                    >
                      Dashboard
                    </Link>
                  </li>
                ) : null}
                {!auth && !token ? (
                  <>
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
                  </>
                ) : null}
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
              <a target="_blank" href="https://www.instagram.com">
                <InstagramIcon />
              </a>
              <a target="_blank" href="https://ads.twitter.com">
                <TwitterIcon />
              </a>
              <a target="_blank" href="https://www.linkedin.com/notifications/">
                <LinkedinIcon />
              </a>
              <a target="_blank" href="https://www.facebook.com/">
                <FacebookIcon />
              </a>
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
export default withRouter(Footer);
