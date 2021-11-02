import React from "react";
import { Col } from "react-bootstrap";
import img_1 from "../../assets/img/visa.png";
import img_2 from "../../assets/img/paypal.png";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

const PaymentForm = () => {
  const { getValueOf } = useLayoutChangerProvider();
  return (
    <Col
      lg={5}
      className="mt-5 mt-xl-0 d-flex d-lg-block justify-content-center"
    >
      <section className="card-payment p-4">
        <p className="heading-stock  d-sm-flex fs-sm-14 justify-content-center d-lg-block">
          {getValueOf("Payment")}
        </p>
        <div className=" d-flex align-items-center ">
          <p className="stock-paragraph mb-0 fs-sm-12">
            {getValueOf("Use same information as in your profile")}
          </p>
          <span>
            <input className="payment-checkbox" type="Checkbox" />
          </span>
        </div>
        <div className="form-input-payment mt-4 d-flex align-items-center">
          <input
            className="border-0 "
            type="text"
            placeholder={getValueOf("Name")}
          />
        </div>
        <div className="form-input-payment mt-4 d-flex align-items-center">
          <input
            className="border-0 "
            type="text"
            placeholder={getValueOf("Email")}
          />
        </div>
        <div className="form-input-payment mt-4 d-flex align-items-center">
          <input
            className="border-0 arrow-none"
            type="number"
            placeholder={getValueOf("Phone")}
          />
        </div>
        <div className="d-flex justify-content-between paypal mt-4">
          <div className="visa-paypal">
            <img className="w-100" src={img_2} alt="" />
          </div>
          <div className="visa-paypal mr-15">
            <img className="w-100" src={img_1} alt="" />
          </div>
        </div>
      </section>
    </Col>
  );
};
export default PaymentForm;
