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
import NoImage from "../../assets/img/no-image.png";
import SearchNews from "../../assets/img/searchnews.png";

const HomePageSlider = ({ history, loading, setRelatedLoading }) => {
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();
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
  }, [getRelatedNewsAction]);

  const contentHandler = (value) => {
    return {
      __html: value,
    };
  };

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
                  {value.imagePath === "" ? (
                    // <img
                    //   onClick={() => history.push(`/news/details/${value._id}`)}
                    //   className=" slider-img d-block mx-auto cursor-pointer"
                    //   src={NoImage}
                    //   alt="NoImage"
                    // />
                    ""
                  ) : (
                    <img
                      onClick={() => history.push(`/news/details/${value._id}`)}
                      className=" slider-img d-block mx-auto cursor-pointer"
                      src={value.imagePath}
                      alt=""
                    />
                  )}
                  {/* <img
                    onClick={() => history.push(`/news/details/${value._id}`)}
                    className=" slider-img d-block mx-auto cursor-pointer"
                    src={value.imagePath}
                    alt=""
                  /> */}
                  <p
                    className={
                      layoutClickChanger
                        ? "text-start stock-paragraph mt-3"
                        : "text-end stock-paragraph mt-3"
                    }
                  >
                    <span
                      className={` ${
                        layoutClickChanger
                          ? " justify-content-end"
                          : " justify-content-start"
                      }  d-flex align-items-center`}
                    >
                      <span
                        className={`${
                          layoutClickChanger ? "pe-2" : ""
                        } d-flex justify-content-end pe-2`}
                      >
                        <img className="w-19 h-19" src={img_1} alt="" />
                      </span>
                      <span className="cursor-pointer">
                        {moment(value.createdAt).format("ddd/MM/yyyy")}
                      </span>
                    </span>
                  </p>
                  <h6
                    onClick={() => history.push(`/news/details/${value._id}`)}
                    className={` ${
                      layoutClickChanger
                        ? "heading-stock text-end "
                        : "heading-stock"
                    }  cursor-pointer`}
                  >
                    {layoutClickChanger ? (
                      <>{value.atitle ? value.atitle : "N/A"}</>
                    ) : (
                      <>{value.title ? value.title : "N/A"}</>
                    )}
                  </h6>
                  <p
                    onClick={() => history.push(`/news/details/${value._id}`)}
                    className={` ${
                      layoutClickChanger
                        ? "text-end parargraph-stock pt-sm-2  ps-sm-5 "
                        : "parargraph-stock pt-sm-2"
                    } cursor-pointer`}
                  >
                    {layoutClickChanger ? (
                      value.pdescription ? (
                        value.pdescription
                      ) : (
                        <p
                          dangerouslySetInnerHTML={
                            !!value && !!value.adescription
                              ? contentHandler(value.adescription)
                              : "N/A"
                          }
                        />
                      )
                    ) : value.pdescription ? (
                      value.pdescription
                    ) : (
                      <p
                        dangerouslySetInnerHTML={
                          !!value && !!value.description
                            ? contentHandler(value.description)
                            : "N/A"
                        }
                      />
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
                    {getValueOf("Read More")}
                  </p>
                  <p
                    className={` ${
                      layoutClickChanger
                        ? "small-paragraph text-end dots-data w-100"
                        : "small-paragraph dots-data w-100"
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
                          ? "cursor-pointer fw-bold color-blue"
                          : "cursor-pointer fw-bold color-blue"
                      } `}
                    >
                      {layoutClickChanger ? (
                        <>{value.atitle ? value.atags : ""}</>
                      ) : (
                        <>{value.title ? value.tags : ""}</>
                      )}
                    </span>
                  </p>
                  {layoutClickChanger ? (
                    <>
                      {" "}
                      <p
                        className={` ${
                          layoutClickChanger
                            ? "small-paragraph text-end mb-5 "
                            : "small-paragraph mb-5 "
                        } `}
                      >
                        <span
                          className="fw-bold cursor-pointer color-blue"
                          onClick={() =>
                            history.push(
                              `/stock/news/${value.stock._id}/stock-tags`
                            )
                          }
                        >
                          {value.stock && value.stock.symbol
                            ? value.stock.symbol
                            : ""}
                        </span>
                        {value.stock && value.stock.symbol ? (
                          <span className="cursor-pointer fw-bold ps-1">
                            :{getValueOf("Stock")}
                          </span>
                        ) : (
                          ""
                        )}
                      </p>
                    </>
                  ) : (
                    <>
                      {" "}
                      <p
                        className={` ${
                          layoutClickChanger
                            ? "small-paragraph text-end "
                            : "small-paragraph mb-5 "
                        } `}
                      >
                        {value.stock && value.stock.symbol ? (
                          <span className="cursor-pointer fw-bold pe-1 color-blue">
                            {getValueOf("Stock")}:
                          </span>
                        ) : (
                          ""
                        )}

                        <span
                          className="fw-bold cursor-pointer color-blue"
                          onClick={() =>
                            history.push(
                              `/stock/news/${value.stock._id}/stock-tags`
                            )
                          }
                        >
                          {value.stock && value.stock.symbol
                            ? value.stock.symbol
                            : ""}
                        </span>
                      </p>
                    </>
                  )}
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
                {getValueOf("You don't have any News")}
              </h4>
            </>
          )}
        </Slider>
      )}
    </>
  );
};
export default withRouter(HomePageSlider);
