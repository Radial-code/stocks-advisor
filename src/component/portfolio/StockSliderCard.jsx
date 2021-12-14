import moment from "moment";
import { withRouter } from "react-router";
import CalenderIcon from "../../assets/img/calendar-icon.png";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

const StockSliderCard = ({ soldValue, getValueOf, history }) => {
  const contentHandler = (value) => {
    return {
      __html: value,
    };
  };
  const { layoutClickChanger } = useLayoutChangerProvider();
  return (
    <>
      <div className="m-3">
        <div className="news-slider-wrapper-related  col-4 w-img-75">
          <img
            onClick={() => history.push(`/news/details/${soldValue._id}`)}
            // className="w-100 h-100 cursor-pointer"
            className="slider-img mt-3"
            src={soldValue.imagePath}
            alt="newsImg"
          />
          <div className="news-wrapper-bottom-section">
            <p
              className={`${
                layoutClickChanger ? "text-end" : "text-start"
              }  stock-paragraph cursor-pointer`}
            >
              <img
                className="w-19 h-19 mx-2 d-inline-block"
                src={CalenderIcon}
                alt="CalenderIcon"
              />
              <span>{moment(soldValue.createdAt).format("DD/MMM/YY")}</span>
            </p>
            {layoutClickChanger ? (
              <h4
                className={`${
                  layoutClickChanger ? "text-end" : "text-start"
                } news-heading-font `}
              >
                <span
                  onClick={() => history.push(`/news/details/${soldValue._id}`)}
                  className="text-ellipsis-dots cursor-pointer"
                >
                  {soldValue.atitle}
                </span>
              </h4>
            ) : (
              <h4
                className={`${
                  layoutClickChanger ? "text-end" : "text-start"
                } news-heading-font `}
              >
                <span
                  onClick={() => history.push(`/news/details/${soldValue._id}`)}
                  className="text-ellipsis-dots cursor-pointer"
                >
                  {soldValue.title}
                </span>
              </h4>
            )}
            {layoutClickChanger ? (
              soldValue && soldValue.padescription ? (
                <p className="text-clamp-two-lines">
                  {soldValue.padescription}
                </p>
              ) : (
                <p
                  dangerouslySetInnerHTML={
                    !!soldValue && !!soldValue.adescription
                      ? contentHandler(soldValue.adescription)
                      : "N/A"
                  }
                />
              )
            ) : soldValue && soldValue.pdescription ? (
              <p className="text-clamp-two-lines">{soldValue.pdescription}</p>
            ) : (
              <p
                dangerouslySetInnerHTML={
                  !!soldValue && !!soldValue.description
                    ? contentHandler(soldValue.description)
                    : "N/A"
                }
              />
            )}

            <p className={`${layoutClickChanger ? "text-end" : "text-start"}`}>
              <span
                className="read-more cursor-pointer"
                onClick={() => history.push(`/news/details/${soldValue._id}`)}
              >
                {" "}
                {getValueOf("Read More")}
              </span>
            </p>
            {layoutClickChanger ? (
              <p
                onClick={() =>
                  history.push(
                    `/stock/news/${
                      soldValue &&
                      soldValue.stock &&
                      soldValue.stock._id &&
                      soldValue.stock._id
                    }/stock-tags`
                  )
                }
                className={`${
                  layoutClickChanger ? " text-end" : " text-start"
                } cursor-pointer mb-0 text-ellipsis-dots color-blue`}
              >
                {soldValue.atags}
              </p>
            ) : (
              <p
                onClick={() =>
                  history.push(
                    `/stock/news/${
                      soldValue &&
                      soldValue.stock &&
                      soldValue.stock._id &&
                      soldValue.stock._id
                    }/stock-tags`
                  )
                }
                className={`${
                  layoutClickChanger ? " text-end " : " text-start"
                } cursor-pointer mb-0 text-ellipsis-dots color-blue`}
              >
                {soldValue.tags}
              </p>
            )}

            {soldValue && soldValue.stock && soldValue.stock.chartData ? (
              <p className="small-paragraph text-end">
                <span className=" cursor-pointer fw-bold">
                  {getValueOf("Stock")} :
                </span>
                <span className="cursor-pointer fw-bold color-blue">
                  {soldValue &&
                    soldValue.stock &&
                    soldValue.stock.chartData &&
                    soldValue.stock.chartData.name}
                </span>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default withRouter(StockSliderCard);
