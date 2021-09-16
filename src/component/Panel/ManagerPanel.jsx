import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Manger.css";
const ManagerPanel = () => {
  return (
    <div>
      <div className="conatiner">
        <div className="row manger-panel-shadow">
          <p className="heading-stock">Add New News</p>
          <div className="col-6"></div>
          <div className="col-6">
            <div class="form-group">
              <input
                class="form-control small-paragraph"
                type="date"
                required
                placeholder="Date"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerPanel;
