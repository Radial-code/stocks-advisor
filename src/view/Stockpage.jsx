import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import StockArticles from "../component/stockPage/StockArticles";
import "../component/stockPage/stock.css";
import NetflixChart from "../component/stockPage/NetflixChart";
import { getNewsByStockAction } from "../redux/action/news";
import { withRouter } from "react-router";

const Stockpage = ({ match }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { id } = match.params;

  useEffect(() => {
    if (id) {
      dispatch(getNewsByStockAction(id, setLoading));
    }
  }, [id]);

  return (
    <div className="bg-f9f9f9">
      <NetflixChart />
      <div className="mt-5">
        <StockArticles />
      </div>
    </div>
  );
};

export default withRouter(Stockpage);
