import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ForgetPassword from "./auth/ForgetPassword";
import Login from "./form/Login";
import SignUp from "./form/SignUp";
import ChangePassword from "./form/ChangePassword";
import CreateNewPassword from "./form/CreateNewPassword";
import OtpInputs from "./stocksotpinput/OtpInputs";
import IsEmailMessage from "./auth/verfiy/IsEmailMessage";
import IsEmailConfirmed from "./auth/verfiy/IsEmailConfirmed";
import IsPhoneConfirmed from "./auth/verfiy/IsPhoneConfirmed";
import ResendOtp from "./auth/verfiy/ResendOtp";

const ConfirmRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/**Auth routes */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup/:inviteCode" component={SignUp} />
        <Route path="/forget/password" component={ForgetPassword} />
        <Route
          exact
          path="/verify/email/:token/:userId"
          component={IsEmailConfirmed}
        />
        <Route
          exact
          path="/verify/mobile-otp/resend"
          component={IsPhoneConfirmed}
        />
        <Route exact path="/resend-otp/verify" component={ResendOtp} />
        <Route exact path="/create-newpassword" component={CreateNewPassword} />
        <Route exact path="/change-password" component={ChangePassword} />
        <Route exact path="/otp/input" component={OtpInputs} />
        <Route exact path="/" component={IsEmailMessage} />
      </Switch>
    </BrowserRouter>
  );
};
export default ConfirmRoute;
