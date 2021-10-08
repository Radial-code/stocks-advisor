import ReactTagInput from "@pathofdev/react-tag-input";
import React, { useEffect, useState } from "react";
import { Col, Form, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getExchangeListAction,
  getPortfolioListAction,
} from "../../../redux/action/cmPanel/OurServices";
import { getStockListAction } from "../../../redux/action/cmPanel/stock";
import { addNewNewsDetailsAction } from "../../../redux/action/news";
import Loader from "../../common/Loader";

const AddNewNews = () => {
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [exchangeLoading, setExchangeLoading] = useState(false);
  const [addStockLoading, setAddStockLoading] = useState(false);
  const [portfolioLoading, setPortfolioLoading] = useState(false);
  const [input, setInput] = useState("");
  const [newsDetails, setNewsDetails] = useState({
    title: "",
    description: "",
    showOnHomePage: true,
    portfolio: "",
    exchange: "",
    stock: "",
    tags: "",
  });

  const stockList = useSelector((state) => state.cmPanel.stockList);
  const exchangeList = useSelector((state) => state.cmPanel.exchangeList);
  const portfolioList = useSelector((state) => state.cmPanel.portfolioList);
  const userDetails = useSelector((state) => state.auth.userData);

  useEffect(() => {
    dispatch(getStockListAction(setLoading));
    dispatch(getExchangeListAction(setExchangeLoading));
    dispatch(getPortfolioListAction(setPortfolioLoading));
  }, []);

  const AddNewNewsDetails = () => {
    tags.map((item) => {
      newsDetails.tags += `${item},`;
    });
    if (
      newsDetails.title !== "" &&
      newsDetails.description !== "" &&
      newsDetails.portfolio !== "" &&
      newsDetails.exchange !== "" &&
      newsDetails.stock !== "" &&
      newsDetails.tags !== ""
    ) {
      dispatch(
        addNewNewsDetailsAction(newsDetails, setAddStockLoading, setNewsDetails)
      );
      setNewsDetails({
        title: "",
        description: "",
        portfolio: "",
        exchange: "",
        stock: "",
        tags: "",
      });
    }
  };

  return (
    <Col xs={12}>
      <div className="manger-panel-shadow p-5 w-xl-1000">
        <p className="heading-stock d-none d-sm-block fs-sm-20">Add New News</p>
        <p className="heading-stock d-block d-sm-none">Add News</p>

        <div className="row">
          <div className="col-12 col-lg-6 mb-3">
            <Form.Group
              className="mb-3 add-new-stock-field "
              controlId="formBasicEmail"
            >
              <Form.Control
                type="text"
                placeholder="Title"
                onChange={(e) => {
                  setNewsDetails({
                    ...newsDetails,
                    title: e.target.value,
                  });
                }}
              />
            </Form.Group>
          </div>
          <div className="col-12 col-lg-6 mb-3 ">
            <div className="inputs-border   d-flex justify-content-between align-items-center py-1 ps-1 pe_12">
              {input !== "" ? (
                <span className="small-paragraph d-none d-sm-block">
                  {input}
                </span>
              ) : (
                <span className="small-paragraph d-none d-sm-block">
                  YouTube / Image Link
                </span>
              )}
              {input !== "" ? (
                <span className="small-paragraph d-block d-sm-none">
                  {input}
                </span>
              ) : (
                <span className="small-paragraph d-block d-sm-none">
                  Video/ Image Link
                </span>
              )}

              <input
                onChange={(e) => setInput(e.target.value)}
                type="file"
                value=""
                id="my-file"
                hidden
              />

              <button className="upload-img-btn d-none d-sm-block">
                <label for="my-file">Upload Image</label>
              </button>
              <button className="upload-img-btn d-block d-sm-none">
                <label for="my-file">Upload</label>
              </button>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <div className="col-md-6 input-tag w-100">
              <ReactTagInput
                tags={tags}
                placeholder="Details"
                maxTags={1}
                editable={true}
                readOnly={false}
                removeOnBackspace={true}
                onChange={(newTags) => setTags(newTags)}
              />
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <FormGroup
              value={newsDetails.exchange}
              onChange={(e) => {
                setNewsDetails({
                  ...newsDetails,
                  exchange: e.target.value,
                });
              }}
              className=" add-new-stock-select mb-3"
            >
              <select className="form-select text-end">
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

          <div className="col-12 col-lg-6 mb-3">
            <Form.Group
              className="mb-3 add-new-stock-field "
              controlId="formBasicEmail"
            >
              <Form.Control
                type="number"
                placeholder={
                  userDetails
                    ? `${userDetails.firstName} ${userDetails.lastName}`
                    : "N/A"
                }
                disabled
              />
            </Form.Group>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <Form.Group
              className="mb-3 add-new-stock-field "
              controlId="formBasicEmail"
            >
              <Form.Control
                placeholder={
                  userDetails
                    ? `${userDetails.firstName} ${userDetails.lastName}`
                    : "N/A"
                }
                disabled
              />
            </Form.Group>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <FormGroup
              value={newsDetails.portfolio}
              onChange={(e) => {
                setNewsDetails({
                  ...newsDetails,
                  stock: e.target.value,
                });
              }}
              className=" add-new-stock-select mb-3"
            >
              <select className="form-select text-end">
                <option>Stock</option>
                {!!stockList && !!stockList.length ? (
                  stockList.map((stock, index) => {
                    return (
                      <option key={index} value={stock._id}>
                        {stock.portfolio.title}
                      </option>
                    );
                  })
                ) : (
                  <option>You don't have any stock </option>
                )}
              </select>
            </FormGroup>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <FormGroup
              value={newsDetails.portfolio}
              onChange={(e) => {
                setNewsDetails({
                  ...newsDetails,
                  portfolio: e.target.value,
                });
              }}
              className=" add-new-stock-select mb-3"
            >
              <select className="form-select text-end">
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
          <div className="col-12 mb-3">
            <textarea
              className="w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3"
              name=""
              id=""
              cols=""
              rows="6"
              placeholder="Description "
              onChange={(e) => {
                setNewsDetails({
                  ...newsDetails,
                  description: e.target.value,
                });
              }}
            ></textarea>
          </div>
          <div className="col-auto mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label check-box-text "
                for="flexCheckDefault"
              >
                Feature on homepage
              </label>
            </div>
          </div>
        </div>
        <div className=" ">
          <button
            className="add-btn"
            type="button"
            disabled={addStockLoading}
            onClick={() => AddNewNewsDetails()}
          >
            {addStockLoading ? <Loader /> : "Add"}
          </button>
        </div>
      </div>
    </Col>
  );
};
export default AddNewNews;
