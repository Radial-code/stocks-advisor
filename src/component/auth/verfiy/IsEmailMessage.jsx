import { useState } from "react";
import { useDispatch } from "react-redux";
import { verfiyEmailAction } from "../../../redux/action/auth";
import Loader from "../../common/Loader";
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
        <div className="row height-100vh  justify-content-center align-items-center ">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 p-sm-5 p-3 email-verify-box mt-5 mb-5">
            <div className="row">
              <div className="col justify-content-center d-flex mt-5">
                <img src={LogoPhoto} style={{ width: "40%" }} />
              </div>
            </div>
            <h1 className="text-center ">Verify Your Email Address</h1>
            <p className="text-center pt-4">
              Before proceeding, please check your email for a verification
              link. If you did not receive the email
            </p>
            <p className="request-line text-center">
              click here to request another
            </p>
            <p className="text-center orr pt-3">or</p>
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
          </div>
        </div>
      </form>
    </div>
  );
};
export default IsEmailMessage;
