import React, { useEffect, useState } from "react";
import "../../dashboardCss/Notification.css";
import { Container, Row, Col } from "react-bootstrap";
import DashboardDropDown from "../../dashboard/DashboardDropDown";
import { useDispatch } from "react-redux";
import { getUserPaymentMethodAction } from "../../../redux/action/payment";
import PaymentTable from "./PaymentTable";
import BubblesLoader from "../../common/BubblesLoader";

const PaymentDetails = ({
  sideBarHandler,
  setSidebarActive,
  sidebarActive,
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(getUserPaymentMethodAction(setLoading));
  }, []);

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
              <p className="heading-stock fs-sm-20">Payment Details</p>
            </div>

            <div className="mb-5 h-calc-100vh-442 overflow-auto scroll-bar">
              <div className=" sold-stock-scrollbar">
                {loading ? (
                  <div className=" h-calc-100vh-442 d-flex align-items-center justify-content-center">
                    <BubblesLoader />
                  </div>
                ) : (
                  <PaymentTable />
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
