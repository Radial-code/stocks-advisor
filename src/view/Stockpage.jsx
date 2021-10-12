import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import StockArticles from "../component/stockPage/StockArticles";
import "../component/stockPage/stock.css";
import NetflixChart from "../component/stockPage/NetflixChart";
import {
  getNewsByStockAction,
  getRelatedNewsAction,
} from "../redux/action/news";
import { withRouter } from "react-router";

const Stockpage = ({ match }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [relatedNewsApi, getRelatedNewsApi] = useState(false);
  const { id, tags } = match.params;

  useEffect(() => {
    if (id) {
      if (tags === "stock-tags") {
        dispatch(getNewsByStockAction(id, setLoading));
      } else {
        const data = {
          stockId: id,
          tags: tags,
        };
        dispatch(getRelatedNewsAction(data, getRelatedNewsApi));
      }
    }
  }, [id, tags]);

  return (
    <div className="bg-f9f9f9">
      {tags === "stock-tags" ? <NetflixChart /> : null}
      <div className="mt-5">
        <StockArticles />
      </div>
    </div>
  );
};

export default withRouter(Stockpage);
