import React, { useState } from "react";
import EditContact from "../../component/dashboard/EditContact";
import { Route } from "react-router";
import Notification from "../../component/dashboard/Notification";
import UpdatePayment from "../../component/dashboard/UpdatePayment";
import ManageSubscription from "../../component/dashboard/ManageSubscription";

import SidebarDashboard from "../../component/common/SideBar/SidebarDashboard";
import AdvisorProfile from "../../component/dashboard/AdvisorProfile";
import PaymentDetails from "../../component/dashboard/PaymentDetails";

const Dashboard = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const sideBarHandler = () => setSidebarActive(!sidebarActive);
  return (
    <>
      <div className="container py-5">
        <div className="d-flex justify-content-between">
          <SidebarDashboard
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
          />
          <Route exact path="/dashboard/edit/contact">
            <EditContact
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route exact path="/dashboard/update/payment">
            <UpdatePayment
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route exact path="/dashboard/notification">
            <Notification
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route exact path="/dashboard/manage/subscription">
            <ManageSubscription
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route exact path="/dashboard/profile">
            <AdvisorProfile
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route exact path="/dashboard/payment">
            <PaymentDetails
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
        </div>
      </div>
    </>
  );
};

export default Dashboard;