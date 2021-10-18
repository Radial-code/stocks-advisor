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
import IsPhoneConfirmed from "./component/auth/verfiy/IsPhoneConfirmed";
import IsEmailMessage from "./component/auth/verfiy/IsEmailMessage";
import BubblesLoader from "./component/common/BubblesLoader";
import "./assets/css/common.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { getPortfolioListForDashBoardAction } from "./redux/action/portfolio";
import LayoutChangerProvider from "./redux/LayoutChangerProvider";

function App({ history }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const sideBarHandler = () => setShowSidebar(!showSidebar);
  const stripePromise = loadStripe(
    "pk_test_51Ix50ySAXA6ohppa6sCSbgt2LbGnFl07UlO5v7HnRza0NT0idMwCYas5ouQBR8GEmv4l2SeR3lfwJXKzVUxmkghh00fs3EjdLI"
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [sideBarLoading, setSideBarLoading] = useState(false);
  const auth = useSelector((state) => state.auth.auth);
  const stateToken = useSelector((state) => state.auth.token);
  const userData = useSelector((state) => state.auth.userData);
  const { isScreenFixed } = useFixedScreenProvider();
  const token = localStorage.getItem("stock-advisor");

  useEffect(() => {
    if (!!token) {
      dispatch(getLocalStorageToken());
      if (auth && token) {
        dispatch(getUserProfileAction(setLoading, history, token));
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
              !userData.isEmailConfirmed ? (
                <IsEmailMessage />
              ) : !userData.isMobileNumberConfirmed ? (
                <IsPhoneConfirmed />
              ) : (
                <Router
                  showSidebar={showSidebar}
                  sideBarHandler={sideBarHandler}
                  setShowSidebar={setShowSidebar}
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
