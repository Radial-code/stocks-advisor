import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import IsEmailConfirmed from "../auth/verfiy/IsEmailConfirmed";
import IsEmailMessage from "../auth/verfiy/IsEmailMessage";
import IsPhoneConfirmed from "../auth/verfiy/IsPhoneConfirmed";

const VerifyRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IsEmailMessage} />
        <Route
          exact
          path="/verify/email/:token/:userId"
          component={IsEmailConfirmed}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default VerifyRoutes;
