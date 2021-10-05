/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Route } from 'react-router';
import AddNews from '../../component/cmPanel/AddNews';
import AddStock from '../../component/cmPanel/AddStock';
import EditStock from '../../component/cmPanel/EditStock';
import EditUser from '../../component/cmPanel/EditUser';
import News from '../../component/cmPanel/News';
import Stocks from '../../component/cmPanel/Stocks';
import Users from '../../component/cmPanel/Users';
import SidebarPanel from '../../component/common/SideBar/SidebarPanel';

const CmPanel = () => {
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

          <Route exact path="/content/manager/add/stock">
            <AddStock
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>

          <Route exact path="/content/manager/edit/stock">
            <EditStock
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route exact path="/content/manager/add/news">
            <AddNews
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route exact path="/content/manager/users">
            <Users
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route exact path="/content/manager/stocks">
            <Stocks
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route exact path="/content/manager/news">
            <News
              sideBarHandler={sideBarHandler}
              sidebarActive={sidebarActive}
              setSidebarActive={setSidebarActive}
            />
          </Route>
          <Route exact path="/content/manager/edit/user">
            <EditUser
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

export default CmPanel;
