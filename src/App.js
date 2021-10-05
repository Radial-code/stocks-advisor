import Router from "./component/Router";
import { useEffect, useState } from "react";
import { getUserProfileAction } from "./redux/action/auth";
import { useDispatch, useSelector } from "react-redux";
import { useFixedScreenProvider } from "./contexts/FixedScreenProvider";
import { withRouter } from "react-router";
import Loader from "./component/common/Loader";
import VerifyRoutes from "./component/common/VerifyRoutes";
import "./App.css";
import "./assets/css/common.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App({ history }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const auth = useSelector((state) => state.auth.auth);
  const userData = useSelector((state) => state.auth.userData);

  console.log("userData", userData);
  useEffect(() => {
    dispatch(getUserProfileAction(setLoading, history));
  }, []);

  const { isScreenFixed } = useFixedScreenProvider();

  return (
    <div
      className={`${
        isScreenFixed ? "overflow-hidden  h-100vh" : ""
      } d-flex justify-content-between flex-column h-100vh `}
    >
      {/* {auth ? (
        <>
          {loading ? (
            <Loader />
          ) : !userData.isEmailConfirmed &&
            !userData.isMobileNumberConfirmed ? (
            <VerifyRoutes />
          ) : (
            <Router />
          )}
        </>
      ) : ( */}
      <Router />
      {/* // )} */}
    </div>
  );
}

export default withRouter(App);
