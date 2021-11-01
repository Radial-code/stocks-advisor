import moment from "moment";
import CalenderIcon from "../../assets/img/calendar-icon.png";

const StockSliderCard = ({ soldValue, getValueOf }) => {
  return (
    <>
      <div className="my-3 ">
        <div className="news-slider-wrapper">
          <img
            className="w-100 h-100"
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

            <h4 className="news-heading-font text-end">
              <span className="text-ellipsis-dots">{soldValue.title}</span>
            </h4>
            <p className="text-ellipsis-three-line stock-paragraph text-end">
              <span>{soldValue.description}</span>
            </p>
            <p className="text-end cursor-pointer">
              <span className="read-more "> {getValueOf("Read More")}</span>
            </p>
            <p className="text-end cursor-pointer mb-0 text-ellipsis-dots">
              {soldValue.tags}
            </p>
            <p className="small-paragraph text-end">
              <span className=" cursor-pointer fw-bold">Stock : </span>
              <span className="cursor-pointer fw-bold">
                {soldValue &&
                  soldValue.stock &&
                  soldValue.stock.chartData &&
                  soldValue.stock.chartData.name}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default StockSliderCard;
