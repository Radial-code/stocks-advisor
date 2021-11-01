import Router from "./component/Router";
import { useEffect, useState } from "react";
import {
  getLocalStorageToken,
  getUserProfileAction,
} from "./redux/action/auth";
import { useDispatch, useSelector } from "react-redux";
import { useFixedScreenProvider } from "./contexts/FixedScreenProvider";
import { withRouter } from "react-router";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import LogoImage from "./assets/img/Navbar-logo-img.png";
import BubblesLoader from "./component/common/BubblesLoader";
import "./assets/css/common.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { getPortfolioListForDashBoardAction } from "./redux/action/portfolio";
import LayoutChangerProvider from "./redux/LayoutChangerProvider";
import ConfirmRoute from "./component/ConfirmRoute";
import i18n from "./translation/i18n";
import { observable, computed, reaction } from "mobx";

class AppStore {
  observable;
}

const appStore = new AppStore();

reaction(
  () => appStore.locale,
  (locale) => {
    console.log("change language");
    i18n.changeLanguage(locale);
  }
);

function App({ t }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSidebar2, setShowSidebar2] = useState(false);
  const sideBarHandler = () => setShowSidebar(!showSidebar);
  const stripePromise = loadStripe(
    "pk_test_51JojDBSA6U9MBWzFtxmw0E1QxCkuXOW4qlOGhqtFPlS6Mo84Rsvbs65KVJ0JjSdC7HmYnSwgvu8zkM8lYpfF9RDt008ZkphiZj"
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [sideBarLoading, setSideBarLoading] = useState(false);
  const auth = useSelector((state) => state.auth.auth);
  const userData = useSelector((state) => state.auth.userData);
  const { isScreenFixed } = useFixedScreenProvider();
  const token = localStorage.getItem("stock-advisor");

  useEffect(() => {
    if (!!token) {
      dispatch(getLocalStorageToken());
      if (token !== null) {
        dispatch(getUserProfileAction(setLoading, token));
        dispatch(getPortfolioListForDashBoardAction(setSideBarLoading));
      }
    }
  }, [auth, token]);

  return (
    <LayoutChangerProvider>
      <div
        className={`${
          isScreenFixed
            ? "overflow-hidden  h-100vh"
            : showSidebar
            ? "overflow-hidden"
            : ""
        } ${
          showSidebar2 ? "overflow-hidden" : ""
        } d-flex justify-content-between flex-column h-100vh `}
      >
        {!!auth && !!token ? (
          <>
            {loading ? (
              <div className="h-100vh d-flex justify-content-center align-items-center flex-column">
                <div className="mb-5">
                  <img src={LogoImage} />
                </div>
                <BubblesLoader />
              </div>
            ) : userData !== {} ? (
              !userData.isEmailConfirmed ||
              !userData.isMobileNumberConfirmed ? (
                <ConfirmRoute />
              ) : (
                <Router
                  showSidebar={showSidebar}
                  sideBarHandler={sideBarHandler}
                  setShowSidebar={setShowSidebar}
                  showSidebar2={showSidebar2}
                  setShowSidebar2={setShowSidebar2}
                />
              )
            ) : (
              <div className="h-100vh d-flex justify-content-center align-items-center flex-column">
                <div className="mb-5">
                  <img src={LogoImage} />
                </div>
                <BubblesLoader />
              </div>
            )}
          </>
        ) : (
          <Elements stripe={stripePromise}>
            <Router />
          </Elements>
        )}
      </div>
    </LayoutChangerProvider>
  );
}
export default withRouter(App);
