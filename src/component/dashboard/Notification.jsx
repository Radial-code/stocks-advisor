import React from "react";
import "../Panel/Notification.css";
import { Table, InputGroup, FormControl } from "react-bootstrap";
const Notification = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className="email ">E-mail</th>
          <th className="email ">Web</th>
          <th className="email">Push</th>
          <th className="observations">Observations</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <label className="checkbox-notification">
              <input type="checkbox" />
              <span class="geekmark"></span>
            </label>
          </td>
          <td>
            <label className="checkbox-notification-web">
              <input type="checkbox" />
              <span class="geekmark"></span>
            </label>
          </td>
          <td>
            <label className="checkbox-notification">
              <input type="checkbox" />
              <span class="geekmark"></span>
            </label>
          </td>
          <td className="email">Lorem ipsum dolor sit amet, consectetur</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Notification;
