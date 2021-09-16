import React, { useState } from "react";
import EditContact from "../../component/dashboard/EditContact";
import { Route } from "react-router";
import Notification from "../../component/dashboard/Notification";
import UpdatePayment from "../../component/dashboard/UpdatePayment";
import SidebarPanel from "../../component/common/SideBar/SidebarPanel";

const Dashboard = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  console.log("dashboard render");
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between">
          <SidebarPanel
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
        </div>
      </div>
    </>
  );
};

export default Dashboard;
