import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import PortfolioStock from "./PortfolioStock";
import PortfoliosSidebar from "./PortfoliosSidebar";
import { useDispatch } from "react-redux";
import {
  getCurrentPortfolioListForDashBoardAction,
  getSoldPortfolioListForDashBoardAction,
} from "../../redux/action/portfolio";
import StockSoldSlider from "./StockSoldSlider";

const Portfolio = ({ match }) => {
  const dispatch = useDispatch();
  const [sidebarActive, setSidebarActive] = useState(false);
  const [soldLoading, setSoldLoading] = useState(false);
  const [portfoliosId, setPortfoliosId] = useState(null);
  const [loading, setLoading] = useState(false);
  const sideBarHandler = () => setSidebarActive(!sidebarActive);
  const { id } = match.params;

  useEffect(() => {
    if (id) {
      dispatch(getCurrentPortfolioListForDashBoardAction(id, setLoading));
      dispatch(getSoldPortfolioListForDashBoardAction(id, setLoading));
    }
  }, [id]);

  return (
    <>
      <div className="container my-5">
        <div className="d-flex justify-content-between flex-lg-row flex-column">
          <PortfoliosSidebar
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
            setPortfoliosId={setPortfoliosId}
          />
          <PortfolioStock
            sideBarHandler={sideBarHandler}
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
            loading={loading}
            setSoldLoading={setSoldLoading}
          />
        </div>
        <div className="my-4">
          <h1 className="profile-heading pe-3 pt-2">Related News</h1>
          <StockSoldSlider />
        </div>
      </div>
    </>
  );
};

export default withRouter(Portfolio);
