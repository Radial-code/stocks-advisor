import { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { resendOtpAction } from "../../../redux/action/auth";
import LogoPhoto from "../../../assets/img/Navbar-logo-img.png";
import Loader from "../../common/Loader";
import { PhoneRegex } from "../../common/Validation";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";

const ResendOtp = ({ history }) => {
  const { getValueOf } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [phone, setPhone] = useState("");

  const Submit = () => {
    setError(true);
    if (phone && PhoneRegex.test(phone) === true) {
      const data = {
        phone: phone,
      };
      dispatch(resendOtpAction(data, setLoading, history));
    }
  };

  return (
    <div className="container h">
      <form>
        <div className="row  justify-content-center ">
          <div className="col-12 col-lg-5 otp-box p-5 mt-5 mb-5">
            <div className="row">
              <div className="col justify-content-center d-flex my-4">
                <img src={LogoPhoto} style={{ width: "40%" }} />
              </div>
            </div>
            <div className="row mt-5 justify-content-center ">
              <div className="col-12 col-xl-8  otp-inputs mb-3 pt-5">
                <label for="exampleInputEmail1" class="form-label">
                  {getValueOf("Enter your Phone number")}
                </label>
                <input
                  type="number"
                  class="form-control"
                  placeholder={getValueOf("Enter your Phone number")}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <span className="text-danger">
                  {error && phone === ""
                    ? `${getValueOf("Phone number is required")}`
                    : error && PhoneRegex.test(phone) === false
                    ? `${getValueOf("Enter valid Phone Number")}`
                    : null}
                </span>
              </div>
            </div>
            <div className="d-flex  flex-column flex-md-row justify-content-center mt-3 mb-4">
              <div className="mx-md-2">
                <button
                  type="button"
                  onClick={() => Submit()}
                  disabled={loading}
                  className="verify-otp px-3  mt-3 verify-otp w-100"
                >
                  {loading ? <Loader /> : `${getValueOf("Verify OTP")}`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default withRouter(ResendOtp);
