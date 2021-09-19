import React from "react";
import "../dashboardCss/Notification.css";
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
            <div className="border-b-1 content-manager-2">
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
          <Col xs={12} className="mt-3">
            <section className="notification-card p-5">
              <div className="border-b-1">
                <p className="heading-stock">Notificaion</p>
              </div>
              <p className="small-paragraph mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                tristique leo et pulvinar luctus. Donec aliquet mauris eget e
              </p>
              <div className="h-calc-100vh-442 scroll-bar overflow-auto w-100 notification mt-5">
                <Table hover>
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
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Notification;
