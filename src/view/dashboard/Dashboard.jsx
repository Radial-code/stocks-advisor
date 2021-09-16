import React, { useState } from "react";
import EditContact from "../../component/dashboard/EditContact";
import { Route } from "react-router";
import Notification from "../../component/dashboard/Notification";
import UpdatePayment from "../../component/dashboard/UpdatePayment";
import ManageSubscription from "../../component/dashboard/ManageSubscription";

import SidebarDashboard from "../../component/common/SideBar/SidebarDashboard";

const Dashboard = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  console.log("dashboard render");
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between">
          <SidebarDashboard
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
          />

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
          <Route
            exact
            path="/dashboard/manage/subscription"
            component={ManageSubscription}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
