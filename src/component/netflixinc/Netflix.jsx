/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Buket from '../../assets/img/backet.png';

function Netflix() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [firstDate, setFirstDate] = useState(new Date());

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="add-stock-bg p-sm-5 p-3 mt-3">
            <p className="new-stock-heading ff-popins mb-0 ">Netflix Inc</p>
            <Form className="pt-sm-5  pt-4">
              <div className="row">
                <div className="col-sm-6 order-2 datepicker-input position-relative order-sm-2 order-1">
                  <DatePicker
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
                    <Form.Control type="email" placeholder="$125" />
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <Form.Group
                    className="mb-3 add-new-stock-field "
                    controlId="formBasicEmail"
                  >
                    <Form.Control type="email" placeholder="NFLX" />
                  </Form.Group>
                </div>
                <div className="col-sm-6">
                  <FormGroup className=" add-new-stock-select mb-3">
                    <select className="form-select text-end">
                      <option>Common</option>
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
                    <Form.Control type="email" placeholder="Netflix Inc" />
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
                <button className="delete-new-stock-btn my-sm-3  ff-popins">
                  Delete
                </button>
                <button className="new-stock-btn my-3 border-0 ff-popins mx-sm-3">
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

export default Netflix;
