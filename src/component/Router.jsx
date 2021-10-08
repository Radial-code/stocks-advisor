import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ForgetPassword from "./auth/ForgetPassword";
import Homepage from "./home/Homepage";
import OurPlanspage from "../view/OurPlanspage";
import Stockpage from "../view/Stockpage";
import About from "../view/About";
import Payment from "./payment/Payment";
import Dashboard from "../view/dashboard/Dashboard";
import Login from "./form/Login";
import SignUp from "./form/SignUp";
import LogInModal from "./modal/LogInModal";
import Navbar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
import Subscription from "./modal/Subscription";
import Netflix from "./netflixinc/Netflix";
import News from "../component/News/News";
import Portfolio from "../view/Portfolio";
import Contact from "./contact/Contact";
import NewsDetails from "../view/NewsDetails";
import ChangePassword from "./form/ChangePassword";
import CreateNewPassword from "./form/CreateNewPassword";
import OtpInputs from "./stocksotpinput/OtpInputs";
import IsEmailMessage from "./auth/verfiy/IsEmailMessage";
import IsEmailConfirmed from "./auth/verfiy/IsEmailConfirmed";
import IsPhoneConfirmed from "./auth/verfiy/IsPhoneConfirmed";
import ResendOtp from "./auth/verfiy/ResendOtp";
import CmPanelRoutes from "./cmPanel/CmPanelRoutes";
import NetflixChart from "./stockPage/NetflixChart";
import OtherServicesForm from "./cmPanel/otherServices/OtherServicesForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/**Auth routes */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/forget/password" component={ForgetPassword} />
        <Route
          exact
          path="/verify/email/:token/:userId"
          component={IsEmailConfirmed}
        />
        <Route exact path="/verify/mobile-otp" component={IsPhoneConfirmed} />
        <Route exact path="/resend-otp" component={ResendOtp} />
        {/** */}
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/stock" component={Stockpage} />
        <Route exact path="/" component={OurPlanspage} />
        <Route exact path="/news" component={News} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/portfolio" component={Portfolio} />
        <Route exact path="/loginmodal" component={LogInModal} />
        <Route exact path="/subsmodal" component={Subscription} />
        <Route exact path="/netflix" component={Netflix} />
        <Route exact path="/netfix/chart" component={NetflixChart} />
        <Route exact path="/AllNews" component={NewsDetails} />
        <Route exact path="/create-newpassword" component={CreateNewPassword} />
        <Route exact path="/change-password" component={ChangePassword} />
        <Route exact path="/otpinputs" component={OtpInputs} />
        <Route exact path="/email" component={IsEmailMessage} />
        {/** Content Manager panel Dashboard */}
        <Route path="/content/manager/stocks" component={CmPanelRoutes} />
        <Route path="/content/manager/add/stock" component={CmPanelRoutes} />
        <Route path="/content/manager/news" component={CmPanelRoutes} />
        <Route path="/content/manager/add/news" component={CmPanelRoutes} />
        <Route path="/content/manager/users" component={CmPanelRoutes} />
        <Route path="/content/manager/edit/user" component={CmPanelRoutes} />
        <Route path="/content/manager/plan/form" component={CmPanelRoutes} />

        <Route
          path="/content/manager/other/services"
          component={CmPanelRoutes}
        />
        <Route
          path="/content/manager/add/other/services"
          component={OtherServicesForm}
        />

        <Route
          path="/content/manager/our/plans/details"
          component={CmPanelRoutes}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
