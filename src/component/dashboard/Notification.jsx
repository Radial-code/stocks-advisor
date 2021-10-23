import React, { useEffect, useState } from "react";
import "../dashboardCss/Notification.css";
import { Container, Row, Col } from "react-bootstrap";
import NotificationTable from "./NotificationTable";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { getNotificationListAction } from "../../redux/action/contact";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

import Setting from "../../assets/img/setting.png";

const Notification = ({ setSidebarActive, sidebarActive }) => {
  const { setLayoutClickChanger, layoutClickChanger } =
    useLayoutChangerProvider();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <div className="border-b-1 d-flex justify-content-between align-items-center">
              <p className="heading-stock fs-sm-20 mb-0">Notification</p>
              <img
                onClick={handleShow}
                className="cursor-pointer h-25"
                src={Setting}
                alt=""
              />
            </div>
            <div className="table-responsive scroll-bar current-stock-scrollbar mt-5">
              <NotificationTable loading={loading} />
            </div>
          </section>
        </Col>
      </Row>
      {/* Modal */}

      <Modal show={show} onHide={handleClose} centered>
        <p className="heading-stock fs-sm-20 mb-0 text-center py-3 fw-bold">
          View Notification When
        </p>

        <Modal.Body>
          <div className="py-2 d-flex align-items-center justify-content-start">
            {layoutClickChanger ? (
              <>
                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  New stock is created
                </label>
                <input className="cursor-pointer mx-2" type="checkbox" />
              </>
            ) : (
              <>
                <input className="cursor-pointer mx-2" type="checkbox" />

                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  New stock is created
                </label>
              </>
            )}
          </div>
          <div className="py-2 d-flex align-items-center justify-content-start">
            {layoutClickChanger ? (
              <>
                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  Stock is sold
                </label>
                <input className="cursor-pointer mx-2" type="checkbox" />
              </>
            ) : (
              <>
                <input className="cursor-pointer mx-2" type="checkbox" />

                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  Stock is sold
                </label>
              </>
            )}
          </div>
          <div className="py-2 d-flex align-items-center justify-content-start">
            {layoutClickChanger ? (
              <>
                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  General news is added
                </label>
                <input className="cursor-pointer mx-2" type="checkbox" />
              </>
            ) : (
              <>
                <input className="cursor-pointer mx-2" type="checkbox" />

                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  General news is added
                </label>
              </>
            )}
          </div>
          <div className="py-2 d-flex align-items-center justify-content-start">
            {layoutClickChanger ? (
              <>
                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  Related news is added
                </label>
                <input className="cursor-pointer mx-2" type="checkbox" />
              </>
            ) : (
              <>
                <input className="cursor-pointer mx-2" type="checkbox" />

                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  Related news is added
                </label>
              </>
            )}
          </div>
          <div className="d-flex my-3 justify-content-end">
            {layoutClickChanger ? (
              <>
                <button
                  className="news-upload-btn cursor-pointer px-3 py-2 mx-3"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button className="news-upload-btn cursor-pointer px-3 py-2">
                  Submit
                </button>
              </>
            ) : (
              <>
                <button className="news-upload-btn cursor-pointer px-3 py-2">
                  Submit
                </button>
                <button
                  className="news-upload-btn cursor-pointer px-3 py-2 mx-3"
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};
export default Notification;
