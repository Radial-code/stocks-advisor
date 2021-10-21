import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getStockListAction } from "../../../redux/action/cmPanel/stock";
import {
  addNewNewsDetailsAction,
  DeleteNewsDetailsAction,
  updateNewsDetailsAction,
} from "../../../redux/action/news";
import { Link } from "react-router-dom";
import Loader from "../../common/Loader";
import AddNewsForm from "./AddNewsForm";
import NewsSelectTypes from "./NewsSelectTypes";

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
  portfolios: [],
};

const AddNewNews = ({ edit, match, history }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const newsDetailsList = useSelector((state) => state.userPanel.newsDetails);

  const [tags, setTags] = useState([]);
  const [atags, setATags] = useState([]);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [addStockLoading, setAddStockLoading] = useState(false);
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
      dispatch(DeleteNewsDetailsAction(id, history));
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

        <AddNewsForm
          setNewsDetails={setNewsDetails}
          newsDetails={newsDetails}
          error={error}
          setATags={setATags}
          setTags={setTags}
          tags={tags}
          atags={atags}
          loading={loading}
        />
        <NewsSelectTypes
          newsDetailsList={newsDetailsList}
          error={error}
          newsDetails={newsDetails}
        />
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
