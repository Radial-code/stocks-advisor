import React from "react";
import "../dashboardCss/Notification.css";
import Sortarrow from "../../assets/img/sortarrow.png";

import { Table, Container, Row, Col } from "react-bootstrap";
const Notification = ({ sideBarHandler, setSidebarActive, sidebarActive }) => {
  return (
    <>
      <Container className="mr-lg-30">
        <div
          onClick={() => setSidebarActive((preState) => !preState)}
          className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
        ></div>
        <Row>
          <Col xs={12}>
            <div className="border-b-1 content-manager-2 mb-3">
              <div className="d-flex justify-content-between">
                <p className="heading-stock pr-15 fs-sm-20">Dashboard</p>
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
          <Col xs={12}>
            <section className="notification-card p-lg-5 p-2 ">
              <div className="border-b-1">
                <p className="heading-stock fs-sm-20">Notificaion</p>
              </div>
              <p className="small-paragraph mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                tristique leo et pulvinar luctus. Donec aliquet mauris eget e
              </p>

              <div className="mt-5 h-calc-100vh-442 overflow-auto">
                <div className="table-responsive sold-stock-scrollbar">
                  <table className="table table-borderless">
                    <thead>
                      <tr className="">
                        <th scope="col" className="observations">
                          Observations
                        </th>
                        <th scope="col" className="email">
                          Push
                        </th>
                        <th scope="col" className="email ">
                          Web
                        </th>

                        <th scope="col" className="email ">
                          E-mail
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="sold-stock-data ">
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

                      <tr className="sold-stock-data ">
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
                      <tr className="sold-stock-data ">
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
                      <tr className="sold-stock-data ">
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
                      <tr className="sold-stock-data ">
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
                      <tr className="sold-stock-data ">
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
                      <tr className="sold-stock-data ">
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
                      <tr className="sold-stock-data ">
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
                      <tr className="sold-stock-data ">
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
                      <tr className="sold-stock-data ">
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
