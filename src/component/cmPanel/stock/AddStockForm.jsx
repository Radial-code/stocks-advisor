import React, { useEffect, useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { withRouter } from "react-router";
import DatePicker from "react-datepicker";
import moment from "moment";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import Buket from "../../../assets/img/backet.png";
import BubblesLoader from "../../common/BubblesLoader";
import {
  getCategoryListAction,
  getExchangeListAction,
  getPortfolioListAction,
} from "../../../redux/action/cmPanel/OurServices";
import {
  addNewStockDetailsAction,
  DeleteStockDetailsAction,
  updateStockDetailsAction,
} from "../../../redux/action/cmPanel/stock";
import Loader from "../../common/Loader";
import { Link } from "react-router-dom";

const initialState = {
  joinDate: "",
  joinPrice: "",
  category: "",
  exchange: "",
  portfolios: [],
  soldDate: "",
  soldPrice: "",
  symbol: "",
  currentPrice: "",
};

const AddStockForm = ({ edit, match, history, detailLoading }) => {
  const { layoutClickChanger } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const { id } = match.params;
  const categoryList = useSelector((state) => state.cmPanel.categoryList);
  const exchangeList = useSelector((state) => state.cmPanel.exchangeList);
  const portfolioList = useSelector((state) => state.cmPanel.portfolioList);
  const stockDetailsList = useSelector((state) => state.cmPanel.stockDetails);

  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [error, setError] = useState(false);
  const [exchangeLoading, setExchangeLoading] = useState(false);
  const [portfolioLoading, setPortfolioLoading] = useState(false);
  const [addStockLoading, setAddStockLoading] = useState(false);
  const [stockDetails, setStockDetails] = useState(initialState);

  useEffect(() => {
    dispatch(getCategoryListAction(setLoading));
    dispatch(getExchangeListAction(setExchangeLoading));
    dispatch(getPortfolioListAction(setPortfolioLoading));
  }, []);

  useEffect(() => {
    if (!detailLoading) {
      setStockDetails(stockDetailsList);
    }
  }, [detailLoading]);

  const submitStockDetails = () => {
    setError(true);
    if (
      stockDetails.joinDate !== "" &&
      stockDetails.joinPrice !== "" &&
      stockDetails.category !== "" &&
      stockDetails.exchange !== "" &&
      stockDetails.symbol !== ""
    ) {
      dispatch(
        addNewStockDetailsAction(stockDetails, setAddStockLoading, history)
      );
      setError(false);
      setStockDetails({
        joinDate: "",
        joinPrice: "",
        category: "",
        exchange: "",
        portfolios: [],
        soldDate: "",
        soldPrice: "",
        symbol: "",
        currentPrice: 0,
      });
    }
  };

  const deleteStock = () => {
    if (!!id) {
      dispatch(DeleteStockDetailsAction(id, setDeleteLoading, history));
    }
  };

  const updateStockDetails = () => {
    if (!!id) {
      setError(true);
      if (
        stockDetails.joinDate !== "" &&
        stockDetails.joinPrice !== "" &&
        stockDetails.category !== "" &&
        stockDetails.exchange !== "" &&
        // stockDetails.portfolios.length &&
        stockDetails.symbol !== ""
      ) {
        dispatch(
          updateStockDetailsAction(id, stockDetails, setUpdateLoading, history)
        );
      }
    }
  };

  const data = [];
  const valueId = [];
  const selectPortfolio = (id) => {
    const ValidId = valueId.includes(id);
    if (data === []) {
      data.push({ portfolioId: id });
      valueId.push(id);
    } else if (!ValidId) {
      data.push({ portfolioId: id });
      valueId.push(id);
    } else {
      var index = data.indexOf({ portfolioId: id });
      data.splice(index, 1);
      var indexvalueId = valueId.indexOf({ portfolioId: id });
      valueId.splice(indexvalueId, 1);
    }
    stockDetails.portfolios = data;
  };

  return (
    <div className="col-12 h-100 stock-add-new">
      <div className="add-stock-bg p-sm-5 p-3  w-xl-1000">
        <div className="mt-4 d-flex flex-sm-row flex-column justify-content-sm-between align-items-center">
          <p className="new-stock-heading ff-popins mb-0 fs-sm-20">
            {edit ? "Update Stock" : "Add New Stock"}
          </p>
          <Link to="/content/manager/stocks">
            <button className="update-btn-2 ">Back</button>
          </Link>
        </div>

        {detailLoading ? (
          <div className="d-flex justify-content-center align-items-center h-100">
            <BubblesLoader />
          </div>
        ) : (
          <Form className="pt-sm-5  pt-4">
            <div className="row">
              <div className="col-md-6 order-2 datepicker-input position-relative order-sm-2 order-1">
                <DatePicker
                  placeholderText="Join Date"
                  className="mb-md-0 mb-3"
                  value={
                    stockDetails &&
                    stockDetails.joinDate &&
                    moment(stockDetails.joinDate).format(`YYYY/MM/DD`)
                  }
                  onChange={(e) => {
                    setStockDetails((pre) => ({
                      ...pre,
                      joinDate: e,
                    }));
                  }}
                />
                <span className="text-danger">
                  {error && stockDetails.joinDate === ""
                    ? "Join Date is required"
                    : null}
                </span>
                <img
                  className={`${
                    layoutClickChanger
                      ? "position-absolute bucket-img"
                      : "position-absolute bucket-img2"
                  }`}
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
                    value={
                      stockDetails && stockDetails.joinPrice
                        ? stockDetails.joinPrice
                        : ""
                    }
                    placeholder="Join Price"
                    onChange={(e) => {
                      setStockDetails((pre) => ({
                        ...pre,
                        joinPrice: e.target.value,
                        currentPrice: e.target.value,
                      }));
                    }}
                  />
                  <span className="text-danger">
                    {error && stockDetails.joinPrice === ""
                      ? "Join Price is required"
                      : null}
                  </span>
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
                    value={stockDetails && stockDetails.symbol}
                    onChange={(e) => {
                      setStockDetails({
                        ...stockDetails,
                        symbol: e.target.value,
                      });
                    }}
                  />
                  <span className="text-danger">
                    {error && stockDetails.symbol === ""
                      ? "Symbol is required"
                      : null}
                  </span>
                </Form.Group>
              </div>
              <div className="col-md-6">
                {layoutClickChanger ? (
                  <FormGroup
                    value={stockDetails && stockDetails.category}
                    onChange={(e) => {
                      setStockDetails({
                        ...stockDetails,
                        category: e.target.value,
                      });
                    }}
                    className=" add-new-stock-select mb-3"
                  >
                    <select
                      value={
                        stockDetails &&
                        stockDetails.category &&
                        stockDetails.category._id
                      }
                      className="form-select text-end cursor-pointer"
                    >
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
                    <span className="text-danger">
                      {error && stockDetails.category === ""
                        ? "Category is required"
                        : null}
                    </span>
                  </FormGroup>
                ) : (
                  <FormGroup
                    value={stockDetails && stockDetails.category}
                    onChange={(e) => {
                      setStockDetails({
                        ...stockDetails,
                        category: e.target.value,
                      });
                    }}
                    className=" add-new-stock-select2 mb-3"
                  >
                    <select
                      value={
                        stockDetails &&
                        stockDetails.category &&
                        stockDetails.category._id
                      }
                      className={
                        layoutClickChanger
                          ? "form-select text-end cursor-pointer"
                          : "form-select text-start cursor-pointer"
                      }
                    >
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
                    <span className="text-danger">
                      {error && stockDetails.category === ""
                        ? "Category is required"
                        : null}
                    </span>
                  </FormGroup>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6  datepicker-input position-relative order-sm-1 order-2">
                <Form.Group
                  className="mb-3 add-new-stock-field "
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    value={stockDetails && stockDetails.soldPrice}
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
                  value={
                    stockDetails &&
                    stockDetails.joinDate &&
                    moment(stockDetails.soldDate).format(`DD/MM/YY`)
                  }
                  onChange={(e) => {
                    setStockDetails({
                      ...stockDetails,
                      soldDate: e,
                    });
                  }}
                />
                <img
                  className={`${
                    layoutClickChanger
                      ? "position-absolute bucket-img"
                      : "position-absolute bucket-img2"
                  }`}
                  src={Buket}
                  alt="Buket"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                {layoutClickChanger ? (
                  <FormGroup
                    value={stockDetails && stockDetails.exchange}
                    onChange={(e) => {
                      setStockDetails({
                        ...stockDetails,
                        exchange: e.target.value,
                      });
                    }}
                    className=" add-new-stock-select mb-3"
                  >
                    <select
                      value={
                        stockDetails &&
                        stockDetails.exchange &&
                        stockDetails.exchange._id
                      }
                      className="form-select text-end cursor-pointer"
                    >
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
                    <span className="text-danger">
                      {error && stockDetails.exchange === ""
                        ? "Exchange is required"
                        : null}
                    </span>
                  </FormGroup>
                ) : (
                  <FormGroup
                    value={stockDetails && stockDetails.exchange}
                    onChange={(e) => {
                      setStockDetails({
                        ...stockDetails,
                        exchange: e.target.value,
                      });
                    }}
                    className=" add-new-stock-select2 mb-3"
                  >
                    <select
                      value={
                        stockDetails &&
                        stockDetails.exchange &&
                        stockDetails.exchange._id
                      }
                      className={`${
                        layoutClickChanger
                          ? "form-select text-end cursor-pointer"
                          : "form-select text-start cursor-pointer"
                      }`}
                    >
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
                    <span className="text-danger">
                      {error && stockDetails.exchange === ""
                        ? "Exchange is required"
                        : null}
                    </span>
                  </FormGroup>
                )}
              </div>
            </div>
            <p>Select portfolio list</p>
            {portfolioLoading ? (
              <BubblesLoader />
            ) : (
              <>
                {portfolioList && portfolioList.length
                  ? portfolioList.map((value, index) => {
                      return (
                        <div className="col-auto mb-3 d-flex align-items-center">
                          {layoutClickChanger ? (
                            <>
                              <label
                                className="form-check-label check-box-text Ellipse"
                                for="flexCheckDefault"
                              >
                                {value.title}
                              </label>
                              <input
                                key={index}
                                checked={
                                  !!stockDetailsList &&
                                  stockDetailsList.portfolios &&
                                  stockDetailsList.portfolios.length > 0
                                    ? stockDetailsList.portfolios.map((val) => {
                                        return val._id === value._id
                                          ? true
                                          : false;
                                      })
                                    : null
                                }
                                type="checkbox"
                                onClick={() => selectPortfolio(value._id)}
                                className="cursor-pointer mx-2"
                              />
                            </>
                          ) : (
                            <>
                              <input
                                key={index}
                                checked={
                                  !!stockDetailsList &&
                                  stockDetailsList.portfolios &&
                                  stockDetailsList.portfolios.length > 0
                                    ? stockDetailsList.portfolios.map((val) => {
                                        return val._id === value._id
                                          ? true
                                          : false;
                                      })
                                    : null
                                }
                                type="checkbox"
                                onClick={() => selectPortfolio(value._id)}
                                className="cursor-pointer mx-2"
                              />
                              <label
                                className="form-check-label check-box-text Ellipse"
                                for="flexCheckDefault"
                              >
                                {value.title}
                              </label>
                            </>
                          )}
                        </div>
                      );
                    })
                  : "You don't have any portfolio List"}
              </>
            )}
            <span className="text-danger">
              {error &&
              stockDetails &&
              stockDetails.portfolio &&
              !stockDetails.portfolio.length
                ? "Portfolio is required"
                : null}
            </span>

            <div className="d-flex flex-sm-row flex-column">
              {edit ? (
                <>
                  <button
                    type="button"
                    disabled={
                      stockDetailsList && stockDetailsList.isSold
                        ? true
                        : addStockLoading
                    }
                    className={`${
                      stockDetailsList && stockDetailsList.isSold
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    } update-btn my-3 ff-popins`}
                    onClick={() => updateStockDetails()}
                  >
                    {updateLoading ? <Loader /> : "Update"}
                  </button>
                  <button
                    type="button"
                    disabled={deleteLoading}
                    className="m-2 update-btn my-3 ff-popins"
                    onClick={() => deleteStock()}
                  >
                    {deleteLoading ? <Loader /> : "Delete"}
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  disabled={addStockLoading}
                  className="update-btn my-3 ff-popins"
                  onClick={() => submitStockDetails()}
                >
                  {addStockLoading ? <Loader /> : "Add"}
                </button>
              )}
            </div>
          </Form>
        )}
      </div>
    </div>
  );
};
export default withRouter(AddStockForm);
