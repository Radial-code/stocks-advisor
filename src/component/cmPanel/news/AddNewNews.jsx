import ReactTagInput from "@pathofdev/react-tag-input";
import React, { useEffect, useState } from "react";
import { Col, Form, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getStockListAction } from "../../../redux/action/cmPanel/stock";
import { addNewNewsDetailsAction } from "../../../redux/action/news";
import { Link } from "react-router-dom";
import Loader from "../../common/Loader";
import { uploadImageAction } from "../../../redux/uploadImage";

const AddNewNews = () => {
  const dispatch = useDispatch();
  const stockList = useSelector((state) => state.cmPanel.stockList);
  const userDetails = useSelector((state) => state.auth.userData);
  const uploadImageUrl = useSelector((state) => state.list.uploadImageUrl);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [error, setError] = useState(false);
  const [addStockLoading, setAddStockLoading] = useState(false);
  const [input, setInput] = useState("");
  const [newsDetails, setNewsDetails] = useState({
    title: "",
    description: "",
    showOnHomePage: false,
    stock: "",
    tags: "",
    media: uploadImageUrl,
  });

  useEffect(() => {
    dispatch(getStockListAction(setLoading));
  }, []);

  const AddNewNewsDetails = () => {
    setError(true);
    tags.map((item) => {
      newsDetails.tags += `${item},`;
    });
    if (
      newsDetails.title !== "" &&
      newsDetails.description !== "" &&
      newsDetails.stock !== "" &&
      newsDetails.tags !== "" &&
      newsDetails.media
    ) {
      dispatch(
        addNewNewsDetailsAction(newsDetails, setAddStockLoading, setNewsDetails)
      );
      setError(false);
      setNewsDetails({
        title: "",
        description: "",
        stock: "",
        tags: "",
      });
    }
  };

  return (
    <Col xs={12}>
      <div className="manger-panel-shadow p-sm-5 w-xl-1000 mt-5">
        <div className="mb-4 d-flex flex-sm-row flex-column justify-content-sm-between align-items-center">
          <p className="heading-stock d-none d-sm-block fs-sm-20">
            Add New News
          </p>
          <p className="heading-stock d-block d-sm-none">Add News</p>
          <Link to="/content/manager/news">
            <button className="update-btn-2 ">Back</button>
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
          <div className="col-12 col-lg-6 mb-3" dir="ltr">
            <Form.Group
              className="mb-3 add-new-stock-field "
              controlId="formBasicEmail"
            >
              <Form.Control
                type="text"
                placeholder="English Title"
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
                tags={tags}
                placeholder="Arabic Details"
                maxTags={5}
                editable={true}
                readOnly={false}
                removeOnBackspace={true}
                onChange={(newTags) => setTags(newTags)}
              />
              {console.log("tags", tags.length)}
              <span className="text-danger">
                {error && tags.length < 0 ? "Details is required" : null}
              </span>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-3" dir="ltr">
            <div className="col-md-6 input-tag w-100">
              <ReactTagInput
                tags={tags}
                placeholder="English Details"
                maxTags={5}
                editable={true}
                readOnly={false}
                removeOnBackspace={true}
                onChange={(newTags) => setTags(newTags)}
              />
              {console.log("tags", tags.length)}
              <span className="text-danger">
                {error && tags.length < 0 ? "Details is required" : null}
              </span>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-3 ">
            <Form.Group
              className="mb-3 add-new-stock-field position-relative "
              controlId="formBasicEmail"
            >
              <Form.Control type="text" placeholder="YouTube / Image Link" />

              <input
                onChange={(e) => setInput(e.target.value)}
                type="file"
                value={uploadImageUrl ? uploadImageUrl : null}
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
                    Upload Image
                  </label>
                )}
              </button>
              <button className="upload-img-btn d-block d-sm-none cursor-pointer">
                <label className="cursor-pointer" for="my-file">
                  Upload
                </label>
              </button>
            </Form.Group>
            {/* <div className="inputs-border   d-flex justify-content-between align-items-center py-2 ps-1 pe_12">
              {input !== "" ? (
                <span className="small-paragraph d-none d-sm-block Ellipse">
                  {input}
                </span>
              ) : (
                <span className="small-paragraph d-none d-sm-block">
                  YouTube / Image Link
                </span>
              )}
              {input !== "" ? (
                <span className="small-paragraph d-block d-sm-none ">
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
                value={uploadImageUrl ? uploadImageUrl : null}
                id="my-file"
                onChange={(e) =>
                  dispatch(uploadImageAction(e, setLoadingImage, "news"))
                }
                hidden
              />

              <button className="upload-img-btn d-none d-sm-block cursor-pointer">
                {loadingImage ? (
                  <Loader />
                ) : (
                  <label className="cursor-pointer" for="my-file">
                    Upload Image
                  </label>
                )}
              </button>
              <button className="upload-img-btn d-block d-sm-none cursor-pointer">
                <label className="cursor-pointer" for="my-file">
                  Upload
                </label>
              </button>
            </div> */}
            <span className="text-danger">
              {error && uploadImageUrl === "" ? "Media link is required" : null}
            </span>
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
              <select className="form-select text-end cursor-pointer">
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
              <span className="text-danger">
                {error && newsDetails.stock === "" ? "Stock is required" : null}
              </span>
            </FormGroup>
          </div>
          <div className="col-12 mb-3">
            <textarea
              className="w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3"
              name=""
              id=""
              cols=""
              rows="6"
              placeholder="Arabic Description "
              onChange={(e) => {
                setNewsDetails({
                  ...newsDetails,
                  description: e.target.value,
                });
              }}
            ></textarea>
            <span className="text-danger">
              {error && newsDetails.description === ""
                ? "Description is required"
                : null}
            </span>
          </div>
          <div className="col-12 mb-3" dir="ltr">
            <textarea
              className="w-100 inputs-border p_16_20 textarea-rsize small-paragraph pt-3 pe-3"
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
            ></textarea>
            <span className="text-danger">
              {error && newsDetails.description === ""
                ? "Description is required"
                : null}
            </span>
          </div>
          <div className="col-auto mb-3">
            <div className="form-check cursor-pointer">
              <input
                className="form-check-input cursor-pointer"
                type="checkbox"
                id="flexCheckDefault"
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
