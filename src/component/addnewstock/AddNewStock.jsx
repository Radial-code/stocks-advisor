import React, { useState } from "react";
import "../addnewstock/addnewstock.css";
import { Form, FormGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Buket from "../../assets/img/backet.png";
function AddNewStock() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [firstDate, setFirstDate] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="add-stock-bg p-sm-5 p-3 mt-3">
            <p className="new-stock-heading ff-popins mb-0 ">Add New Stock</p>
            <Form className="pt-sm-5  pt-4">
              <div className="row">
                <div className="col-sm-6 order-2 datepicker-input position-relative order-sm-2 order-1">
                  <DatePicker
                    placeholderText="Join Date"
                    className="mb-3"
                    selected={firstDate}
                    onChange={(date) => setFirstDate(date)}
                  />
                  <img
                    className="position-absolute bucket-img"
                    src={Buket}
                    alt="Buket"
                  />
                </div>
                <div className="col-sm-6 order-1 last-name order-sm-1 order-2">
                  <Form.Group
                    className="mb-3 add-new-stock-field "
                    controlId="formBasicEmail"
                  >
                    <Form.Control type="email" placeholder="Join Price" />
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <Form.Group
                    className="mb-3 add-new-stock-field "
                    controlId="formBasicEmail"
                  >
                    <Form.Control type="email" placeholder="Symbol" />
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <FormGroup className=" add-new-stock-select mb-3">
                    <select className="form-select text-end">
                      <option>Category</option>
                    </select>
                  </FormGroup>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <Form.Group
                    className="mb-3 add-new-stock-field "
                    controlId="formBasicEmail"
                  >
                    <Form.Control type="email" placeholder="Portfolio" />
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group
                    className="mb-3 add-new-stock-field "
                    controlId="formBasicEmail"
                  >
                    <Form.Control type="email" placeholder="Exchange" />
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6  datepicker-input position-relative order-sm-1 order-2">
                  <DatePicker
                    className="mb-3"
                    placeholderText="Sell Date (if sold)"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  <img
                    className="position-absolute bucket-img "
                    src={Buket}
                    alt="Buket"
                  />
                </div>
                <div className="col-sm-6 datepicker-input position-relative order-sm-2 order-1">
                  <DatePicker
                    placeholderText="Sold Date"
                    className="mb-3"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                  />
                  <img
                    className="position-absolute bucket-img"
                    src={Buket}
                    alt="Buket"
                  />
                </div>
              </div>

              <div className="d-flex flex-sm-row flex-column">
                <button className="new-stock-btn my-3 border-0 ff-popins">
                  Add
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewStock;
