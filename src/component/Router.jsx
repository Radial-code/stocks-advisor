import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Homepage from "../view/Homepage";
import OurPlanspage from "../view/OurPlanspage";
import Stockpage from "../view/Stockpage";
import Navbarpage from "../view/Navbarpage";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Homepage} /> */}
        {/* <Route exact path="/stock" component={Stockpage} /> */}
        {/* <Route exact path="/ourplans" component={OurPlanspage} /> */}
        <Route exact path="/navbar" component={Navbarpage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
