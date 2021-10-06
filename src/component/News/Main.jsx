import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Chart from "../home/Chart";
import PagiNation from "../pagination/PagiNation";
import AllNews from "./AllNews";
import Plans from "../plan/Plans";
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
          <Col
            xl={4}
            className=" mt-3 d-flex justify-content-center d-sm-block"
          >
            <div className="profile-box py-5  w-xs-303">
              <Chart />
              <div className="mt-5">
                <Plans />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
