import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPlansListAction } from "../../../redux/action/plan";
import BubblesLoader from "../BubblesLoader";

const OurPlans = ({ homepage }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const planList = useSelector((state) => state.list.planList);

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
                          } d-flex justify-content-center mx-auto mt-5 mt-xl-0`}
                        >
                          <section className="bg-card-plan">
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
                              <button className="join-now-btn text-white">
                                Join Now
                              </button>
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
export default OurPlans;
