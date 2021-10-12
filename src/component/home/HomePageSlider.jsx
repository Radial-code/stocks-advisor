import React, { useEffect } from "react";
import moment from "moment";
import Slider from "react-slick";
import img_1 from "../../assets/img/calendar-icon.png";
import { useSelector } from "react-redux";
import BubblesLoader from "../common/BubblesLoader";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { getRelatedNewsAction } from "../../redux/action/news";

const HomePageSlider = ({ history, loading, setRelatedLoading }) => {
  const dispatch = useDispatch();
  const homeNewsList = useSelector((state) => state.cmPanel.homeNewsList);
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
  };

  useEffect(() => {
    const data = {
      stockId: "615c3b7489c2d1f1df65585f",
      tags: "tag1",
    };
    dispatch(getRelatedNewsAction(data, setRelatedLoading));
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <BubblesLoader />
        </div>
      ) : (
        <Slider className="hero-slider-2 w-100" {...settings}>
          {homeNewsList && !!homeNewsList.length ? (
            homeNewsList.map((value, index) => {
              return (
                <div key={index}>
                  <img
                    className="w-100 slider-img"
                    src={value.imagePath}
                    alt=""
                  />
                  <p className="text-end stock-paragraph mt-3">
                    <span className="d-flex justify-content-end align-items-center">
                      <span className="d-flex justify-content-end px-2">
                        <img className="w-19 h-19" src={img_1} alt="" />
                      </span>
                      <span className="cursor-pointer">
                        {moment(value.createdAt).format("ddd/MM/yyyy")}
                      </span>
                    </span>
                  </p>
                  <h6 className="text-end heading-stock">
                    {value.title ? value.title : "N/A"}
                  </h6>
                  <p className="text-end parargraph-stock pt-sm-2  ps-sm-5">
                    {value.description}
                  </p>
                  <p className="text-end read-more cursor-pointer">
                    Read More...
                  </p>
                  <p
                    className="small-paragraph text-end"
                    onClick={() =>
                      history.push(
                        `/stock/news/${value.stock._id}/${value.tags}`
                      )
                    }
                  >
                    <span className="cursor-pointer fw-bold">{value.tags}</span>
                  </p>
                  <p className="small-paragraph text-end">
                    <span
                      className="fw-bold cursor-pointer"
                      onClick={() =>
                        history.push(
                          `/stock/news/${value.stock._id}/stock-tags`
                        )
                      }
                    >
                      {value.stock.symbol}
                    </span>
                    <span className="cursor-pointer fw-bold pe-1"> Stock</span>
                  </p>
                </div>
              );
            })
          ) : (
            <BubblesLoader />
          )}
        </Slider>
      )}
    </>
  );
};
export default withRouter(HomePageSlider);
