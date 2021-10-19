import React, { useState } from "react";
import { Route } from "react-router";
import AddNews from "./news/AddNews";
import AddStock from "./stock/AddStock";
import EditUser from "./EditUser";
import News from "./news/News";
import Stocks from "./stock/Stock";
import Users from "./user/Users";
import SidebarPanel from "../common/SideBar/SidebarPanel";
import OtherServices from "./otherServices/OtherServices";
import OtherServicesForm from "./otherServices/OtherServicesForm";
import Plans from "../cmPanel/plans/Plans";
import PlansSection from "./plans/PlansSection";
import TeamCards from "./team/TeamCards";
import TeamForm from "./team/TeamForm";
import Enquiry from "./enquiry/Enquiry";
import AdminNotification from "./user/AdminNotification";

const CmPanelRoutes = ({ showSidebar2, setShowSidebar2 }) => {
  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-between flex-lg-row flex-column">
          <SidebarPanel
            showSidebar2={showSidebar2}
            setShowSidebar2={setShowSidebar2}
          />
          <Route exact path="/content/manager/stocks">
            <Stocks
              showSidebar2={showSidebar2}
              setShowSidebar2={setShowSidebar2}
            />
          </Route>

          <Route exact path="/content/manager/add/stock">
            <AddStock
              showSidebar2={showSidebar2}
              setShowSidebar2={setShowSidebar2}
            />
          </Route>

          <Route path="/content/manager/edit/stock/:id">
            <AddStock
              showSidebar2={showSidebar2}
              setShowSidebar2={setShowSidebar2}
            />
          </Route>

          <Route exact path="/content/manager/news/add">
            <AddNews
              showSidebar2={showSidebar2}
              setShowSidebar2={setShowSidebar2}
            />
          </Route>
          <Route exact path="/content/manager/users">
            <Users
              showSidebar2={showSidebar2}
              setShowSidebar2={setShowSidebar2}
            />
          </Route>

          <Route exact path="/content/manager/news">
            <News
              showSidebar2={showSidebar2}
              setShowSidebar2={setShowSidebar2}
            />
          </Route>

          <Route exact path="/content/manager/edit/news/:id">
            <AddNews
              showSidebar2={showSidebar2}
              setShowSidebar2={setShowSidebar2}
            />
          </Route>
          <Route exact path="/content/manager/user/:userId">
            <EditUser
              showSidebar2={showSidebar2}
              setShowSidebar2={setShowSidebar2}
            />
          </Route>
          <Route path="/content/manager/other/services">
            <OtherServices
              showSidebar2={showSidebar2}
              setShowSidebar2={setShowSidebar2}
            />
          </Route>
          <Route exact path="/content/manager/add/services">
            <OtherServicesForm
              showSidebar2={showSidebar2}
              setShowSidebar2={setShowSidebar2}
            />
          </Route>

          <Route exact path="/content/manager/our/plans/details">
            <Plans
              showSidebar2={showSidebar2}
              setShowSidebar2={setShowSidebar2}
            />
          </Route>
          <Route exact path="/content/manager/our/plans/form">
            <PlansSection
              showSidebar2={showSidebar2}
              setShowSidebar2={setShowSidebar2}
            />
          </Route>
          <Route exact path="/content/manager/edit/plan/:id">
            <PlansSection
              showSidebar2={showSidebar2}
              setShowSidebar2={setShowSidebar2}
            />
          </Route>

          <Route exact path="/content/manager/add/other/services">
            <OtherServicesForm
              showSidebar2={showSidebar2}
              setShowSidebar2={setShowSidebar2}
            />
          </Route>
          <Route exact path="/content/manager/team/cards">
            <TeamCards
              showSidebar2={showSidebar2}
              setShowSidebar2={setShowSidebar2}
            />
          </Route>
          <Route exact path="/content/manager/team/form">
            <TeamForm
              showSidebar2={showSidebar2}
              setShowSidebar2={setShowSidebar2}
            />
          </Route>
          <Route exact path="/content/manager/enquiry/list">
            <Enquiry
              showSidebar2={showSidebar2}
              setShowSidebar2={setShowSidebar2}
            />
          </Route>
          <Route exact path="/content/manager/notification">
            <AdminNotification
              showSidebar2={showSidebar2}
              setShowSidebar2={setShowSidebar2}
            />
          </Route>
        </div>
      </div>
    </>
  );
};
export default CmPanelRoutes;
