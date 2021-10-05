import { useState } from "react";
import { useDispatch } from "react-redux";
import { verfiyEmailAction } from "../../../redux/action/auth";
import LogoPhoto from "../../../assets/img/Navbar-logo-img.png";

const IsEmailMessage = ({ hitory }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const verfiyEmailToken = () => {
    dispatch(verfiyEmailAction(setLoading));
  };

  return (
    <div className="container">
      <form>
        <div className="row  justify-content-center align-items-center ">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 p-sm-5 p-2 email-verify-box mt-5 mb-5">
            <h1 className="text-center ">Verify Your Email Address</h1>
            <p className="text-center pt-4">
              Before proceeding, please check your email for a verification
              link. If you did not receive the email,
              <span className="request-line">
                click here to request another
              </span>
            </p>
            <p className="text-center orr pt-3">or</p>
            <div className="d-flex justify-content-center mt-4 ">
              <button type="button" className="log-outbtn px-4 ">
                Resend Email
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default IsEmailMessage;
