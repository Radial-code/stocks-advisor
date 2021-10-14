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

const CmPanelRoutes = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const sideBarHandler = () => setSidebarActive(!sidebarActive);

  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-between">
          <SidebarPanel
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
          />
          <Route path="/content/manager/stocks">
            <Stocks
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>

          <Route path="/content/manager/add/stock">
            <AddStock
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>

          <Route path="/content/manager/edit/stock/:id">
            <AddStock
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>

          <Route path="/content/manager/add/news">
            <AddNews
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route path="/content/manager/users">
            <Users
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>

          <Route path="/content/manager/news">
            <News
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route path="/content/manager/edit/user">
            <EditUser
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route path="/content/manager/other/services">
            <OtherServices
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route path="/content/manager/add/services">
            <OtherServicesForm
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>

          <Route path="/content/manager/our/plans/details">
            <Plans
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route path="/content/manager/plan/form">
            <PlansSection
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>

          <Route path="/content/manager/add/other/services">
            <OtherServicesForm
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route path="/content/manager/team/cards">
            <TeamCards
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route path="/content/manager/team/form">
            <TeamForm
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route path="/content/manager/enquiry/list">
            <Enquiry
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
export default CmPanelRoutes;
