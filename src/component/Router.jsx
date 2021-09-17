import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
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
import CurrentStock from "./portfolios/CurrentStock";
import SoldStock from "../component/portfolios/SoldStock";
import LogInModal from "./modal/LogInModal";
import Navbar from "../component/common/Navbar";
import Footer from "../component/common/Footer";
import Subscription from "./modal/Subscription";
import Netflix from "./netflixinc/Netflix";
const Router = () => {
  console.log("router ");
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/stock" component={Stockpage} />
        <Route exact path="/ourplans" component={OurPlanspage} />
        {/* <Route exact path="/" component={Homepage} /> */}
        {/* <Route exact path="/ourplans" component={OurPlanspage} /> */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/content/manager" component={CmPanel} />

        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/allnews" component={AllNewspage} />
        <Route path="/currentstock" component={CurrentStock} />
        <Route path="/soldstock" component={SoldStock} />
        <Route path="/loginmodal" component={LogInModal} />
        <Route path="/subsmodal" component={Subscription} />
        <Route path="/netflix" component={Netflix} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
