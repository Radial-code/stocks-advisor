import React, { useState } from "react";
import { Route } from "react-router";
import AddNews from "../../component/cmPanel/AddNews";
import AddStock from "../../component/cmPanel/AddStock";
import EditNews from "../../component/cmPanel/EditNews";
import EditStock from "../../component/cmPanel/EditStock";
import EditUser from "../../component/cmPanel/EditUser";
import News from "../../component/cmPanel/News";
import Stocks from "../../component/cmPanel/Stocks";
import Users from "../../component/cmPanel/Users";
import SidebarPanel from "../../component/common/SideBar/SidebarPanel";
const CmPanel = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between">
          <SidebarPanel
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
          />

          <Route exact path="/content/manager/add/stock" component={AddStock} />
          <Route
            exact
            path="/content/manager/edit/stock"
            component={EditStock}
          />
          <Route exact path="/content/manager/add/news" component={AddNews} />
          <Route exact path="/content/manager/users" component={Users} />
          <Route exact path="/content/manager/stocks" component={Stocks} />
          <Route exact path="/content/manager/news" component={News} />
          <Route exact path="/content/manager/edit/user" component={EditUser} />
        </div>
      </div>
    </>
  );
};

export default CmPanel;
