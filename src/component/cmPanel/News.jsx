import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

import "../cmPanelCss/News.css";
const News = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex justify-content-lg-end">
            <section className="user-panel-card w-xl-1000 p-4 mt-5 pt-5">
              <div className="d-flex justify-content-between">
                <p className="heading-stock fs-sm-20">All News</p>
                <div>
                  <Link to="/content/manager/add/news" className="add-new-btn">
                    <button className="update-btn">Add New</button>
                  </Link>
                </div>
              </div>
              <div className="h-calc-100vh-442 scroll-bar overflow-auto mt-4">
                <Table responsive hover className="">
                  <thead>
                    <tr className="user-list-panel">
                      <th> Date</th>
                      <th> Title</th>
                      <th>Tags</th>
                    </tr>
                  </thead>
                  <tbody className="user-details">
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
                    </tr>{" "}
                    <tr>
                      <td>15/07/2021</td>
                      <td>
                        Nullam consequat augue eget finibus pretium. Morbi
                        ultrices
                      </td>
                      <td>Tag-1, Tag-2, Tag-3, Tag-4</td>
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

export default News;
