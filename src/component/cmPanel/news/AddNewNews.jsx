import ReactTagInput from "@pathofdev/react-tag-input";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import { Col, Form, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteStockDetailsAction,
  getStockListAction,
} from "../../../redux/action/cmPanel/stock";
import {
  addNewNewsDetailsAction,
  updateNewsDetailsAction,
} from "../../../redux/action/news";
import { Link } from "react-router-dom";
import Loader from "../../common/Loader";
import { uploadImageAction } from "../../../redux/uploadImage";

const initialState = {
  title: "",
  atitle: "",
  description: "",
  adescription: "",
  showOnHomePage: false,
  stock: "",
  tags: "",
  atags: "",
  media: "",
  link: "",
};

const AddNewNews = ({ edit, match, history }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const { layoutClickChanger } = useLayoutChangerProvider();

  const stockList = useSelector((state) => state.cmPanel.stockList);
  const userDetails = useSelector((state) => state.auth.userData);
  const uploadImageUrl = useSelector((state) => state.list.uploadImageUrl);
  const newsDetailsList = useSelector((state) => state.userPanel.newsDetails);

  const [tags, setTags] = useState([]);
  const [atags, setATags] = useState([]);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [error, setError] = useState(false);
  const [addStockLoading, setAddStockLoading] = useState(false);
  const [input, setInput] = useState("");
  const [newsDetails, setNewsDetails] = useState(initialState);

  useEffect(() => {
    if (newsDetailsList) {
      setNewsDetails(newsDetailsList);
    }
  }, [newsDetailsList]);

  useEffect(() => {
    dispatch(getStockListAction(setLoading));
  }, []);

  const AddNewNewsDetails = () => {
    setError(true);
    tags.map((item) => {
      newsDetails.tags += `${item},`;
    });
    atags.map((item) => {
      newsDetails.atags += `${item},`;
    });
    if (
      newsDetails.title !== "" &&
      newsDetails.description !== "" &&
      newsDetails.stock !== "" &&
      newsDetails.tags !== "" &&
      newsDetails.atitle !== "" &&
      newsDetails.adescription !== "" &&
      newsDetails.atags !== ""
    ) {
      dispatch(
        addNewNewsDetailsAction(newsDetails, setAddStockLoading, setNewsDetails)
      );
      setError(false);
      setNewsDetails({
        title: "",
        atitle: "",
        description: "",
        adescription: "",
        showOnHomePage: false,
        stock: "",
        tags: "",
        atags: "",
      });
    }
  };

  const deleteNews = () => {
    if (!!id) {
      dispatch(DeleteStockDetailsAction(id, history));
    }
  };

  const updateNewsDetails = () => {
    if (!!id) {
      tags.map((item) => {
        newsDetails.tags += `${item},`;
      });
      atags.map((item) => {
        newsDetails.atags += `${item},`;
      });
      if (
        newsDetails.title !== "" &&
        newsDetails.description !== "" &&
        newsDetails.stock !== "" &&
        newsDetails.tags !== ""
      ) {
        dispatch(
          updateNewsDetailsAction(id, newsDetails, setUpdateLoading, history)
        );
      }
    }
  };

  return (
    <Col xs={12}>
      <div className="manger-panel-shadow p-sm-5 w-xl-1000 ">
        <div className="mb-4 d-flex flex-sm-row flex-column justify-content-sm-between align-items-center">
          <p className="heading-stock d-none d-sm-block fs-sm-20">
            {edit ? "Update News" : "Add New News"}
          </p>
          <p className="heading-stock d-block d-sm-none">Add News</p>
          <Link to="/content/manager/news">
            <button className="update-btn-2">Back</button>
          </Link>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6 mb-3">
            <Form.Group
              className="mb-3 add-new-stock-field "
              controlId="formBasicEmail"
            >
              <Form.Control
                type="text"
                placeholder="Arabic Title"
                value={newsDetails.atitle}
                onChange={(e) => {
                  setNewsDetails({
                    ...newsDetails,
                    atitle: e.target.value,
                  });
                }}
              />
              <span className="text-danger">
                {error && newsDetails.atitle === ""
                  ? "Arabic Title is required"
                  : null}
              </span>
            </Form.Group>
          </div>
          <div className="col-12 col-lg-6 mb-3" dir="ltr">
            <Form.Group
              className="mb-3 add-new-stock-field "
              controlId="formBasicEmail"
            >
              <Form.Control
                type="text"
                placeholder="English Title"
                value={newsDetails.title}
                onChange={(e) => {
                  setNewsDetails({
                    ...newsDetails,
                    title: e.target.value,
                  });
                }}
              />
              <span className="text-danger">
                {error && newsDetails.title === "" ? "Title is required" : null}
              </span>
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
          </div>{" "}
          <div className="col-12 col-lg-6 mb-3">
            <div className="col-md-6 input-tag w-100">
              <ReactTagInput
                tags={atags}
                placeholder="Arabic Tags"
                maxTags={5}
                value={newsDetails.atags}
                editable={true}
                readOnly={false}
                removeOnBackspace={true}
                onChange={(newTags) => setATags(newTags)}
              />
              <span className="text-danger">
                {error && tags.length < 0 ? "Arabic Details is required" : null}
              </span>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-3" dir="ltr">
            <div className="col-md-6 input-tag w-100">
              <ReactTagInput
                tags={tags}
                placeholder="English Tags"
                maxTags={5}
                editable={true}
                readOnly={false}
                value={newsDetails.tags}
                removeOnBackspace={true}
                onChange={(newTags) => setTags(newTags)}
              />
              <span className="text-danger">
                {error && tags.length < 0 ? "Details is required" : null}
              </span>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-3 ">
            <Form.Group
              className="mb-3 add-new-stock-field upload-field position-relative "
              controlId="formBasicEmail"
            >
              <Form.Control
                onChange={(e) => {
                  setNewsDetails({
                    ...newsDetails,
                    link: e.target.value,
                  });
                }}
                value={newsDetails.link}
                type="text"
                placeholder="YouTube / Image Link "
              />

              <input
                onChange={(e) => setInput(e.target.value)}
                type="file"
                id="my-file"
                onChange={(e) =>
                  dispatch(uploadImageAction(e, setLoadingImage, "news"))
                }
                hidden
              />
              <button className="upload-img-btn d-none d-sm-block cursor-pointer ">
                {loadingImage ? (
                  <Loader />
                ) : (
                  <label className="cursor-pointer" for="my-file">
                    {uploadImageUrl ? "Image Uploaded" : "Upload Image"}
                  </label>
                )}
              </button>
              <button className="upload-img-btn d-block d-sm-none cursor-pointer">
                <label className="cursor-pointer" for="my-file">
                  {uploadImageUrl ? "Image Uploaded" : "Upload Image"}
                </label>
              </button>
            </Form.Group>
            <span className="text-danger">
              {error && uploadImageUrl === "" ? "Media link is required" : null}
            </span>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            {layoutClickChanger ? (
              <FormGroup
                onChange={(e) => {
                  setNewsDetails({
                    ...newsDetails,
                    stock: e.target.value,
                  });
                }}
                value={
                  newsDetails && newsDetails.stock && newsDetails.stock._id
                }
                // value={newsDetails.stock}
                className=" add-new-stock-select mb-3"
              >
                <select className="form-select text-end cursor-pointer">
                  <option>Stock</option>
                  {stockList ? (
                    stockList.map((stock, index) => {
                      return (
                        <option key={index} value={stock._id}>
                          {stock && stock.portfolio && stock.portfolio.title
                            ? stock.portfolio.title
                            : "N/A"}
                        </option>
                      );
                    })
                  ) : (
                    <option>You don't have any stock </option>
                  )}
                </select>
                <span className="text-danger">
                  {error && newsDetails.stock === ""
                    ? "Stock is required"
                    : null}
                </span>
              </FormGroup>
            ) : (
              <FormGroup
                onChange={(e) => {
                  setNewsDetails({
                    ...newsDetails,
                    stock: e.target.value,
                  });
                }}
                value={
                  newsDetails && newsDetails.stock && newsDetails.stock._id
                }
                className=" add-new-stock-select2 mb-3"
              >
                <select
                  className={`${
                    layoutClickChanger
                      ? "form-select text-end cursor-pointer"
                      : "form-select text-start cursor-pointer"
                  }`}
                >
                  <option>Stock</option>
                  {stockList ? (
                    stockList.map((stock, index) => {
                      return (
                        <option key={index} value={stock._id}>
                          {stock && stock.name ? stock.name : "N/A"}
                        </option>
                      );
                    })
                  ) : (
                    <option>You don't have any stock </option>
                  )}
                </select>
                <span className="text-danger">
                  {error && newsDetails.stock === ""
                    ? "Stock is required"
                    : null}
                </span>
              </FormGroup>
            )}
          </div>
          <div className="col-12 mb-3">
            <textarea
              className={`${
                layoutClickChanger
                  ? "w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3 text-end"
                  : "w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3 text-start"
              }`}
              name=""
              id=""
              cols=""
              rows="6"
              placeholder="Arabic Description "
              onChange={(e) => {
                setNewsDetails({
                  ...newsDetails,
                  adescription: e.target.value,
                });
              }}
              value={newsDetails.adescription}
            ></textarea>
            <span className="text-danger">
              {error && newsDetails.adescription === ""
                ? "Arabic Description is required"
                : null}
            </span>
          </div>
          <div className="col-12 mb-3" dir="ltr">
            <textarea
              className={`${
                layoutClickChanger
                  ? "w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3 text-start"
                  : "w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3 text-end"
              }`}
              name=""
              id=""
              cols=""
              rows="6"
              placeholder="English Description "
              onChange={(e) => {
                setNewsDetails({
                  ...newsDetails,
                  description: e.target.value,
                });
              }}
              value={newsDetails.description}
            ></textarea>
            <span className="text-danger">
              {error && newsDetails.description === ""
                ? "Description is required"
                : null}
            </span>
          </div>
          <div className="col-auto mb-3">
            {layoutClickChanger ? (
              <>
                {" "}
                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  Feature on homepage
                </label>
                <input
                  type="checkbox"
                  className="cursor-pointer mx-2"
                  onChange={(e) => {
                    setNewsDetails({
                      ...newsDetails,
                      showOnHomePage: e.target.checked,
                    });
                  }}
                />
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={newsDetails.showOnHomePage}
                  className="cursor-pointer mx-2"
                  onChange={(e) => {
                    setNewsDetails({
                      ...newsDetails,
                      showOnHomePage: e.target.checked,
                    });
                  }}
                />
                <label
                  className="form-check-label check-box-text cursor-pointer"
                  for="flexCheckDefault"
                >
                  Feature on homepage
                </label>
              </>
            )}
          </div>
        </div>
        <div className=" ">
          {edit ? (
            <>
              <button
                className="add-btn"
                type="button"
                disabled={addStockLoading}
                onClick={() => updateNewsDetails()}
              >
                {updateLoading ? <Loader /> : "Update"}
              </button>
              <button
                className="add-btn m-2"
                type="button"
                disabled={addStockLoading}
                onClick={() => deleteNews()}
              >
                {"Delete"}
              </button>
            </>
          ) : (
            <button
              className="add-btn"
              type="button"
              disabled={addStockLoading}
              onClick={() => AddNewNewsDetails()}
            >
              {addStockLoading ? <Loader /> : "Add"}
            </button>
          )}
        </div>
      </div>
    </Col>
  );
};
export default withRouter(AddNewNews);
