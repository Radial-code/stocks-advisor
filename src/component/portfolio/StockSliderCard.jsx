import moment from "moment";
import { withRouter } from "react-router";
import CalenderIcon from "../../assets/img/calendar-icon.png";

const StockSliderCard = ({
  soldValue,
  getValueOf,
  history,
  layoutClickChanger,
}) => {
  return (
    <>
      <div className="my-3 ">
        <div className="news-slider-wrapper">
          <img
            onClick={() => history.push(`/news/details/${soldValue._id}`)}
            className="w-100 h-100 cursor-pointer"
            src={soldValue.imagePath}
            alt="newsImg"
          />
          <div className="news-wrapper-bottom-section">
            <p className="text-end stock-paragraph cursor-pointer">
              <img
                className="w-19 h-19 mx-2 d-inline-block"
                src={CalenderIcon}
                alt="CalenderIcon"
              />
              <span>{moment(soldValue.createdAt).format("DD/MMM/YY")}</span>
            </p>
            {layoutClickChanger ? (
              <h4 className="news-heading-font text-end">
                <span
                  onClick={() => history.push(`/news/details/${soldValue._id}`)}
                  className="text-ellipsis-dots cursor-pointer"
                >
                  {soldValue.atitle}
                </span>
              </h4>
            ) : (
              <h4 className="news-heading-font text-end">
                <span
                  onClick={() => history.push(`/news/details/${soldValue._id}`)}
                  className="text-ellipsis-dots cursor-pointer"
                >
                  {soldValue.title}
                </span>
              </h4>
            )}
            {layoutClickChanger ? (
              <p className="text-ellipsis-three-line stock-paragraph text-end">
                <span>{soldValue.adescription}</span>
              </p>
            ) : (
              <p className="text-ellipsis-three-line stock-paragraph text-end">
                <span>{soldValue.description}</span>
              </p>
            )}

            <p className="text-end cursor-pointer">
              <span
                className="read-more"
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
                className="text-end cursor-pointer mb-0 text-ellipsis-dots color-blue"
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
                className="text-end cursor-pointer mb-0 text-ellipsis-dots color-blue"
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
