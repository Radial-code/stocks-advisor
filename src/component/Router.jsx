import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Homepage from "../view/Homepage";
import Stockpage from "../view/Stockpage";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Homepage} /> */}
        <Route exact path="/stock" component={Stockpage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
