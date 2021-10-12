import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { getPlansListAction } from "../../../redux/action/cmPanel/plans";
import BubblesLoader from "../BubblesLoader";

const OurPlans = ({ homepage, history }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const planList = useSelector((state) => state.list.planList);
  const auth = useSelector((state) => state.auth.auth);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(getPlansListAction(setLoading));
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
            <div className="text-center d-flex  justify-content-center pt-2">
              <BubblesLoader />
            </div>
          ) : (
            <Col xs={12}>
              <div className="row mt-sm-5 ">
                {planList && planList.length
                  ? planList.map((value, index) => {
                      return (
                        <Col
                          key={index}
                          xl={4}
                          md={6}
                          className={` ${
                            homepage ? "down-animation" : ""
                          } d-flex justify-content-center mt-3 mt-md-0`}
                        >
                          <section className="bg-card-plan mb-4">
                            <p className="plan-card d-flex justify-content-center pt-5">
                              Plan - {index + 1}
                            </p>
                            <div className="card-amount text-white d-flex justify-content-center align-items-center p-9-0 mt-4">
                              <p className="amount-card-month align-items-center d-flex  mb-0">
                                <span className="d-none d-sm-block month">
                                  {value.type}/
                                </span>

                                <span> {value.price} $</span>
                              </p>
                            </div>
                            <p className="card-paragraph  mt-4">
                              {value.title}
                            </p>
                            <div className="d-flex justify-content-center mt-5 pb-5">
                              {auth && !!token ? (
                                <button
                                  type="button"
                                  onClick={() => history.push("/payment")}
                                  className="join-now-btn text-white"
                                >
                                  Buy now
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => history.push("/login")}
                                  className="join-now-btn text-white"
                                >
                                  Join Now
                                </button>
                              )}
                            </div>
                          </section>
                        </Col>
                      );
                    })
                  : null}
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};
export default withRouter(OurPlans);
