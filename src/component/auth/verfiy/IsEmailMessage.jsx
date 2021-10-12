import { useState } from "react";
import { useDispatch } from "react-redux";
import { LogoutAction, verfiyEmailAction } from "../../../redux/action/auth";
import Loader from "../../common/Loader";
import LogoPhoto from "../../../assets/img/Navbar-logo-img.png";
import { withRouter } from "react-router";

const IsEmailMessage = ({ history }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const verfiyEmailToken = () => {
    dispatch(verfiyEmailAction(setLoading));
  };

  return (
    <div className="container">
      <form>
        <div className="row height-100vh  justify-content-center align-items-center ">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 p-sm-5 p-2 pt-4 pb-4 email-verify-box ">
            <div className="row">
              <div className="col justify-content-center d-flex my-4">
                <img src={LogoPhoto} style={{ width: "40%" }} />
              </div>
            </div>
            <h1 className="text-center  mt-5">Verify Your Email Address</h1>
            <p className="text-center pt-4">
              Before proceeding, please check your email for a verification
              link. If you did not receive the email
            </p>
            <p className="request-line text-center">
              click here to request another
            </p>
            <div className="d-flex justify-content-center mt-4 ">
              <button
                type="button"
                disabled={loading}
                onClick={() => verfiyEmailToken()}
                className="resend-email-btnn px-4 "
              >
                {loading ? <Loader /> : "Resend Email"}
              </button>
            </div>
            <p className="text-center orr pt-3">or</p>
            <div className="d-flex justify-content-center mt-4 ">
              <span
                onClick={() => dispatch(LogoutAction(history))}
                type="button"
                disabled={loading}
              >
                Logout
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default withRouter(IsEmailMessage);
