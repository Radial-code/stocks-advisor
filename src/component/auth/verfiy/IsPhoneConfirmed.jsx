import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { verfiyMobileOtpAction } from "../../../redux/action/auth";
import LogoPhoto from "../../../assets/img/Navbar-logo-img.png";
import Loader from "../../common/Loader";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";

const IsPhoneConfirmed = ({ history }) => {
  const { getValueOf } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [verificationOTP, setVerificationOTP] = useState(0);
  const userData = useSelector((state) => state.auth.userData);

  const verificationOTPSubmit = () => {
    setError(true);
    if (verificationOTP) {
      const data = {
        verificationOTP: verificationOTP,
      };
      dispatch(verfiyMobileOtpAction(data, setLoading, history, userData));
    }
  };

  return (
    <div className="container h-100vh">
      <div className="row  justify-content-center h-100 align-items-center ">
        <div className="col-12 col-lg-5 otp-box p-5 mt-5 mb-5">
          <div className="row">
            <div className="col justify-content-center d-flex mt-4">
              <img src={LogoPhoto} style={{ width: "40%" }} />
            </div>
          </div>
          <div className="row mt-5 justify-content-center ">
            <div className="col-12 col-xl-8  otp-inputs mb-3">
              <label for="exampleInputEmail1" class="form-label">
                {getValueOf("Enter your otp")}
              </label>
              <input
                type="text"
                class="form-control"
                placeholder={getValueOf("Enter your otp")}
                onChange={(e) => setVerificationOTP(e.target.value)}
              />
              <span className="text-danger">
                {error && verificationOTP
                  ? `${getValueOf("OTP is required")}`
                  : (error && verificationOTP.length < 6) ||
                    (error && verificationOTP.length > 6)
                  ? `${getValueOf("Enter valid OTP")}`
                  : null}
              </span>
            </div>
          </div>
          <div className="d-flex  flex-column flex-md-row justify-content-center mt-3 mb-4">
            <div className="">
              <button
                type="button"
                onClick={() => history.push("/resend-otp/verify")}
                className="resend-otp px-3  mt-3  w-100"
              >
                {getValueOf("Resend OTP")}
              </button>
            </div>
            <div className="mx-md-2">
              <button
                type="button"
                onClick={() => verificationOTPSubmit()}
                disabled={loading}
                className="verify-otp px-3  mt-3 verify-otp w-100"
              >
                {loading ? <Loader /> : `${getValueOf("Verify OTP")}`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(IsPhoneConfirmed);
