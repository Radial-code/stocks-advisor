import React, { useEffect, useState } from "react";
import "../dashboardCss/Notification.css";
import { Container, Row, Col } from "react-bootstrap";
import NotificationTable from "./NotificationTable";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { getNotificationListAction } from "../../redux/action/contact";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

import Setting from "../../assets/img/setting.png";
import { updateUserDetailsAction } from "../../redux/action/userPanel/user";
import Loader from "../common/Loader";

const Notification = ({ setSidebarActive, sidebarActive }) => {
  const { layoutClickChanger } = useLayoutChangerProvider();
  const [notificationLoading, setNotificationLoading] = useState(false);
  const [showNotificationWhen, setShowNotificationWhen] = useState({
    showNotificationForsoldStocks: false,
    showNotificationForNewStocks: false,
    showNotificationForGeneralNews: false,
    showNotificationForReleatedNews: false,
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getNotificationListAction(setLoading));
  }, []);

  const updateNotification = () => {
    dispatch(
      updateUserDetailsAction(showNotificationWhen, setNotificationLoading)
    );
  };
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

      <Modal show={show} onHide={handleClose} centered size="xl">
        <p className="heading-stock fs-sm-20 mb-0 text-center py-3 fw-bold">
          Receive Notification When
        </p>

        <Modal.Body>
          <div className="row">
            <div className="col-3 d-flex  flex-column align-items-center">
              <p className="heading-stock fs-sm-20 mb-0 text-center py-3 fw-bold">
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
              <p className="heading-stock fs-sm-20 mb-0 text-center py-3 fw-bold">
                Push
              </p>
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForNewStocks: e.target.checked,
                  });
                }}
              />
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForNewStocks: e.target.checked,
                  });
                }}
              />
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForNewStocks: e.target.checked,
                  });
                }}
              />
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForNewStocks: e.target.checked,
                  });
                }}
              />
            </div>
            <div className="col-3 d-flex  flex-column align-items-center">
              <p className="heading-stock fs-sm-20 mb-0 text-center py-3 fw-bold">
                Web
              </p>
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForNewStocks: e.target.checked,
                  });
                }}
              />
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForNewStocks: e.target.checked,
                  });
                }}
              />
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForNewStocks: e.target.checked,
                  });
                }}
              />
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForNewStocks: e.target.checked,
                  });
                }}
              />
            </div>

            <div className="col-3 d-flex  flex-column align-items-center">
              <p className="heading-stock fs-sm-20 mb-0 text-center py-3 fw-bold">
                E-mail
              </p>
              <input
                className="cursor-pointer mx-2 my-4"
                type="checkbox"
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForNewStocks: e.target.checked,
                  });
                }}
              />
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForNewStocks: e.target.checked,
                  });
                }}
              />
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForNewStocks: e.target.checked,
                  });
                }}
              />
              <input
                className="cursor-pointer mx-2  my-4"
                type="checkbox"
                onChange={(e) => {
                  setShowNotificationWhen({
                    ...showNotificationWhen,
                    showNotificationForNewStocks: e.target.checked,
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

          {/* <div className="py-2 d-flex align-items-center justify-content-start">
            {layoutClickChanger ? (
              <>
                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  New stock is created
                </label>
                <input
                  className="cursor-pointer mx-2"
                  type="checkbox"
                  onChange={(e) => {
                    setShowNotificationWhen({
                      ...showNotificationWhen,
                      showNotificationForNewStocks: e.target.checked,
                    });
                  }}
                />
              </>
            ) : (
              <>
                <input
                  className="cursor-pointer mx-2"
                  type="checkbox"
                  onChange={(e) => {
                    setShowNotificationWhen({
                      ...showNotificationWhen,
                      showNotificationForNewStocks: e.target.checked,
                    });
                  }}
                />

                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  New stock is created
                </label>
              </>
            )}
          </div> */}
          {/* <div className="py-2 d-flex align-items-center justify-content-start">
            {layoutClickChanger ? (
              <>
                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  Stock is sold
                </label>
                <input
                  className="cursor-pointer mx-2"
                  type="checkbox"
                  onChange={(e) => {
                    setShowNotificationWhen({
                      ...showNotificationWhen,
                      showNotificationForsoldStocks: e.target.checked,
                    });
                  }}
                />
              </>
            ) : (
              <>
                <input
                  className="cursor-pointer mx-2"
                  type="checkbox"
                  onChange={(e) => {
                    setShowNotificationWhen({
                      ...showNotificationWhen,
                      showNotificationForsoldStocks: e.target.checked,
                    });
                  }}
                />

                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  Stock is sold
                </label>
              </>
            )}
          </div> */}
          {/* <div className="py-2 d-flex align-items-center justify-content-start">
            {layoutClickChanger ? (
              <>
                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  General news is added
                </label>
                <input
                  className="cursor-pointer mx-2"
                  type="checkbox"
                  onChange={(e) => {
                    setShowNotificationWhen({
                      ...showNotificationWhen,
                      showNotificationForGeneralNews: e.target.checked,
                    });
                  }}
                />
              </>
            ) : (
              <>
                <input
                  className="cursor-pointer mx-2"
                  type="checkbox"
                  onChange={(e) => {
                    setShowNotificationWhen({
                      ...showNotificationWhen,
                      showNotificationForGeneralNews: e.target.checked,
                    });
                  }}
                />

                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  General news is added
                </label>
              </>
            )}
          </div> */}
          {/* <div className="py-2 d-flex align-items-center justify-content-start">
            {layoutClickChanger ? (
              <>
                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  Related news is added
                </label>
                <input
                  className="cursor-pointer mx-2"
                  type="checkbox"
                  onChange={(e) => {
                    setShowNotificationWhen({
                      ...showNotificationWhen,
                      showNotificationForReleatedNews: e.target.checked,
                    });
                  }}
                />
              </>
            ) : (
              <>
                <input
                  className="cursor-pointer mx-2"
                  type="checkbox"
                  onChange={(e) => {
                    setShowNotificationWhen({
                      ...showNotificationWhen,
                      showNotificationForReleatedNews: e.target.checked,
                    });
                  }}
                />

                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  Related news is added
                </label>
              </>
            )}
          </div> */}
          {/* <div className="d-flex my-3 justify-content-end">
            {layoutClickChanger ? (
              <>
                <button
                  className="news-upload-btn cursor-pointer px-3 py-2 mx-3"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => updateNotification()}
                  className="news-upload-btn cursor-pointer px-3 py-2"
                >
                  {notificationLoading ? <Loader /> : "Submit"}
                </button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div> */}
        </Modal.Body>
      </Modal>
    </Container>
  );
};
export default Notification;
