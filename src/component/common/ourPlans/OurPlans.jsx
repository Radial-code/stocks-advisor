import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { getPlansListAction } from "../../../redux/action/cmPanel/plans";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import BubblesLoader from "../BubblesLoader";
import OurPlanCard from "./OurPlanCard";

const OurPlans = ({ homepage, history }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [planListCount, setPlanListCount] = useState(0);
  const { layoutClickChanger } = useLayoutChangerProvider();

  useEffect(() => {
    const limit = 10;
    dispatch(getPlansListAction(setLoading, page, limit, setPlanListCount));
  }, [page]);
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage);
  };
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="d-flex  justify-content-center">
            <p
              className={`subscription-plans mt-sm-5 mt-3 ${
                homepage ? "text-white" : ""
              } `}
            >
              Subscription Plans
            </p>
          </Col>

          {loading ? (
            <div className="text-center d-flex  justify-content-center pt-2 mx-4">
              <BubblesLoader />
            </div>
          ) : (
            <>
              <OurPlanCard history={history} />
            </>
          )}
        </Row>
      </Container>
    </>
  );
};
export default withRouter(OurPlans);
