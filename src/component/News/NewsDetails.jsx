import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { getNewsDetailsAction } from "../../redux/action/news";
import NewsDetailsPage from "./NewsDetailsPage";
import Chart from "../home/Chart";
import RelatedArticles from "./RelatedArticles";
import Plans from "../plan/Plans";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

const NewsDetails = ({ match }) => {
  const { getValueOf } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const { id } = match.params;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getNewsDetailsAction(id, setLoading));
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section>
        <div className="container py-4 p-left-right mt-100">
          <div className="row d-flex justify-content-center">
            <NewsDetailsPage loading={loading} />
            <div className="col-xl-4  col-lg-10   mt-5 mt-lg-0 ">
              <div className="profile-box py-4">
                <Chart getValueOf={getValueOf} />
                <div className="mt-5">
                  <Plans getValueOf={getValueOf} />
                </div>
              </div>
            </div>
            <div className="col-12">
              <RelatedArticles />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container"></div>
      </section>
    </>
  );
};
export default withRouter(NewsDetails);
