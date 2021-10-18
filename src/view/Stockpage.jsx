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

const Stockpage = ({ match }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(null);
  const [typeData, setTypeData] = useState("yearData");
  const [relatedNewsApi, getRelatedNewsApi] = useState(false);
  const { id, tags } = match.params;

  useEffect(() => {
    if (id) {
      if (tags === "stock-tags") {
        dispatch(getNewsByStockAction(id, setLoading));
        dispatch(
          getStockChatDetailsAction(
            "615c3b7489c2d1f1df65585f",
            setLoading,
            type
          )
        );
      } else {
        const data = {
          stockId: id,
          tags: tags,
        };
        dispatch(getRelatedNewsAction(data, getRelatedNewsApi));
      }
    }
  }, [id, tags]);

  useEffect(() => {
    if (id) {
      if (tags === "stock-tags") {
        dispatch(
          getStockChatDetailsAction(
            "615c3b7489c2d1f1df65585f",
            setLoading,
            type
          )
        );
      }
    }
    if (type === "1m") {
      setTypeData("minuteData");
    } else if (type === "1min") {
      setTypeData("yearData");
    } else if (type === "1h") {
      setTypeData("hourData");
    } else if (type === "1d") {
      setTypeData("dayData");
    } else if (type === "1w") {
      setTypeData("weekData");
    }
  }, [type]);

  return (
    <div className="bg-f9f9f9">
      {tags === "stock-tags" ? (
        <NetflixChart setType={setType} typeData={typeData} />
      ) : null}
      <div className="mt-5">
        <StockArticles />
      </div>
    </div>
  );
};

export default withRouter(Stockpage);
