import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { getPlansListAction } from "../../../redux/action/cmPanel/plans";
import BubblesLoader from "../BubblesLoader";
import OurPlanCard from "./OurPlanCard";

const OurPlans = ({ homepage, history }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [planListCount, setPlanListCount] = useState(0);

  useEffect(() => {
    const limit = 10;
    const page = 0;
    dispatch(getPlansListAction(setLoading, page, limit, setPlanListCount));
  }, []);

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
              <OurPlanCard history={history} planListCount={planListCount} />
            </>
          )}
        </Row>
      </Container>
    </>
  );
};
export default withRouter(OurPlans);
