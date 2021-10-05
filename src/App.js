import Router from "./component/Router";
import { useEffect, useState } from "react";
import {
  getLocalStorageToken,
  getUserProfileAction,
} from "./redux/action/auth";
import { useDispatch, useSelector } from "react-redux";
import { useFixedScreenProvider } from "./contexts/FixedScreenProvider";
import { withRouter } from "react-router";
import Loader from "./component/common/Loader";
import VerifyRoutes from "./component/common/VerifyRoutes";
import "./App.css";
import "./assets/css/common.css";
import "bootstrap/dist/css/bootstrap.min.css";
import IsPhoneConfirmed from "./component/auth/verfiy/IsPhoneConfirmed";

function App({ history }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const auth = useSelector((state) => state.auth.auth);
  const userData = useSelector((state) => state.auth.userData);
  const { isScreenFixed } = useFixedScreenProvider();

  useEffect(() => {
    dispatch(getLocalStorageToken());
    if (auth) {
      dispatch(getUserProfileAction(setLoading, history));
    }
  }, [auth]);

  return (
    <div
      className={`${
        isScreenFixed ? "overflow-hidden  h-100vh" : ""
      } d-flex justify-content-between flex-column h-100vh `}
    >
      {auth ? (
        <>
          {loading ? (
            <Loader />
          ) : !userData.isEmailConfirmed ? (
            <VerifyRoutes />
          ) : !userData.isMobileNumberConfirmed ? (
            <IsPhoneConfirmed />
          ) : (
            <Router />
          )}
        </>
      ) : (
        <Router />
      )}
    </div>
  );
}

export default withRouter(App);
