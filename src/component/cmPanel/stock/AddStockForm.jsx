import React, { useEffect, useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import Buket from "../../../assets/img/backet.png";
import {
  getCategoryListAction,
  getExchangeListAction,
  getPortfolioListAction,
} from "../../../redux/action/cmPanel/OurServices";
import { addNewStockDetailsAction } from "../../../redux/action/cmPanel/stock";
import Loader from "../../common/Loader";
import { Link } from "react-router-dom";

const AddStockForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [exchangeLoading, setExchangeLoading] = useState(false);
  const [portfolioLoading, setPortfolioLoading] = useState(false);
  const [addStockLoading, setAddStockLoading] = useState(false);
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

  const categoryList = useSelector((state) => state.cmPanel.categoryList);
  const exchangeList = useSelector((state) => state.cmPanel.exchangeList);
  const portfolioList = useSelector((state) => state.cmPanel.portfolioList);

  useEffect(() => {
    dispatch(getCategoryListAction(setLoading));
    dispatch(getExchangeListAction(setExchangeLoading));
    dispatch(getPortfolioListAction(setPortfolioLoading));
  }, []);

  const submitStockDetails = () => {
    if (
      stockDetails.joinDate !== "" &&
      stockDetails.joinPrice !== "" &&
      stockDetails.category !== "" &&
      stockDetails.exchange !== "" &&
      stockDetails.portfolio !== "" &&
      stockDetails.soldDate !== "" &&
      stockDetails.soldPrice !== "" &&
      stockDetails.symbol !== ""
    ) {
      dispatch(
        addNewStockDetailsAction(
          stockDetails,
          setAddStockLoading,
          setStockDetails
        )
      );
      setStockDetails({
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
    }
  };

  return (
    <div className="col-12 h-100 stock-add-new">
      <div className="add-stock-bg p-sm-5 p-3 mt-5  w-xl-1000">
        <div className="mt-4 d-flex flex-sm-row flex-column justify-content-sm-between align-items-center">
          <p className="new-stock-heading ff-popins mb-0 fs-sm-20">
            Add New Stock
          </p>
          <Link to="/content/manager/stocks">
            <button className="update-btn-2 ">Back</button>
          </Link>
        </div>

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
                  type="number"
                  value={stockDetails.joinPrice}
                  placeholder="Join Price"
                  onChange={(e) => {
                    setStockDetails({
                      ...stockDetails,
                      joinPrice: e.target.value,
                      currentPrice: e.target.value,
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
                  value={stockDetails.symbol}
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
                value={stockDetails.category}
                onChange={(e) => {
                  setStockDetails({
                    ...stockDetails,
                    category: e.target.value,
                  });
                }}
                className=" add-new-stock-select mb-3"
              >
                <select className="form-select text-end cursor-pointer">
                  <option>Category</option>
                  {!!categoryList && !!categoryList.length ? (
                    categoryList.map((category, index) => {
                      return (
                        <option key={index} value={category._id}>
                          {category.title}
                        </option>
                      );
                    })
                  ) : (
                    <option>You don't have any category </option>
                  )}
                </select>
              </FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <FormGroup
                value={stockDetails.portfolio}
                onChange={(e) => {
                  setStockDetails({
                    ...stockDetails,
                    portfolio: e.target.value,
                  });
                }}
                className=" add-new-stock-select mb-3"
              >
                <select className="form-select text-end cursor-pointer">
                  <option>Portfolio</option>
                  {!!portfolioList && !!portfolioList.length ? (
                    portfolioList.map((portfolio, index) => {
                      return (
                        <option key={index} value={portfolio._id}>
                          {portfolio.title}
                        </option>
                      );
                    })
                  ) : (
                    <option>You don't have any portfolio </option>
                  )}
                </select>
              </FormGroup>
            </div>
            <div className="col-md-6">
              <FormGroup
                value={stockDetails.exchange}
                onChange={(e) => {
                  setStockDetails({
                    ...stockDetails,
                    exchange: e.target.value,
                  });
                }}
                className=" add-new-stock-select mb-3"
              >
                <select className="form-select text-end cursor-pointer">
                  <option>Exchange</option>
                  {!!exchangeList && !!exchangeList.length ? (
                    exchangeList.map((exchange, index) => {
                      return (
                        <option key={index} value={exchange._id}>
                          {exchange.title}
                        </option>
                      );
                    })
                  ) : (
                    <option>You don't have any exchange </option>
                  )}
                </select>
              </FormGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6  datepicker-input position-relative order-sm-1 order-2">
              <Form.Group
                className="mb-3 add-new-stock-field "
                controlId="formBasicEmail"
              >
                <Form.Control
                  value={stockDetails.soldPrice}
                  type="text"
                  placeholder="Sold Price"
                  onChange={(e) => {
                    setStockDetails({
                      ...stockDetails,
                      soldPrice: e.target.value,
                    });
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-md-6 datepicker-input position-relative order-sm-2 order-1">
              <DatePicker
                placeholderText="Sold Date"
                className="mb-3"
                selected={stockDetails.soldDate}
                onChange={(e) => {
                  setStockDetails({
                    ...stockDetails,
                    soldDate: e,
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
              disabled={addStockLoading}
              className="update-btn my-3 ff-popins"
              onClick={() => submitStockDetails()}
            >
              {addStockLoading ? <Loader /> : "Add"}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default AddStockForm;
