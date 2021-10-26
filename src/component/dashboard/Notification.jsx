import React, { useEffect, useState } from "react";
import "../dashboardCss/Notification.css";
import { Container, Row, Col } from "react-bootstrap";
import NotificationTable from "./NotificationTable";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { getNotificationListAction } from "../../redux/action/contact";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

import Setting from "../../assets/img/setting.png";
import { updateUserDetailsAction } from "../../redux/action/userPanel/user";
import Loader from "../common/Loader";

const initialState = {
  showNotificationForsoldStocksW: false,
  showNotificationForNewStocksW: false,
  showNotificationForGeneralNewsW: false,
  showNotificationForReleatedNewsW: false,

  showNotificationForsoldStocksM: false,
  showNotificationForNewStocksM: false,
  showNotificationForGeneralNewsM: false,
  showNotificationForReleatedNewsM: false,

  showNotificationForsoldStocksE: false,
  showNotificationForNewStocksE: false,
  showNotificationForGeneralNewsE: false,
  showNotificationForReleatedNewsE: false,
};

const Notification = ({ setSidebarActive, sidebarActive }) => {
  const { layoutClickChanger } = useLayoutChangerProvider();
  const profileData = useSelector((state) => state.auth.userData);
  const [notificationLoading, setNotificationLoading] = useState(false);
  const [showNotificationWhen, setShowNotificationWhen] =
    useState(initialState);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (profileData) {
      setShowNotificationWhen(profileData);
    }
    dispatch(getNotificationListAction(setLoading));
  }, [profileData]);

  const updateNotification = () => {
    dispatch(
      updateUserDetailsAction(showNotificationWhen, setNotificationLoading)
    );
    handleClose(false);
  };
  return (
    <Container className="mr-lg-30">
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
      ></div>
      <Row>
        <Col xs={12}>
          <section className="notification-card p-md-3 p-xl-5 p-2">
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

      <Modal show={show} onHide={handleClose} centered size="xl">
        <p className="heading-stock fs-sm-20 mb-0 text-center py-3 fw-bold">
          Receive Notification When
        </p>

        <Modal.Body>
          <div className="row">
            <div className="col-3 d-flex  flex-column align-items-center">
              <p className="heading-stock  mb-0 text-center py-3 fw-bold">
                Observation
              </p>
              <label
                className="form-check-label check-box-text cursor-pointer  my-3"
                for="flexCheckDefault"
              >
                New stock is created
              </label>
              <label
                className="form-check-label check-box-text cursor-pointer  my-3"
                for="flexCheckDefault"
              >
                Stock is sold
              </label>
              <label
                className="form-check-label check-box-text cursor-pointer  my-3"
                for="flexCheckDefault"
              >
                General news is added
              </label>
              <label
                className="form-check-label check-box-text cursor-pointer  my-3"
                for="flexCheckDefault"
              >
                Related news is added
              </label>
            </div>
            <div className="col-3 d-flex  flex-column align-items-center">
              <p className="heading-stock  mb-0 text-center py-3 fw-bold">
                Push
              </p>
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                checked={showNotificationWhen.showNotificationForNewStocksM}
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForNewStocksM: e.target.checked,
                  });
                }}
              />
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                checked={showNotificationWhen.showNotificationForsoldStocksM}
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForsoldStocksM: e.target.checked,
                  });
                }}
              />
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                checked={showNotificationWhen.showNotificationForGeneralNewsM}
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForGeneralNewsM: e.target.checked,
                  });
                }}
              />
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                checked={showNotificationWhen.showNotificationForReleatedNewsM}
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForReleatedNewsM: e.target.checked,
                  });
                }}
              />
            </div>
            <div className="col-3 d-flex  flex-column align-items-center">
              <p className="heading-stock  mb-0 text-center py-3 fw-bold">
                Web
              </p>
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                checked={showNotificationWhen.showNotificationForNewStocksW}
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForNewStocksW: e.target.checked,
                  });
                }}
              />
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                checked={showNotificationWhen.showNotificationForsoldStocksW}
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForsoldStocksW: e.target.checked,
                  });
                }}
              />
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                checked={showNotificationWhen.showNotificationForGeneralNewsW}
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForGeneralNewsW: e.target.checked,
                  });
                }}
              />
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                checked={showNotificationWhen.showNotificationForReleatedNewsW}
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForReleatedNewsW: e.target.checked,
                  });
                }}
              />
            </div>

            <div className="col-3 d-flex  flex-column align-items-center">
              <p className="heading-stock  mb-0 text-center py-3 fw-bold">
                E-mail
              </p>
              <input
                className="cursor-pointer mx-2 my-4"
                type="checkbox"
                checked={showNotificationWhen.showNotificationForNewStocksE}
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForNewStocksE: e.target.checked,
                  });
                }}
              />
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                checked={showNotificationWhen.showNotificationForsoldStocksE}
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForsoldStocksE: e.target.checked,
                  });
                }}
              />
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                checked={showNotificationWhen.showNotificationForGeneralNewsE}
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForGeneralNewsE: e.target.checked,
                  });
                }}
              />
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                checked={showNotificationWhen.showNotificationForReleatedNewsE}
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForReleatedNewsE: e.target.checked,
                  });
                }}
              />
            </div>
            <div className="row ">
              <div className="col d-flex justify-content-end my-3">
                <button
                  type="button"
                  onClick={() => updateNotification()}
                  className="news-upload-btn cursor-pointer px-3 py-2"
                >
                  {notificationLoading ? <Loader /> : "Submit"}
                </button>
                <button
                  className="news-upload-btn cursor-pointer px-3 py-2 mx-3"
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};
export default Notification;
