import React from "react";
import "../dashboardCss/Notification.css";
import Sortarrow from "../../assets/img/sortarrow.png";
import push from "../../assets/img/push.png";
import { Table, Container, Row, Col } from "react-bootstrap";
import { DropDownIcon } from "../common/icons/Icons";
import DashboardDropDown from "./DashboardDropDown";
const PaymentDetails = ({
  sideBarHandler,
  setSidebarActive,
  sidebarActive,
}) => {
  const paymentData = [
    {
      status: "Better",
      cardNo: 123456789,
      plan: 123456789,
      amount: "$125,210",
      data: "15/07/2021",
    },
    {
      status: "Better",
      cardNo: 123456789,
      plan: 123456789,
      amount: "$125,210",
      data: "15/07/2021",
    },
    {
      status: "Better",
      cardNo: 123456789,
      plan: 123456789,
      amount: "$125,210",
      data: "15/07/2021",
    },
    {
      status: "Better",
      cardNo: 123456789,
      plan: 123456789,
      amount: "$125,210",
      data: "15/07/2021",
    },
    {
      status: "Better",
      cardNo: 123456789,
      plan: 123456789,
      amount: "$125,210",
      data: "15/07/2021",
    },
    {
      status: "Better",
      cardNo: 123456789,
      plan: 123456789,
      amount: "$125,210",
      data: "15/07/2021",
    },
    {
      status: "Better",
      cardNo: 123456789,
      plan: 123456789,
      amount: "$125,210",
      data: "15/07/2021",
    },
    {
      status: "Better",
      cardNo: 123456789,
      plan: 123456789,
      amount: "$125,210",
      data: "15/07/2021",
    },
    {
      status: "Better",
      cardNo: 123456789,
      plan: 123456789,
      amount: "$125,210",
      data: "15/07/2021",
    },
    {
      status: "Better",
      cardNo: 123456789,
      plan: 123456789,
      amount: "$125,210",
      data: "15/07/2021",
    },
    {
      status: "Better",
      cardNo: 123456789,
      plan: 123456789,
      amount: "$125,210",
      data: "15/07/2021",
    },
    {
      status: "Better",
      cardNo: 123456789,
      plan: 123456789,
      amount: "$125,210",
      data: "15/07/2021",
    },
    {
      status: "Better",
      cardNo: 123456789,
      plan: 123456789,
      amount: "$125,210",
      data: "15/07/2021",
    },
    {
      status: "Better",
      cardNo: 123456789,
      plan: 123456789,
      amount: "$125,210",
      data: "15/07/2021",
    },
    {
      status: "Better",
      cardNo: 123456789,
      plan: 123456789,
      amount: "$125,210",
      data: "15/07/2021",
    },
  ];

  return (
    <>
      <Container className="mr-lg-30">
        <div
          onClick={() => setSidebarActive((preState) => !preState)}
          className={`admin-overlay ${sidebarActive ? "w-100vw-m" : ""}`}
        ></div>
        <Row>
          <Col xs={12}>
            <div className="border-b-1  mb-3">
              <DashboardDropDown sideBarHandler={sideBarHandler} />
            </div>
          </Col>
          <Col xs={12}>
            <section className="notification-card p-lg-5 p-2 ">
              <div className="border-b-1">
                <p className="heading-stock fs-sm-20">Payment Details</p>
              </div>

              <div className="mb-5 h-calc-100vh-442 overflow-auto scroll-bar">
                <div className="table-responsive sold-stock-scrollbar">
                  <table className="table white-space-nowrap table-borderless">
                    <thead>
                      <tr className="">
                        <th scope="col-5" className="payment-thead">
                          <DropDownIcon />
                          <span className="me-2">Status</span>
                        </th>
                        <th scope="col-5" className="payment-thead">
                          <DropDownIcon />
                          <span className="me-2">Card No</span>
                        </th>
                        <th scope="col-5" className="payment-thead">
                          <DropDownIcon />
                          <span className="me-2">Plan</span>
                        </th>
                        <th scope="col-5" className="payment-thead">
                          <DropDownIcon />
                          <span className="me-2">Amount</span>
                        </th>
                        <th scope="col-5" className="payment-thead">
                          <DropDownIcon />
                          <span className="me-2">Date</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {paymentData.map((obj) => {
                        return (
                          <>
                            <tr className="tb-text border-b-1">
                              <td className="py-3">{obj.status}</td>
                              <td className="py-3">{obj.cardNo}</td>
                              <td className="py-3">{obj.plan}</td>
                              <td className="py-3">{obj.amount}</td>
                              <td className="py-3">{obj.data}</td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PaymentDetails;
