import React from "react";
import ContactForm from "./ContactForm";
import "./contacts.css";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

const Contact = () => {
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();

  return (
    <div className="container  py-5 mt-100">
      <div className="row  justify-content-center align-items-center h-100 ">
        <div className="col">
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-7 d-flex justify-content-center d-sm-block  pt-3  ">
              <div className="p-xl-5 p-2 us-contact">
                <h1 className=" mb-2 mb-md-3  section-heading fs-sm-24">
                  {getValueOf("Contact Us")}
                </h1>
                <p className=" sub-text m-0">Send us your concerns 24x7</p>
                <div className="row mt-4 mt-md-5 pt-2 ">
                  <div className=" col-12 col-md-4 order-3 mt-4 mt-md-0  order-md-1">
                    <p className=" email-heading pb-2 m-0">
                      {getValueOf("Email")}
                    </p>
                    <p
                      className={`${
                        layoutClickChanger
                          ? "email-para  text-end"
                          : "email-para"
                      }`}
                      dir="ltr"
                    >
                      stockadvisor{" "}
                      <span className="d-lg-block">@email.com</span>
                    </p>
                  </div>

                  <div className="col-5 col-md-4 order-2 order-md-2  d-flex flex-column justify-content-end d-md-block">
                    <p className=" email-heading pb-2 m-0 fs-sm-14">
                      {getValueOf("Telephone")}
                    </p>
                    <p className=" email-para">1234567890</p>
                  </div>

                  <div className="col-7 col-md-4 order-1 order-md-3 p-0">
                    <p className="email-heading pb-md-3 pb-3 m-0">
                      {getValueOf("Address")}
                    </p>
                    <p className="addres-sub-heading pt-1">Santo Domingo</p>
                    <p className="sub-text">Lorem passagess</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12   col-lg-5 ">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
