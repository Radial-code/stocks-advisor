import React, { useState } from "react";
import { Route } from "react-router";
import AddNews from "./AddNews";
import AddStock from "./stock/AddStock";
import EditUser from "./EditUser";
import News from "./News";
import Stocks from "./stock/Stock";
import Users from "./Users";
import SidebarPanel from "../common/SideBar/SidebarPanel";
import OtherServices from "./otherServices/OtherServices";
import Plans from "../cmPanel/plans/Plans";

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
          <Route path="/content/manager/our/plans/details">
            <Plans
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
