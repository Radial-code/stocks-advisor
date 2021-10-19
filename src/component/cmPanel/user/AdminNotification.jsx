import React from "react";
import { Container, Row } from "react-bootstrap";
import Notification from "./Notification";

function AdminNotification() {
  return (
    <div>
      <Container>
        <Row>
          <Notification />
        </Row>
      </Container>
    </div>
  );
}

export default AdminNotification;
