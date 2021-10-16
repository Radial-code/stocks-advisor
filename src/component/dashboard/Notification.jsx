import React from "react";
import "../dashboardCss/Notification.css";
import push from "../../assets/img/push.png";
import { Container, Row, Col } from "react-bootstrap";
import DashboardDropDown from "./DashboardDropDown";
const Notification = ({ sideBarHandler, setSidebarActive, sidebarActive }) => {
  return (
    <>
      <Container className="mr-lg-30">
        <div
          onClick={() => setSidebarActive((preState) => !preState)}
          className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
        ></div>
        <Row>
          {/* <Col xs={12} className="dashboard">
            <div className="border-b-1  mb-3">
              <DashboardDropDown sideBarHandler={sideBarHandler} />
            </div>
          </Col> */}
          <Col xs={12}>
            <section className="notification-card p-lg-5 p-2 ">
              <div className="border-b-1">
                <p className="heading-stock fs-sm-20">Notification</p>
              </div>
              <p className="small-paragraph mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                tristique leo et pulvinar luctus. Donec aliquet mauris eget e
              </p>
              <div className="table-responsive scroll-bar current-stock-scrollbar">
                <table className="table table-borderless">
                  <thead>
                    <tr className="current-stock-table-head table-border-bottom table-border-top">
                      <th scope="col" className="text-center observations">
                        Observations
                      </th>

                      <th scope="col" className="text-center email">
                        Push
                        <span className="mx-2">
                          <img src={push} alt="" />
                        </span>
                      </th>
                      <th scope="col" className="text-center email">
                        Web
                        <span className="mx-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            fill="currentColor"
                            class="bi bi-globe"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                          </svg>
                        </span>
                      </th>
                      <th scope="col" className="text-center email">
                        E-mail
                        <span className="mx-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            fill="currentColor"
                            class="bi bi-envelope-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                          </svg>
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="current-stock-data table-border-bottom sold-stock-data">
                      <td className="email text-center">
                        Lorem ipsum dolor sit amet, consectetur
                      </td>
                      <td className="email text-center">
                        <label className="checkbox-notification">
                          <input type="checkbox" />
                          <span className="geekmark"></span>
                        </label>
                      </td>
                      <td className="email text-center">
                        <label className="checkbox-notification-web">
                          <div className="checkbox-notification1">
                            <input type="checkbox" />
                          </div>
                          <span className="geekmark"></span>
                        </label>
                      </td>

                      <td className="email text-center">
                        <div className="checkbox-notification">
                          <label className="checkbox-notification">
                            <input type="checkbox" />
                            <span className="geekmark"></span>
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr className="current-stock-data table-border-bottom sold-stock-data">
                      <td className="email text-center">
                        Lorem ipsum dolor sit amet, consectetur
                      </td>
                      <td className="email text-center">
                        <label className="checkbox-notification">
                          <div className="checkbox-notification1">
                            <input type="checkbox" />
                          </div>

                          <span className="geekmark"></span>
                        </label>
                      </td>
                      <td className="email text-center">
                        <label className="checkbox-notification-web">
                          <div className="checkbox-notification1">
                            <input type="checkbox" />
                          </div>
                          <span className="geekmark"></span>
                        </label>
                      </td>

                      <td className="email text-center">
                        <div>
                          <label className="checkbox-notification">
                            <div className="checkbox-notification1">
                              <input type="checkbox" />
                            </div>
                            <span className="geekmark"></span>
                          </label>
                        </div>
                      </td>
                    </tr>{" "}
                    <tr className="current-stock-data table-border-bottom sold-stock-data">
                      <td className="email text-center">
                        Lorem ipsum dolor sit amet, consectetur
                      </td>
                      <td className="email text-center">
                        <label className="checkbox-notification">
                          <div className="checkbox-notification1">
                            <input type="checkbox" />
                          </div>
                          <span className="geekmark"></span>
                        </label>
                      </td>
                      <td className="email text-center">
                        <label className="checkbox-notification-web">
                          <div className="checkbox-notification1">
                            <input type="checkbox" />
                          </div>
                          <span className="geekmark"></span>
                        </label>
                      </td>

                      <td className="email text-center">
                        <div>
                          <label className="checkbox-notification">
                            <div className="checkbox-notification1">
                              <input type="checkbox" />
                            </div>
                            <span className="geekmark"></span>
                          </label>
                        </div>
                      </td>
                    </tr>{" "}
                    <tr className="current-stock-data table-border-bottom sold-stock-data">
                      <td className="email text-center">
                        Lorem ipsum dolor sit amet, consectetur
                      </td>
                      <td className="email text-center">
                        <label className="checkbox-notification">
                          <div className="checkbox-notification1">
                            <input type="checkbox" />
                          </div>
                          <span className="geekmark"></span>
                        </label>
                      </td>
                      <td className="email text-center">
                        <label className="checkbox-notification-web">
                          <div className="checkbox-notification1">
                            <input type="checkbox" />
                          </div>
                          <span className="geekmark"></span>
                        </label>
                      </td>

                      <td className="email text-center">
                        <div>
                          <label className="checkbox-notification">
                            <div className="checkbox-notification1">
                              <input type="checkbox" />
                            </div>
                            <span className="geekmark"></span>
                          </label>
                        </div>
                      </td>
                    </tr>{" "}
                    <tr className="current-stock-data table-border-bottom sold-stock-data">
                      <td className="email text-center">
                        Lorem ipsum dolor sit amet, consectetur
                      </td>
                      <td className="email text-center">
                        <label className="checkbox-notification">
                          <div className="checkbox-notification1">
                            <input type="checkbox" />
                          </div>
                          <span className="geekmark"></span>
                        </label>
                      </td>
                      <td className="email text-center">
                        <label className="checkbox-notification-web">
                          <div className="checkbox-notification1">
                            <input type="checkbox" />
                          </div>
                          <span className="geekmark"></span>
                        </label>
                      </td>

                      <td className="email text-center">
                        <div>
                          <label className="checkbox-notification">
                            <div className="checkbox-notification1">
                              <input type="checkbox" />
                            </div>
                            <span className="geekmark"></span>
                          </label>
                        </div>
                      </td>
                    </tr>{" "}
                    <tr className="current-stock-data table-border-bottom sold-stock-data">
                      <td className="email text-center">
                        Lorem ipsum dolor sit amet, consectetur
                      </td>
                      <td className="email text-center">
                        <label className="checkbox-notification">
                          <div className="checkbox-notification1">
                            <input type="checkbox" />
                          </div>
                          <span className="geekmark"></span>
                        </label>
                      </td>
                      <td className="email text-center">
                        <label className="checkbox-notification-web">
                          <div className="checkbox-notification1">
                            <input type="checkbox" />
                          </div>
                          <span className="geekmark"></span>
                        </label>
                      </td>

                      <td className="email text-center">
                        <div>
                          <label className="checkbox-notification">
                            <div className="checkbox-notification1">
                              <input type="checkbox" />
                            </div>{" "}
                            <span className="geekmark"></span>
                          </label>
                        </div>
                      </td>
                    </tr>{" "}
                    <tr className="current-stock-data table-border-bottom sold-stock-data">
                      <td className="email text-center">
                        Lorem ipsum dolor sit amet, consectetur
                      </td>
                      <td className="email text-center">
                        <label className="checkbox-notification">
                          <div className="checkbox-notification1">
                            <input type="checkbox" />
                          </div>
                          <span className="geekmark"></span>
                        </label>
                      </td>
                      <td className="email text-center">
                        <label className="checkbox-notification-web">
                          <div className="checkbox-notification1">
                            <input type="checkbox" />
                          </div>
                          <span className="geekmark"></span>
                        </label>
                      </td>

                      <td className="email text-center">
                        <div>
                          <label className="checkbox-notification">
                            <div className="checkbox-notification1">
                              <input type="checkbox" />
                            </div>
                            <span className="geekmark"></span>
                          </label>
                        </div>
                      </td>
                    </tr>{" "}
                    <tr className="current-stock-data table-border-bottom sold-stock-data">
                      <td className="email text-center">
                        Lorem ipsum dolor sit amet, consectetur
                      </td>
                      <td className="email text-center">
                        <label className="checkbox-notification">
                          <div className="checkbox-notification1">
                            <input type="checkbox" />
                          </div>
                          <span className="geekmark"></span>
                        </label>
                      </td>
                      <td className="email text-center">
                        <label className="checkbox-notification-web">
                          <div className="checkbox-notification1">
                            <input type="checkbox" />
                          </div>
                          <span className="geekmark"></span>
                        </label>
                      </td>

                      <td className="email text-center">
                        <div>
                          <label className="checkbox-notification">
                            <div className="checkbox-notification1">
                              <input type="checkbox" />
                            </div>
                            <span className="geekmark"></span>
                          </label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Notification;
