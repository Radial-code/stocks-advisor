import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { verfiyMobileOtpAction } from "../../../redux/action/auth";

const IsPhoneConfirmed = ({ history }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [verificationOTP, setVerificationOTP] = useState("");
  const userData = useSelector((state) => state.auth.userData);

  const verificationOTPSubmit = () => {
    if (verificationOTP) {
      const data = {
        verificationOTP: verificationOTP,
      };
      dispatch(verfiyMobileOtpAction(data, setLoading, history, userData));
    }
  };

  return (
    <div>
      <h1>message;</h1>
    </div>
  );
};
export default withRouter(IsPhoneConfirmed);
