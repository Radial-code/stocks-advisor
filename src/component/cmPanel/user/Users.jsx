import React from "react";
import { Row } from "react-bootstrap";
import "../../cmPanelCss/userList.css";
import UsersList from "./UsersList";

const Users = () => {
  return (
    <div className="width-table">
      <Row>
        <UsersList />
      </Row>
    </div>
  );
};

export default Users;
