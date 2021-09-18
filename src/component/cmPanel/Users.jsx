import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

import "../cmPanelCss/userList.css";
const Users = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="border-b-1 content-manager">
              <p className="heading-stock pr-15">Content Manager</p>
            </div>
          </Col>
          <Col className="d-xl-flex justify-content-end ">
            <section className="user-panel-card w-xl-1000 p-5 mt-5 pt-5">
              <div className="d-flex justify-content-between">
                <p className="heading-stock fs-sm-20">Users</p>
                <div>
                  <Link to="/content/manager/edit/user">
                    <button className="update-btn">Add New</button>
                  </Link>
                </div>
              </div>
              <div className="h-calc-100vh-331 scroll-bar overflow-auto mt-4">
                <Table responsive hover className="">
                  <thead>
                    <tr className="user-list-panel">
                      <th>Join Date</th>
                      <th> Name</th>
                      <th>Phone</th>
                      <th>E-mail</th>
                      <th>Subscription Plan Name</th>
                    </tr>
                  </thead>
                  <tbody className="user-details">
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>
                  </tbody>
                </Table>{" "}
                <Table responsive hover className="p-2">
                  <thead>
                    <tr>
                      <th>Join Date</th>
                      <th> Name</th>
                      <th>Phone</th>
                      <th>E-mail</th>
                      <th>Subscription Plan Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
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

export default Users;
