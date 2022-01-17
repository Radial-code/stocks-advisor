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
import { getStockChatDetailsAction } from "../redux/action/cmPanel/stock";
import { useLayoutChangerProvider } from "../redux/LayoutChangerProvider";

const Stockpage = ({ match }) => {
  const { getValueOf } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("1y");
  const [relatedNewsLoader, getRelatedNewsLoader] = useState(false);
  const { id, tags } = match.params;

  useEffect(() => {
    if (id) {
      if (tags === "stock-tags") {
        dispatch(getNewsByStockAction(id, setLoading));
        dispatch(getStockChatDetailsAction(id, setLoading, type));
      } else {
        const data = {
          stockId: id,
          tags: tags,
        };
        dispatch(getRelatedNewsAction(data, getRelatedNewsLoader));
      }
    }
  }, [id, tags, dispatch, type]);

  useEffect(() => {
    if (id) {
      if (tags === "stock-tags") {
        dispatch(getStockChatDetailsAction(id, setLoading, type));
      }
    }
  }, [type]);

  return (
    <div className="bg-f9f9f9 mt-100">
      {tags === "stock-tags" ? (
        <NetflixChart setType={setType} type={type} />
      ) : null}
      <div className="mt-5">
        <StockArticles
          loading={loading}
          getValueOf={getValueOf}
          relatedNewsLoader={relatedNewsLoader}
        />
      </div>
    </div>
  );
};
export default withRouter(Stockpage);
