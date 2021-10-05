import { useState } from "react";
import { useDispatch } from "react-redux";
import { verfiyEmailAction } from "../../../redux/action/auth";
import LogoPhoto from "../../../assets/img/Navbar-logo-img.png";

const IsEmailMessage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const verfiyEmailToken = () => {
    dispatch(verfiyEmailAction(setLoading));
  };

  return (
    <div className="container">
      <form>
        <div className="row  justify-content-center ">
          <div className="col-12 col-lg-5 otp-box p-5 mt-5 mb-5">
            <div className="row">
              <div className="col justify-content-center d-flex mt-5">
                <img src={LogoPhoto} style={{ width: "40%" }} />
              </div>
            </div>
            <div className="row mt-5 justify-content-center ">
              <div className="col-12 col-xl-8  otp-inputs mb-3 pt-5">
                <label for="exampleInputEmail1" class="form-label">
                  Enter your otpaaa
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your otp"
                />
              </div>
            </div>
            <div className="d-flex  flex-column flex-md-row justify-content-center mt-3 mb-4">
              <div className="mx-md-2">
                <button className="verify-otp px-3  mt-3 verify-otp w-100">
                  Verify OTP
                </button>
              </div>
              <div className="">
                <button className="resend-otp px-3  mt-3  w-100">
                  Resend OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default IsEmailMessage;
