import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import PortfolioStock from "./PortfolioStock";
import PortfoliosSidebar from "./PortfoliosSidebar";
import { useDispatch } from "react-redux";
import {
  getCurrentPortfolioListForDashBoardAction,
  getSoldPortfolioListForDashBoardAction,
} from "../../redux/action/portfolio";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

const Portfolio = ({ match }) => {
  const { getValueOf } = useLayoutChangerProvider();
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
  }, [id, dispatch]);

  return (
    <>
      <div className="container my-5 ">
        <div className="d-flex justify-content-between flex-lg-row flex-column  mt-100">
          <PortfoliosSidebar
            getValueOf={getValueOf}
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
            setPortfoliosId={setPortfoliosId}
            portfoliosId={portfoliosId}
          />
          <PortfolioStock
            getValueOf={getValueOf}
            sideBarHandler={sideBarHandler}
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
            loading={loading}
            setSoldLoading={setSoldLoading}
            soldLoading={soldLoading}
          />
        </div>
      </div>
    </>
  );
};

export default withRouter(Portfolio);
