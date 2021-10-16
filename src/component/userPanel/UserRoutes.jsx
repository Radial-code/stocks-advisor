import React, { useState } from "react";
import EditContact from "./profile/EditContact";
import { Route } from "react-router";
import Notification from "../dashboard/Notification";
import UpdatePayment from "../dashboard/UpdatePayment";
import ManageSubscription from "./manageSubscription/ManageSubscription";
import SidebarDashboard from "../common/SideBar/SidebarDashboard";
import UserProfile from "./profile/UserProfile";
import PaymentDetails from "./payment/PaymentDetails";

const UserRoutes = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const sideBarHandler = () => setSidebarActive(!sidebarActive);
  return (
    <>
      <div className="container py-5">
        <div className="d-flex justify-content-between flex-lg-row flex-column">
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
          <Route exact path="/dashboard/view/profile">
            <UserProfile
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

export default UserRoutes;
