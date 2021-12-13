import React, { useEffect, useState } from "react";
import "../../dashboardCss/Notification.css";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getUserPaymentMethodAction } from "../../../redux/action/payment";
import PaymentTable from "./PaymentTable";
import BubblesLoader from "../../common/BubblesLoader";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";

const PaymentDetails = ({ setSidebarActive, sidebarActive }) => {
  const { getValueOf } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getUserPaymentMethodAction(setLoading));
  }, [dispatch]);

  return (
    <div className="mr-lg-30 width-table">
      <div
        onClick={() => setSidebarActive((preState) => !preState)}
        className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
      ></div>
      <Row>
        <Col xs={12}>
          <section className="notification-card p-lg-5 p-2 ">
            <div className="border-b-1">
              <p className="heading-stock fs-sm-20">
                {getValueOf("Payment Details")}
              </p>
            </div>

            <div className="mb-5 h-calc-100vh-442 overflow-auto scroll-bar">
              <div className=" sold-stock-scrollbar">
                {loading ? (
                  <div className=" h-calc-100vh-442 d-flex align-items-center justify-content-center">
                    <BubblesLoader />
                  </div>
                ) : (
                  <PaymentTable getValueOf={getValueOf} />
                )}
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentDetails;
