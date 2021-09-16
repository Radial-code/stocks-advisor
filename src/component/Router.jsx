import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Homepage from "../view/Homepage";
import OurPlanspage from "../view/OurPlanspage";
import Stockpage from "../view/Stockpage";
import About from "../view/About";
import Payment from "../view/Payment";
import Navbarpage from "../view/Navbarpage";
import Managerpanelpage from "../view/Managerpanelpage";
import Dashboard from "../view/dashboard/Dashboard";
import CmPanel from "../view/cmPanel/CmPanel";
const Router = () => {
  console.log("router ");
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route exact path="/about" component={About} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/stock" component={Stockpage} />
        <Route exact path="/ourplans" component={OurPlanspage} />
        {/* <Route exact path="/" component={Homepage} /> */}
        {/* <Route exact path="/stock" component={Stockpage} /> */}
        {/* <Route exact path="/ourplans" component={OurPlanspage} /> */}
        <Route exact path="/navbar" component={Navbarpage} />
        <Route exact path="/managerpanel" component={Managerpanelpage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/content/manager" component={CmPanel} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
