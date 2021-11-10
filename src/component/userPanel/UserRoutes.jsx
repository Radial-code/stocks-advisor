import React from "react";
import { Route } from "react-router";
import Notification from "../dashboard/Notification";
import ManageSubscription from "./manageSubscription/ManageSubscription";
import SidebarDashboard from "../common/SideBar/SidebarDashboard";
import UserProfile from "./profile/UserProfile";
import PaymentDetails from "./payment/PaymentDetails";
import Invite from "./invite/Invite";

const UserRoutes = ({ showSidebar, sideBarHandler, setShowSidebar }) => {
  return (
    <>
      <div className="container py-5 mt-100">
        <div className=" d-flex justify-content-between flex-lg-row flex-column">
          <SidebarDashboard
            showSidebar={showSidebar}
            sideBarHandler={sideBarHandler}
            setShowSidebar={setShowSidebar}
          />
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
          <Route exact path="/dashboard/invite">
            <Invite
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
