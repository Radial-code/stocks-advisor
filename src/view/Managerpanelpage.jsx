import React, { useState } from "react";
import SidebarPanel from "../component/common/SideBar/SidebarPanel";
import ManagerPanel from "../component/Panel/ManagerPanel";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../component/common/Footer";
import UserList from "../component/Panel/UserList";

const Managerpanelpage = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div className="bg-f9f9f9 h-100vh">
      <Container>
        <Row>
          <Col className="d-flex justify-content-between">
            <div className=" mt-5 pt-5">
              <SidebarPanel
                sidebarActive={sidebarActive}
                setSidebarActive={setSidebarActive}
              />
            </div>
            <div className="w-lg-100">
              <UserList
                sidebarActive={sidebarActive}
                setSidebarActive={setSidebarActive}
              />
            </div>
          </Col>
        </Row>
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default Managerpanelpage;
