import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import LogoPhoto from "../../../assets/img/Navbar-logo-img.png";
import { verfiyEmailTokenAction } from "../../../redux/action/auth";
import BubblesLoader from "../../common/BubblesLoader";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";

const IsEmailConfirmed = ({ match, history }) => {
  const { getValueOf } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const { token, userId } = match.params;

  useEffect(() => {
    if (token && userId) {
      const data = {
        resetPasswordToken: token,
        userId: userId,
      };
      dispatch(verfiyEmailTokenAction(data, history, userData));
    }
  }, []);

  return (
    <div className="container">
      <form>
        <div className="row height-100vh  justify-content-center align-items-center ">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 p-sm-5 p-3 email-verify-box mt-5 mb-5">
            <div className="row">
              <div className="col justify-content-center d-flex my-4">
                <img src={LogoPhoto} style={{ width: "40%" }} alt="" />
              </div>
            </div>
            <h1 className="text-center ">
              {getValueOf("Verify Your Email Address")}
            </h1>
            <p className="text-center pt-4">
              {getValueOf("We are verifing your email address")}
            </p>
            <p className="request-line text-center">
              {getValueOf("Please wait for something")}
            </p>
            <div className="d-flex justify-content-center pt-2">
              <BubblesLoader />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default withRouter(IsEmailConfirmed);
