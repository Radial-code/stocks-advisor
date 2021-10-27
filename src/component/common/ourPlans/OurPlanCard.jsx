import React from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import FoundImg from "../../../assets/img/notfound.png";
import { withRouter } from "react-router";
import Slider from "react-slick";

const OurPlanCard = ({ homepage, history }) => {
  const planList = useSelector((state) => state.list.planList);
  const auth = useSelector((state) => state.auth.auth);
  const token = useSelector((state) => state.auth.token);
  const pathname = window.location.pathname;
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,

          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Col xs={12}>
      <div className="row mt-sm-5  justify-content-center">
        {planList.length <= 3 ? (
          <>
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
                    <section className="bg-card-plan mb-4 mx-1">
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
                                  className={`${
                                    val === "" ? "list-unstyled" : ""
                                  }`}
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
                            onClick={() =>
                              history.push(`/payment/${value._id}`)
                            }
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
                <img
                  className="not-found-img mx-auto  d-block"
                  src={FoundImg}
                />
                <h4
                  className={`${
                    pathname === "/our-plan" ? "text-dark" : "text-white"
                  } py-3 fw-bold`}
                >
                  You Don't have any Subscription plan
                </h4>
              </div>
            )}
          </>
        ) : (
          <>
            {" "}
            <Slider className="d-flex align-items-center" {...settings}>
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
                      <section className="bg-card-plan mb-4 mx-1">
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
                                    className={`${
                                      val === "" ? "list-unstyled" : ""
                                    }`}
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
                              onClick={() =>
                                history.push(`/payment/${value._id}`)
                              }
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
                  <img
                    className="not-found-img mx-auto  d-block"
                    src={FoundImg}
                  />
                  <h4
                    className={`${
                      pathname === "/our-plan" ? "text-dark" : "text-white"
                    } py-3 fw-bold`}
                  >
                    You Don't have any Subscription plan
                  </h4>
                </div>
              )}
            </Slider>
          </>
        )}
      </div>
    </Col>
  );
};
export default withRouter(OurPlanCard);
const Next = (props) => {
  const { className, style, onClick } = props;
  return (
    <button style={{ ...style }} onClick={onClick} className={`next`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9.681"
        height="16.533"
        viewBox="0 0 9.681 16.533"
      >
        <path
          id="Path_6"
          data-name="Path 6"
          d="M285.935,1334.071l-7.559,7.56,7.559,7.559"
          transform="translate(-276.961 -1333.363)"
          fill="none"
          stroke="#16191e"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>
    </button>
  );
};
const Prev = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="prev d-sm-flex justify-content-center  align-items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9.681"
        height="16.533"
        viewBox="0 0 9.681 16.533"
      >
        <path
          id="Path_6"
          data-name="Path 6"
          d="M285.935,1334.071l-7.559,7.56,7.559,7.559"
          transform="translate(-276.961 -1333.363)"
          fill="none"
          stroke="#16191e"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>
    </button>
  );
};
