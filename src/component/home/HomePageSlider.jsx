import React, { useEffect } from "react";
import moment from "moment";
import Slider from "react-slick";
import img_1 from "../../assets/img/calendar-icon.png";
import { useSelector } from "react-redux";
import BubblesLoader from "../common/BubblesLoader";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { getRelatedNewsAction } from "../../redux/action/news";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";
import SearchNews from "../../assets/img/searchnews.png";

const HomePageSlider = ({ history, loading, setRelatedLoading }) => {
  const { layoutClickChanger } = useLayoutChangerProvider();
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
        <Slider className="hero-slider-2  w-100" {...settings}>
          {homeNewsList && !!homeNewsList.length ? (
            homeNewsList.slice(0, 8).map((value, index) => {
              return (
                <div key={index}>
                  <img
                    className=" slider-img d-block mx-auto"
                    src={value.imagePath}
                    alt=""
                  />
                  <p
                    className={
                      layoutClickChanger
                        ? "text-end stock-paragraph mt-3"
                        : "text-end stock-paragraph mt-3"
                    }
                  >
                    <span
                      className={` ${
                        layoutClickChanger
                          ? "d-flex align-items-center justify-content-start "
                          : "d-flex align-items-center justify-content-start"
                      }  `}
                    >
                      <span className="d-flex justify-content-end px-2">
                        <img className="w-19 h-19" src={img_1} alt="" />
                      </span>
                      <span className="cursor-pointer">
                        {moment(value.createdAt).format("ddd/MM/yyyy")}
                      </span>
                    </span>
                  </p>
                  <h6
                    className={` ${
                      layoutClickChanger
                        ? "heading-stock text-end "
                        : "heading-stock"
                    } `}
                  >
                    {layoutClickChanger ? (
                      <>{value.atitle ? value.atitle : "N/A"}</>
                    ) : (
                      <>{value.title ? value.title : "N/A"}</>
                    )}
                  </h6>
                  <p
                    className={` ${
                      layoutClickChanger
                        ? "text-end parargraph-stock pt-sm-2  ps-sm-5"
                        : "parargraph-stock pt-sm-2"
                    } `}
                  >
                    {layoutClickChanger ? (
                      <>{value.atitle ? value.adescription : "N/A"}</>
                    ) : (
                      <>{value.title ? value.description : "N/A"}</>
                    )}
                  </p>
                  <p
                    onClick={() => history.push(`/news/details/${value._id}`)}
                    className={` ${
                      layoutClickChanger
                        ? "text-end read-more cursor-pointer"
                        : "read-more cursor-pointer"
                    } `}
                  >
                    Read More...
                  </p>
                  <p
                    className={` ${
                      layoutClickChanger
                        ? "small-paragraph text-end dots-data"
                        : "small-paragraph dots-data"
                    } `}
                    onClick={() =>
                      history.push(
                        `/stock/news/${value.stock._id}/${value.tags}`
                      )
                    }
                  >
                    <span
                      className={` ${
                        layoutClickChanger
                          ? "cursor-pointer fw-bold"
                          : "cursor-pointer fw-bold"
                      } `}
                    >
                      {layoutClickChanger ? (
                        <>{value.atitle ? value.atags : "N/A"}</>
                      ) : (
                        <>{value.title ? value.tags : "N/A"}</>
                      )}
                    </span>
                  </p>
                  <p
                    className={` ${
                      layoutClickChanger
                        ? "small-paragraph text-end "
                        : "small-paragraph mb-5 "
                    } `}
                  >
                    <span
                      className="fw-bold cursor-pointer"
                      onClick={() =>
                        history.push(
                          `/stock/news/${value.stock._id}/stock-tags`
                        )
                      }
                    >
                      {value.stock && value.stock.symbol
                        ? value.stock.symbol
                        : "N/A"}
                    </span>
                    <span className="cursor-pointer fw-bold ps-1">:Stock</span>
                  </p>
                </div>
              );
            })
          ) : (
            <>
              <img
                className="searchnews mx-auto d-block"
                src={SearchNews}
                alt=""
              />
              <h4 className="text-center text-5CBD4C">
                You don't have any News
              </h4>
            </>
          )}
        </Slider>
      )}
    </>
  );
};
export default withRouter(HomePageSlider);
