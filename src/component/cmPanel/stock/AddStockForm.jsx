import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Buket from "../../../assets/img/backet.png";

const AddStockForm = () => {
  const [stockDetails, setStockDetails] = useState({
    joinDate: "",
    joinPrice: "",
    category: "",
    exchange: "",
    portfolio: "",
    soldDate: "",
    soldPrice: "",
    symbol: "",
    currentPrice: 0,
  });
  console.log("stockDetails", stockDetails);

  const submitStockDetails = () => {
    console.log("stockDetails", stockDetails);
  };

  return (
    <div className="col-12 h-100 stock-add-new">
      <div className="add-stock-bg p-sm-5 p-3 mt-5  w-xl-1000">
        <p className="new-stock-heading ff-popins mb-0 fs-sm-20">
          Add New Stock
        </p>
        <Form className="pt-sm-5  pt-4">
          <div className="row">
            <div className="col-md-6 order-2 datepicker-input position-relative order-sm-2 order-1">
              <DatePicker
                placeholderText="Join Date"
                className="mb-3"
                selected={stockDetails.joinDate}
                onChange={(e) => {
                  setStockDetails({
                    ...stockDetails,
                    joinDate: e,
                  });
                }}
              />
              <img
                className="position-absolute bucket-img"
                src={Buket}
                alt="Buket"
              />
            </div>
            <div className="col-md-6 order-1 last-name order-sm-1 order-2">
              <Form.Group
                className="mb-3 add-new-stock-field "
                controlId="formBasicEmail"
              >
                <Form.Control
                  type="text"
                  placeholder="Join Price"
                  onChange={(e) => {
                    setStockDetails({
                      ...stockDetails,
                      joinPrice: e.target.value,
                    });
                  }}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Group
                className="mb-3 add-new-stock-field "
                controlId="formBasicEmail"
              >
                <Form.Control
                  type="text"
                  placeholder="Symbol"
                  onChange={(e) => {
                    setStockDetails({
                      ...stockDetails,
                      symbol: e.target.value,
                    });
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <FormGroup
                onChange={(e) => {
                  setStockDetails({
                    ...stockDetails,
                    category: e.target.value,
                  });
                }}
                className=" add-new-stock-select mb-3"
              >
                <select className="form-select text-end">
                  <option>Category</option>
                </select>
              </FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Group
                className="mb-3 add-new-stock-field "
                controlId="formBasicEmail"
              >
                <Form.Control
                  type="text"
                  placeholder="Portfolio"
                  onChange={(e) => {
                    setStockDetails({
                      ...stockDetails,
                      portfolio: e.target.value,
                    });
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group
                className="mb-3 add-new-stock-field "
                controlId="formBasicEmail"
              >
                <Form.Control
                  type="text"
                  placeholder="Exchange"
                  onChange={(e) => {
                    setStockDetails({
                      ...stockDetails,
                      exchange: e.target.value,
                    });
                  }}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6  datepicker-input position-relative order-sm-1 order-2">
              <DatePicker
                className="mb-3"
                placeholderText="Sell Date (if sold)"
                selected={stockDetails.soldDate}
                onChange={(e) => {
                  setStockDetails({
                    ...stockDetails,
                    soldDate: e,
                  });
                }}
              />
              <img
                className="position-absolute bucket-img "
                src={Buket}
                alt="Buket"
              />
            </div>
            <div className="col-md-6 datepicker-input position-relative order-sm-2 order-1">
              <DatePicker
                placeholderText="Sold Date"
                className="mb-3"
                selected={stockDetails.soldPrice}
                onChange={(e) => {
                  setStockDetails({
                    ...stockDetails,
                    soldPrice: e,
                  });
                }}
              />
              <img
                className="position-absolute bucket-img"
                src={Buket}
                alt="Buket"
              />
            </div>
          </div>

          <div className="d-flex flex-sm-row flex-column">
            <button
              type="button"
              className="update-btn my-3 ff-popins"
              onClick={() => submitStockDetails()}
            >
              Add
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default AddStockForm;
