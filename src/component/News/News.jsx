import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllNewsListAction } from "../../redux/action/news";
import { Container, Row, Col } from "react-bootstrap";
import Chart from "../home/Chart";
import PagiNation from "../pagination/PagiNation";
import AllNews from "./AllNews";
import Plans from "../plan/Plans";
import "./Newspage.css";

const News = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getAllNewsListAction(setLoading));
  }, []);

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
export default News;
