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
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();
  const auth = useSelector((state) => state.auth.auth);
  const userData = useSelector((state) => state.auth.userData);
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
                {getValueOf("Contact Us")}
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
            <div className="d-flex justify-content-lg-end  justify-content-center  mt-4 mt-lg-0">
              <ul className="list-unstyled footer-ul mb-0 text-center text-lg-start">
                <li>
                  <Link
                    className="text-decoration-none text-white fs-15"
                    to="/"
                  >
                    {getValueOf("Home")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white fs-15"
                    to="/about"
                  >
                    {getValueOf("About")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white fs-15"
                    to="/news"
                  >
                    {getValueOf("News")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-white fs-15"
                    to="/our-plan"
                  >
                    {getValueOf("Our Plans")}
                  </Link>
                </li>
              </ul>

              <ul
                className={`${
                  layoutClickChanger
                    ? "list-unstyled mb-0 footer-ul text-center text-lg-start"
                    : "list-unstyled mb-0 footer-ul text-center text-lg-start ms-4"
                }`}
              >
                {auth && !!token && userData.isPaidPlan ? (
                  <li>
                    <Link
                      className="text-decoration-none text-white fs-15"
                      to={`/protfolios/stock/${dashboardPortfoliosListId}`}
                    >
                      {getValueOf("Portfolios")}
                    </Link>
                  </li>
                ) : null}
                {auth && token ? (
                  <li>
                    <Link
                      className="text-decoration-none text-white fs-15"
                      to="/dashboard/manage/subscription"
                    >
                      {getValueOf("Dashboard")}
                    </Link>
                  </li>
                ) : null}
                {auth && token ? null : (
                  <div className={`${layoutClickChanger ? "" : "ms-3"}`}>
                    <li>
                      <Link
                        className="text-decoration-none text-white fs-15"
                        to="/login"
                      >
                        {getValueOf("Login")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-decoration-none text-white fs-15"
                        to="/signup"
                      >
                        {getValueOf("Join Now")}
                      </Link>
                    </li>
                  </div>
                )}
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
              {getValueOf("Copyright")} @ 2021 Nala's Mane
            </p>

            {auth && token ? (
              <span className="d-flex justify-content-center">
                <a
                  className={`${layoutClickChanger ? "mx-2" : "mx-2"}`}
                  target="_blank"
                  href="https://www.facebook.com/"
                >
                  <FacebookIcon />
                </a>
                <a
                  className={`${layoutClickChanger ? "mx-2" : "mx-2"}`}
                  target="_blank"
                  href="https://www.linkedin.com/notifications/"
                >
                  <LinkedinIcon />
                </a>
                <a
                  className={`${layoutClickChanger ? "mx-2" : "mx-2"}`}
                  target="_blank"
                  href="https://www.twitter.com"
                >
                  <TwitterIcon />
                </a>
                <a
                  className={`${layoutClickChanger ? " me-2" : "me-0 ms-2"}`}
                  target="_blank"
                  href="https://www.instagram.com"
                >
                  <InstagramIcon />
                </a>
              </span>
            ) : (
              <span className="d-flex justify-content-center">
                <a
                  className={`${layoutClickChanger ? "mx-2" : "mx-2"}`}
                  target="_blank"
                  href="https://www.facebook.com/"
                >
                  <FacebookIcon />
                </a>
                <a
                  className={`${layoutClickChanger ? "mx-2" : "mx-2"}`}
                  target="_blank"
                  href="https://www.linkedin.com/notifications/"
                >
                  <LinkedinIcon />
                </a>
                <a
                  className={`${layoutClickChanger ? "mx-2" : "mx-2"}`}
                  target="_blank"
                  href="https://www.twitter.com"
                >
                  <TwitterIcon />
                </a>
                <a
                  className={`${layoutClickChanger ? "me-2" : "me-0 ms-2"}`}
                  target="_blank"
                  href="https://www.instagram.com"
                >
                  <InstagramIcon />
                </a>
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="b-b-1 d-lg-none"></div>
      <p className="text-white text-center my-2 mw-479 d-lg-none">
        {getValueOf("Copyright")}@ 2021 Nala's Mane
      </p>
    </section>
  );
};
export default withRouter(Footer);
