import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hamburgur from "../common/Hamburgur";
import "./Panel.css";
const ManagerPanel = ({ setSidebarActive, sidebarActive }) => {
  return (
    <div>
      <Container className="w-100">
        <div className="d-flex justify-content-end">
          <div
            onClick={() => setSidebarActive((preState) => !preState)}
            className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
          ></div>
          <div className="hamburgur-none">
            <Hamburgur setSidebarActive={setSidebarActive} />
          </div>
        </div>
        <Row className="w-100">
          <Col>
            <h1>thug life</h1>
          </Col>
          <Col className="w-100"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ManagerPanel;
