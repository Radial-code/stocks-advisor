import Router from "./component/Router";
import { useEffect, useState } from "react";
import { getUserProfileAction } from "./redux/action/auth";
import { useDispatch } from "react-redux";
import { useFixedScreenProvider } from "./contexts/FixedScreenProvider";
import "./App.css";
import "./assets/css/common.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from "react-router";
import Loader from "./component/common/Loader";

function App({ history }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

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
      {loading ? <Loader /> : <Router />}{" "}
    </div>
  );
}

export default withRouter(App);
