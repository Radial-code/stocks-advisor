import Router from "./component/Router";
import { useEffect, useState } from "react";
import {
  getLocalStorageToken,
  getUserProfileAction,
} from "./redux/action/auth";
import { useDispatch, useSelector } from "react-redux";
import { useFixedScreenProvider } from "./contexts/FixedScreenProvider";
import { withRouter } from "react-router";
import LogoImage from "./assets/img/Navbar-logo-img.png";
import IsPhoneConfirmed from "./component/auth/verfiy/IsPhoneConfirmed";
import IsEmailMessage from "./component/auth/verfiy/IsEmailMessage";
import BubblesLoader from "./component/common/BubblesLoader";
import "./assets/css/common.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { getPortfolioListForDashBoardAction } from "./redux/action/portfolio";

function App({ history }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [sideBarLoading, setSideBarLoading] = useState(false);
  const auth = useSelector((state) => state.auth.auth);
  const userData = useSelector((state) => state.auth.userData);
  const { isScreenFixed } = useFixedScreenProvider();
  const token = localStorage.getItem("stock-advisor");

  useEffect(() => {
    dispatch(getLocalStorageToken());
    if (auth) {
      dispatch(getUserProfileAction(setLoading, history, token));
    }
  }, [auth]);

  useEffect(() => {
    dispatch(getPortfolioListForDashBoardAction(setSideBarLoading));
  }, []);

  return (
    <div
      className={`${
        isScreenFixed ? "overflow-hidden  h-100vh" : ""
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
              <Router />
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
        <Router />
      )}
    </div>
  );
}

export default withRouter(App);
