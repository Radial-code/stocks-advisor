import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import Cards from "./Cards";

const TeamCards = () => {
  const { getValueOf } = useLayoutChangerProvider();
  return (
    <div className="container">
      <div className="row">
        <Col className="d-flex justify-content-lg-end">
          <section className="user-panel-card w-xl-1000 p-4  pt-5">
            <div className="d-flex justify-content-sm-between align-items-center flex-sm-row flex-column">
              <p className="heading-stock fs-sm-20 fs-sm-20">
                {getValueOf("Team")}
              </p>
              <div>
                <Link to="/content/manager/team/form" className="add-new-btn">
                  <button className="update-btn">
                    {getValueOf("Add Members")}
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-calc-100vh-380 scroll-bar overflow-auto mt-5">
              <Cards />
            </div>
          </section>
        </Col>
      </div>
    </div>
  );
};
export default TeamCards;
