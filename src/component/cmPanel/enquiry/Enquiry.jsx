import React from "react";
import { Row } from "react-bootstrap";
import EnquiryList from "./EnquiryList";
import "../../cmPanelCss/userList.css";

const Enquiry = () => {
  return (
    <div className="width-table">
      <Row>
        <EnquiryList />
      </Row>
    </div>
  );
};
export default Enquiry;
