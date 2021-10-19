import React, { useEffect, useState } from "react";
import "../dashboardCss/Notification.css";
import { Container, Row, Col } from "react-bootstrap";
import NotificationTable from "./NotificationTable";
import { useDispatch } from "react-redux";
import { getNotificationListAction } from "../../redux/action/contact";

const Notification = ({ setSidebarActive, sidebarActive }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getNotificationListAction(setLoading));
  }, []);

  return (
    <Container className="mr-lg-30">
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
      ></div>
      <Row>
        <Col xs={12}>
          <section className="notification-card p-lg-5 p-2 ">
            <div className="border-b-1">
              <p className="heading-stock fs-sm-20">Notification</p>
            </div>
            <div className="table-responsive scroll-bar current-stock-scrollbar mt-5">
              <NotificationTable loading={loading} />
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
export default Notification;
