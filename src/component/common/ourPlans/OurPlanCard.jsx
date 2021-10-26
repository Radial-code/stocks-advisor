import { useState } from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import FoundImg from "../../../assets/img/notfound.png";
import { withRouter } from "react-router";

const OurPlanCard = ({ homepage, history }) => {
  const planList = useSelector((state) => state.list.planList);
  const auth = useSelector((state) => state.auth.auth);
  const token = useSelector((state) => state.auth.token);
  const pathname = window.location.pathname;

  return (
    <Col xs={12}>
      <div className="row mt-sm-5">
        {planList && planList.length ? (
          planList.map((value, index) => {
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
                    Plan - {value.title}
                  </p>
                  <div
                    className={`${
                      value.type === "Week" ? "week-plan" : "card-amount"
                    } card-amount text-white d-flex justify-content-center align-items-center p-9-0 mt-4`}
                  >
                    <p className="amount-card-month align-items-center d-flex  mb-0">
                      <span className="d-none d-sm-block month">
                        {value.type}/
                      </span>

                      <span> {value.price} $</span>
                    </p>
                  </div>
                  <p className=" mt-4 h-143">
                    {value.details
                      ? value.details.map((val) => (
                          <ul>
                            <li
                              className={`${val === "" ? "list-unstyled" : ""}`}
                            >
                              {val}
                            </li>
                          </ul>
                        ))
                      : "N/A"}
                  </p>
                  <div className="d-flex justify-content-center mt-5 pb-5">
                    {auth && !!token ? (
                      <button
                        type="button"
                        onClick={() => history.push(`/payment/${value._id}`)}
                        className={`${
                          value.type === "Week"
                            ? "join-now-btn-2"
                            : "join-now-btn"
                        } join-now-btn `}
                      >
                        Buy now
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => history.push("/login")}
                        className={`${
                          value.type === "Week"
                            ? "join-now-btn-2"
                            : "join-now-btn"
                        } join-now-btn`}
                      >
                        Join Now
                      </button>
                    )}
                  </div>
                </section>
              </Col>
            );
          })
        ) : (
          <div className="d-flex justify-content-center align-items-center flex-column">
            <img className="not-found-img mx-auto  d-block" src={FoundImg} />
            <h4
              className={`${
                pathname === "/our-plan" ? "text-dark" : "text-white"
              } py-3 fw-bold`}
            >
              You Don't have any Subscription plan
            </h4>
          </div>
        )}
      </div>
    </Col>
  );
};
export default withRouter(OurPlanCard);
