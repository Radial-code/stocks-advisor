import React from "react";
import SidebarPanel from "../component/common/SideBar/SidebarPanel";
import ManagerPanel from "../component/Panel/ManagerPanel";
import { Container, Row, Col } from "react-bootstrap";

const Managerpanelpage = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex">
          <div className="w-350">
            <SidebarPanel />
          </div>
          <div className="w-100">
            <ManagerPanel />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Managerpanelpage;
