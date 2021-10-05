import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import ForgetPassword from "./auth/ForgetPassword";
import Homepage from "../view/Homepage";
import OurPlanspage from "../view/OurPlanspage";
import Stockpage from "../view/Stockpage";
import About from "../view/About";
import Payment from "../view/Payment";
import Dashboard from "../view/dashboard/Dashboard";
import CmPanel from "../view/cmPanel/CmPanel";

import Login from "./form/Login";
import SignUp from "./form/SignUp";
import AllNewspage from "../view/AllNewspage";
import LogInModal from "./modal/LogInModal";
import Navbar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
import Subscription from "./modal/Subscription";
import Netflix from "./netflixinc/Netflix";
import News from "../view/News";
import Portfolio from "../view/Portfolio";
import Contact from "./contact/Contact";
import NewsDetails from "../view/NewsDetails";
import NetflixChart from "./stockPage/NetflixChart";
import ChangePassword from "./form/ChangePassword";
import CreateNewPassword from "./form/CreateNewPassword";
import OtpInputs from "./stocksotpinput/OtpInputs";
import IsEmailMessage from "./auth/verfiy/IsEmailMessage";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/**Auth routes */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/forget/password" component={ForgetPassword} />
        {/** */}
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/about" component={About} />{" "}
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/stock" component={Stockpage} />
        <Route exact path="/" component={OurPlanspage} />
        <Route exact path="/news" component={News} />
        {/* <Route exact path="/" component={Homepage} /> */}
        {/* <Route exact path="/ourplans" component={OurPlanspage} /> */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/content/manager" component={CmPanel} />
        <Route path="/portfolio" component={Portfolio} />
        <Route exact path="/loginmodal" component={LogInModal} />
        <Route exact path="/subsmodal" component={Subscription} />
        <Route exact path="/netflix" component={Netflix} />
        <Route exact path="/AllNews" component={NewsDetails} />
        <Route exact path="/create-newpassword" component={CreateNewPassword} />
        <Route exact path="/change-password" component={ChangePassword} />
        <Route exact path="/otpinputs" component={OtpInputs} />
        <Route exact path="/email" component={IsEmailMessage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
