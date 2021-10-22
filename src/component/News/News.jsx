import React, { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllNewsListAction } from "../../redux/action/news";
import { Container, Row, Col } from "react-bootstrap";
import Chart from "../home/Chart";
import AllNews from "./AllNews";
import Plans from "../plan/Plans";
import "./Newspage.css";

const News = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalNews, setTotalNews] = useState(0);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    dispatch(getAllNewsListAction(setLoading, page, setTotalNews));
  }, [page]);

  return (
    <div>
      <Container className="py-5 mt-100 mb-4">
        <Row>
          <Col xl={8}>
            <AllNews
              loading={loading}
              setPage={setPage}
              page={page}
              totalNews={totalNews}
            />
          </Col>
          <Col
            xl={4}
            className=" mt-3 d-flex justify-content-center d-sm-block"
          >
            <div className="profile-box py-2  w-xs-303">
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
