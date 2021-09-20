import React from "react";
import "../dashboardCss/Notification.css";
import Sortarrow from "../../assets/img/sortarrow.png";

import { Table, Container, Row, Col } from "react-bootstrap";
const Notification = ({ sideBarHandler, setSidebarActive, sidebarActive }) => {
  return (
    <>
      <Container>
        <div
          onClick={() => setSidebarActive((preState) => !preState)}
          className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
        ></div>
        <Row>
          <Col xs={12}>
            <div className="border-b-1 content-manager-2 mb-3">
              <div className="d-flex justify-content-between">
                <p className="heading-stock pr-15">Dashboard</p>
                <span onClick={sideBarHandler}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    fill="currentColor"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Col>
          <Col xs={12} className="">
            <section className="notification-card p-lg-5 p-2 ">
              <div className="border-b-1">
                <p className="heading-stock fs-sm-20">Notificaion</p>
              </div>
              <p className="small-paragraph mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                tristique leo et pulvinar luctus. Donec aliquet mauris eget e
              </p>

              <div className="mt-5">
                <h1 className="sold-stock-text ff-popins">Sold Stocks</h1>
                <div className="table-responsive sold-stock-scrollbar">
                  <table className="table table-borderless">
                    <thead>
                      <tr className="sold-stock-table-head table-border-bottom table-border-top">
                        <th scope="col" className="text-center">
                          Date Bought
                          <span>
                            <img
                              className="pe-1"
                              src={Sortarrow}
                              alt="sort arrow"
                            />
                          </span>
                        </th>

                        <th scope="col" className="text-center">
                          Date Sold
                          <span>
                            <img
                              className="pe-1"
                              src={Sortarrow}
                              alt="sort arrow"
                            />
                          </span>
                        </th>
                        <th scope="col" className="text-center">
                          Name
                          <span>
                            <img
                              className="pe-1"
                              src={Sortarrow}
                              alt="sort arrow"
                            />
                          </span>
                        </th>
                        <th scope="col" className="text-center">
                          Symbol
                          <span>
                            <img
                              className="pe-1"
                              src={Sortarrow}
                              alt="sort arrow"
                            />
                          </span>
                        </th>
                        <th scope="col" className="text-center">
                          Category
                          <span>
                            <img
                              className="pe-1"
                              src={Sortarrow}
                              alt="sort arrow"
                            />
                          </span>
                        </th>
                        <th scope="col" className="text-center">
                          <span>
                            <img
                              className="pe-1"
                              src={Sortarrow}
                              alt="sort arrow"
                            />
                          </span>
                          Join Price
                        </th>
                        <th scope="col" className="text-center">
                          sell Price
                          <span>
                            <img
                              className="pe-1"
                              src={Sortarrow}
                              alt="sort arrow"
                            />
                          </span>
                        </th>
                        <th scope="col" className="text-center">
                          Profit/Loss
                          <span>
                            <img
                              className="pe-1"
                              src={Sortarrow}
                              alt="sort arrow"
                            />
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="sold-stock-data table-border-bottom">
                        <td className="text-center">15/07/2021</td>
                        <td className="text-center">Netflix Inc</td>
                        <td className="text-center">NFLX</td>
                        <td className="text-center">Portfolio</td>
                        <td className="text-center">Common</td>
                        <td className="text-center">$125</td>
                        <td className="text-center">$150</td>
                        <td className="text-center profitloss-text">25</td>
                      </tr>
                      <tr className="sold-stock-data table-border-bottom">
                        <td className="text-center">15/07/2021</td>
                        <td className="text-center">Netflix Inc</td>
                        <td className="text-center">NFLX</td>
                        <td className="text-center">Portfolio</td>
                        <td className="text-center">Common</td>
                        <td className="text-center">$125</td>
                        <td className="text-center">$150</td>
                        <td className="text-center first-text">10-</td>
                      </tr>
                      <tr className="sold-stock-data table-border-bottom">
                        <td className="text-center">15/07/2021</td>
                        <td className="text-center">Netflix Inc</td>
                        <td className="text-center">NFLX</td>
                        <td className="text-center">Portfolio</td>
                        <td className="text-center">Common</td>
                        <td className="text-center">$125</td>
                        <td className="text-center">$150</td>
                        <td className="text-center profitloss-text">25</td>
                      </tr>
                      <tr className="sold-stock-data table-border-bottom">
                        <td className="text-center">15/07/2021</td>
                        <td className="text-center">Netflix Inc</td>
                        <td className="text-center">NFLX</td>
                        <td className="text-center">Portfolio</td>
                        <td className="text-center">Common</td>
                        <td className="text-center">$125</td>
                        <td className="text-center">$150</td>
                        <td className="text-center first-text">10-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* <div className="d-flex justify-content-center">
                <div className="h-calc-100vh-442 scroll-x-side scroll-bar overflow-auto  notification mt-5">
                  <Table hover responsive>
                    <thead>
                      <tr>
                        <th className="observations">Observations</th>
                        <th className="email">Push</th>
                        <th className="email ">Web</th>

                        <th className="email ">E-mail</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="email">
                          Lorem ipsum dolor sit amet, consectetur
                        </td>
                        <td>
                          <label className="checkbox-notification">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>
                        <td>
                          <label className="checkbox-notification-web">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>

                        <td>
                          <div>
                            <label className="checkbox-notification">
                              <input type="checkbox" />
                              <span class="geekmark"></span>
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="email">
                          Lorem ipsum dolor sit amet, consectetur
                        </td>
                        <td>
                          <label className="checkbox-notification">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>
                        <td>
                          <label className="checkbox-notification-web">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>

                        <td>
                          <div>
                            <label className="checkbox-notification">
                              <input type="checkbox" />
                              <span class="geekmark"></span>
                            </label>
                          </div>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td className="email">
                          Lorem ipsum dolor sit amet, consectetur
                        </td>
                        <td>
                          <label className="checkbox-notification">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>
                        <td>
                          <label className="checkbox-notification-web">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>

                        <td>
                          <div>
                            <label className="checkbox-notification">
                              <input type="checkbox" />
                              <span class="geekmark"></span>
                            </label>
                          </div>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td className="email">
                          Lorem ipsum dolor sit amet, consectetur
                        </td>
                        <td>
                          <label className="checkbox-notification">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>
                        <td>
                          <label className="checkbox-notification-web">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>

                        <td>
                          <div>
                            <label className="checkbox-notification">
                              <input type="checkbox" />
                              <span class="geekmark"></span>
                            </label>
                          </div>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td className="email">
                          Lorem ipsum dolor sit amet, consectetur
                        </td>
                        <td>
                          <label className="checkbox-notification">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>
                        <td>
                          <label className="checkbox-notification-web">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>

                        <td>
                          <div>
                            <label className="checkbox-notification">
                              <input type="checkbox" />
                              <span class="geekmark"></span>
                            </label>
                          </div>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td className="email">
                          Lorem ipsum dolor sit amet, consectetur
                        </td>
                        <td>
                          <label className="checkbox-notification">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>
                        <td>
                          <label className="checkbox-notification-web">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>

                        <td>
                          <div>
                            <label className="checkbox-notification">
                              <input type="checkbox" />
                              <span class="geekmark"></span>
                            </label>
                          </div>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td className="email">
                          Lorem ipsum dolor sit amet, consectetur
                        </td>
                        <td>
                          <label className="checkbox-notification">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>
                        <td>
                          <label className="checkbox-notification-web">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>

                        <td>
                          <div>
                            <label className="checkbox-notification">
                              <input type="checkbox" />
                              <span class="geekmark"></span>
                            </label>
                          </div>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td className="email">
                          Lorem ipsum dolor sit amet, consectetur
                        </td>
                        <td>
                          <label className="checkbox-notification">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>
                        <td>
                          <label className="checkbox-notification-web">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>

                        <td>
                          <div>
                            <label className="checkbox-notification">
                              <input type="checkbox" />
                              <span class="geekmark"></span>
                            </label>
                          </div>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td className="email">
                          Lorem ipsum dolor sit amet, consectetur
                        </td>
                        <td>
                          <label className="checkbox-notification">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>
                        <td>
                          <label className="checkbox-notification-web">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>

                        <td>
                          <div>
                            <label className="checkbox-notification">
                              <input type="checkbox" />
                              <span class="geekmark"></span>
                            </label>
                          </div>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td className="email">
                          Lorem ipsum dolor sit amet, consectetur
                        </td>
                        <td>
                          <label className="checkbox-notification">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>
                        <td>
                          <label className="checkbox-notification-web">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>

                        <td>
                          <div>
                            <label className="checkbox-notification">
                              <input type="checkbox" />
                              <span class="geekmark"></span>
                            </label>
                          </div>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td className="email">
                          Lorem ipsum dolor sit amet, consectetur
                        </td>
                        <td>
                          <label className="checkbox-notification">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>
                        <td>
                          <label className="checkbox-notification-web">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>

                        <td>
                          <div>
                            <label className="checkbox-notification">
                              <input type="checkbox" />
                              <span class="geekmark"></span>
                            </label>
                          </div>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td className="email">
                          Lorem ipsum dolor sit amet, consectetur
                        </td>
                        <td>
                          <label className="checkbox-notification">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>
                        <td>
                          <label className="checkbox-notification-web">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>

                        <td>
                          <div>
                            <label className="checkbox-notification">
                              <input type="checkbox" />
                              <span class="geekmark"></span>
                            </label>
                          </div>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td className="email">
                          Lorem ipsum dolor sit amet, consectetur
                        </td>
                        <td>
                          <label className="checkbox-notification">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>
                        <td>
                          <label className="checkbox-notification-web">
                            <input type="checkbox" />
                            <span class="geekmark"></span>
                          </label>
                        </td>

                        <td>
                          <div>
                            <label className="checkbox-notification">
                              <input type="checkbox" />
                              <span class="geekmark"></span>
                            </label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div> */}
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Notification;
