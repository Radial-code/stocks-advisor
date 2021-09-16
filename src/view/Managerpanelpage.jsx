import React from "react";
import SidebarPanel from "../component/common/SideBar/SidebarPanel";
import ManagerPanel from "../component/Panel/ManagerPanel";
import { Container, Row, Col } from "react-bootstrap";

const Managerpanelpage = () => {
  return (
    <div className="bg-f9f9f9 h-100vh">
      <Container>
        <Row>
          <Col className="d-flex">
            <div className="w-350 mt-5 pt-5">
              <SidebarPanel />
            </div>
            <div className="w-100">
              <ManagerPanel />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Managerpanelpage;
