import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Chart from "../home/Chart";
import PagiNation from "../pagination/PagiNation";
import AllNews from "./AllNews";
import "./Newspage.css";
const Main = () => {
  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col xl={8}>
            <AllNews />
            <div>
              <PagiNation />
            </div>
          </Col>
          <Col xl={4} className="mt-5">
            <div className="profile-box mt-5 mt-xl-0">
              <Chart />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
