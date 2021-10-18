import React, { useState } from "react";
import EditContact from "./profile/EditContact";
import { Route } from "react-router";
import Notification from "../dashboard/Notification";
import UpdatePayment from "../dashboard/UpdatePayment";
import ManageSubscription from "./manageSubscription/ManageSubscription";
import SidebarDashboard from "../common/SideBar/SidebarDashboard";
import UserProfile from "./profile/UserProfile";
import PaymentDetails from "./payment/PaymentDetails";

const UserRoutes = ({ showSidebar, sideBarHandler, setShowSidebar }) => {
  return (
    <>
      <div className="container py-5">
        <div className=" d-flex justify-content-between flex-lg-row flex-column">
          <SidebarDashboard
            showSidebar={showSidebar}
            sideBarHandler={sideBarHandler}
            setShowSidebar={setShowSidebar}
          />
          <Route exact path="/dashboard/edit/contact">
            <EditContact
              showSidebar={showSidebar}
              sideBarHandler={sideBarHandler}
              setShowSidebar={setShowSidebar}
            />
          </Route>
          <Route exact path="/dashboard/update/payment">
            <UpdatePayment
              showSidebar={showSidebar}
              sideBarHandler={sideBarHandler}
              setShowSidebar={setShowSidebar}
            />
          </Route>
          <Route exact path="/dashboard/notification">
            <Notification
              showSidebar={showSidebar}
              sideBarHandler={sideBarHandler}
              setShowSidebar={setShowSidebar}
            />
          </Route>
          <Route exact path="/dashboard/manage/subscription">
            <ManageSubscription
              sideBarHandler={sideBarHandler}
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
            />
          </Route>
          <Route exact path="/dashboard/view/profile">
            <UserProfile
              showSidebar={showSidebar}
              sideBarHandler={sideBarHandler}
              setShowSidebar={setShowSidebar}
            />
          </Route>
          <Route exact path="/dashboard/payment">
            <PaymentDetails
              sideBarHandler={sideBarHandler}
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
            />
          </Route>
        </div>
      </div>
    </>
  );
};

export default UserRoutes;
