import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ForgetPassword from "./auth/ForgetPassword";
import Homepage from "./home/Homepage";
import OurPlanspage from "../view/OurPlanspage";
import Stockpage from "../view/Stockpage";
import About from "../view/About";
import UserRoutes from "./userPanel/UserRoutes";
import Login from "./form/Login";
import SignUp from "./form/SignUp";
import LogInModal from "./modal/LogInModal";
import Navbar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
import Subscription from "./modal/Subscription";
import Netflix from "./netflixinc/Netflix";
import News from "../component/News/News";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import NewsDetails from "./News/NewsDetails";
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
import Stripe from "./payment/Stripe";
import ViewProfile from "./userPanel/profile/ViewProfile";
import Search from "./search/Search";
import { useState } from "react";

const Router = ({
  showSidebar,
  setShowSidebar,
  showSidebar2,
  setShowSidebar2,
  sideBarHandler,
}) => {
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState("");
  return (
    <BrowserRouter>
      <Navbar
        setSearchData={setSearchData}
        setLoading={setLoading}
        searchData={searchData}
      />
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
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/payment/:id" component={Stripe} />
        <Route exact path="/stock/news/:id/:tags" component={Stockpage} />
        <Route exact path="/our-plan" component={OurPlanspage} />
        <Route exact path="/search/news">
          <Search loading={loading} searchData={searchData} />
        </Route>
        <Route exact path="/news" component={News} />
        <Route exact path="/loginmodal" component={LogInModal} />
        <Route exact path="/subsmodal" component={Subscription} />
        <Route exact path="/netflix" component={Netflix} />
        <Route exact path="/netfix/chart" component={NetflixChart} />
        <Route exact path="/news/details/:id" component={NewsDetails} />
        <Route exact path="/create-newpassword" component={CreateNewPassword} />
        <Route exact path="/change-password" component={ChangePassword} />
        <Route exact path="/otp/input" component={OtpInputs} />
        <Route exact path="/email" component={IsEmailMessage} />
        {/** User dashboard routes */}
        <Route path="/dashboard">
          <UserRoutes
            showSidebar={showSidebar}
            sideBarHandler={sideBarHandler}
            setShowSidebar={setShowSidebar}
          />
        </Route>
        {/** User Portfolios routes */}
        <Route path="/protfolios/stock/:id" component={Portfolio} />
        <Route path="/view/profile" component={ViewProfile} />
        {/** Content Manager panel Dashboard */}
        <Route path="/content/manager/stocks">
          <CmPanelRoutes
            showSidebar2={showSidebar2}
            setShowSidebar2={setShowSidebar2}
          />
        </Route>
        <Route path="/content/manager/add/stock">
          <CmPanelRoutes
            showSidebar2={showSidebar2}
            setShowSidebar2={setShowSidebar2}
          />
        </Route>
        <Route path="/content/manager/edit/stock/:id">
          <CmPanelRoutes
            showSidebar2={showSidebar2}
            setShowSidebar2={setShowSidebar2}
          />
        </Route>
        <Route path="/content/manager/edit/news/:id">
          <CmPanelRoutes
            showSidebar2={showSidebar2}
            setShowSidebar2={setShowSidebar2}
          />
        </Route>
        <Route path="/content/manager/news">
          {" "}
          <CmPanelRoutes
            showSidebar2={showSidebar2}
            setShowSidebar2={setShowSidebar2}
          />
        </Route>
        <Route path="/content/manager/add/news">
          <CmPanelRoutes
            showSidebar2={showSidebar2}
            setShowSidebar2={setShowSidebar2}
          />
        </Route>
        <Route path="/content/manager/users">
          {" "}
          <CmPanelRoutes
            showSidebar2={showSidebar2}
            setShowSidebar2={setShowSidebar2}
          />
        </Route>
        <Route path="/content/manager/edit/user/:userId">
          <CmPanelRoutes
            showSidebar2={showSidebar2}
            setShowSidebar2={setShowSidebar2}
          />
        </Route>
        <Route path="/content/manager/plan/form">
          <CmPanelRoutes
            showSidebar2={showSidebar2}
            setShowSidebar2={setShowSidebar2}
          />
        </Route>
        <Route path="/content/manager/edit/plan/:id">
          {" "}
          <CmPanelRoutes
            showSidebar2={showSidebar2}
            setShowSidebar2={setShowSidebar2}
          />
        </Route>
        <Route path="/content/manager/other/services">
          {" "}
          <CmPanelRoutes
            showSidebar2={showSidebar2}
            setShowSidebar2={setShowSidebar2}
          />
        </Route>
        <Route
          path="/content/manager/add/other/services"
          component={OtherServicesForm}
        >
          {" "}
          <CmPanelRoutes
            showSidebar2={showSidebar2}
            setShowSidebar2={setShowSidebar2}
          />
        </Route>
        <Route path="/content/manager/our/plans/details">
          {" "}
          <CmPanelRoutes
            showSidebar2={showSidebar2}
            setShowSidebar2={setShowSidebar2}
          />
        </Route>
        <Route path="/content/manager/team/cards">
          {" "}
          <CmPanelRoutes
            showSidebar2={showSidebar2}
            setShowSidebar2={setShowSidebar2}
          />
        </Route>
        <Route path="/content/manager/team/form">
          {" "}
          <CmPanelRoutes
            showSidebar2={showSidebar2}
            setShowSidebar2={setShowSidebar2}
          />
        </Route>
        <Route path="/content/manager/enquiry/list">
          {" "}
          <CmPanelRoutes
            showSidebar2={showSidebar2}
            setShowSidebar2={setShowSidebar2}
          />
        </Route>
        <Route path="/content/manager/notification">
          {" "}
          <CmPanelRoutes
            showSidebar2={showSidebar2}
            setShowSidebar2={setShowSidebar2}
          />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
