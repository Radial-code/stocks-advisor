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
import EditForm from "./editform/EditForm";
import LineChart from "./chart/LineChart";
import LineChart2 from "./chart/LineChart2";
import LineChart3 from "./chart/LineChart3";
import Login from "./form/Login";
import SignUp from "./form/SignUp";
const Router = () => {
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
        <Route path="/editform" component={EditForm} />
        <Route path="/linechart2" component={LineChart2} />
        <Route path="/linechart3" component={LineChart3} />
        <Route path="/linechart" component={LineChart} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
