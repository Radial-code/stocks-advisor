import React, { useState } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import Cancel from "../../assets/img/cancel.png";
import { Back } from "../common/icons/Icons";

const PortfoliosSidebar = ({ history }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const dashboardPortfoliosList = useSelector(
    (state) => state.list.dashboardPortfoliosList
  );
  const openRoutes = (value) => {
    setShowSidebar(false);
    if (value._id) {
      history.push(`/protfolios/stock/${value._id}`);
    }
  };

  return (
    <div className="row flex-column  justify-content-between mx-lg-2">
      <div
        className={`${showSidebar ? "cn-overlay" : ""}`}
        onClick={() => openRoutes()}
      ></div>
      <div className="col">
        <div
          className={`${showSidebar ? "right-0" : "right-350"} 
          }  bg-white content-manager-sidebar shadow px-3 pt-4`}
        >
          <div className="d-flex align-items-center justify-content-between mb-2">
            <p className="cn-sidebar-text mb-0">Portfolios</p>

            <img
              className="cancel-icon cursor-pointer"
              onClick={() => openRoutes()}
              src={Cancel}
              alt=""
            />
          </div>
          <div className="cn-sidebar-border"></div>
          {dashboardPortfoliosList && dashboardPortfoliosList.length
            ? dashboardPortfoliosList.map((value) => {
                return (
                  <div
                    className="cn-sidebar-active-tag align-items-center d-flex  my-4 whitespace"
                    onClick={() => openRoutes(value._id)}
                  >
                    <p className="cn-sidebar-texts px-sm-3 px-2 mb-0">
                      {value.title}
                    </p>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <div className="col">
        <div className=" px-lg-4 pt-4 d-lg-none d-flex flex-column mb-5">
          <div className="d-flex align-items-center mb-3 justify-content-between">
            <p className="cn-sidebar-text text-end mb-0">Portfolios</p>
            <span
              className="cursor-pointer"
              onClick={() => setShowSidebar(true)}
            >
              <Back />
            </span>
          </div>
          <div className="cn-sidebar-border"></div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(PortfoliosSidebar);
