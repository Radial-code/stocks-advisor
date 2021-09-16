import React from "react";
import EditContact from "../../component/dashboard/EditContact";
import { Route } from "react-router";
import Notification from "../../component/dashboard/Notification";
import UpdatePayment from "../../component/dashboard/UpdatePayment";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
            {" "}
            <h1>Dashboard</h1>{" "}
          </div>

          <Route exact path="/dashboard/edit/contact" component={EditContact} />
          <Route
            exact
            path="/dashboard/update/payment"
            component={UpdatePayment}
          />
          <Route
            exact
            path="/dashboard/notification"
            component={Notification}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
