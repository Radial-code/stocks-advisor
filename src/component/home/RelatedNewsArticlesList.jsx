import CalenderIcon from "../../assets/img/calendar-icon.png";
import moment from "moment";
import { useLayoutChangerProvider } from "../../redux/LayoutChangerProvider";

export const RelatedNewsArticlesList = ({ news, history }) => {
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();
  const { imagePath, createdAt, title, description, _id, tags, stock } = news;
  return (
    <div className="my-3 ">
      <div className="news-slider-wrapper">
        <img
          className="newsImg-slider cursor-pointer"
          src={imagePath}
          onClick={() => history.push(`/news/details/${_id}`)}
          alt="newsImg"
        />
        <div className="news-wrapper-bottom-section">
          <p
            className={`${
              layoutClickChanger
                ? "text-end stock-paragraph cursor-pointer"
                : "text-start stock-paragraph cursor-pointer"
            } cursor-pointer`}
          >
            <span> {moment(createdAt).format("DD/MMM/YYYY")}</span>
            <img
              className="w-19 h-19 d-inline-block mx-2"
              src={CalenderIcon}
              alt="CalenderIcon"
            />
          </p>

          <h4
            onClick={() => history.push(`/news/details/${_id}`)}
            className={`${
              layoutClickChanger
                ? "news-heading-font text-end"
                : "news-heading-font text-start"
            } cursor-pointer`}
          >
            <span className="text-ellipsis-dots">{title ? title : "N/A"}</span>
          </h4>
          <p
            onClick={() => history.push(`/news/details/${_id}`)}
            className={`${
              layoutClickChanger
                ? "text-ellipsis-three-line stock-paragraph text-end"
                : "text-ellipsis-three-line stock-paragraph text-start"
            } text-ellipsis-three-line cursor-pointer`}
          >
            <span
              className={`${
                layoutClickChanger
                  ? "text-ellipsis-three-line stock-paragraph text-end"
                  : "text-ellipsis-three-line stock-paragraph text-start"
              } cursor-pointer`}
            >
              {description ? description : "N/A"}
            </span>
          </p>
          <p
            className={`${
              layoutClickChanger
                ? "text-end cursor-pointer"
                : "text-start cursor-pointer"
            }`}
            onClick={() => history.push(`/news/details/${_id}`)}
          >
            {" "}
            <span className="read-more "> {getValueOf("Read More")}</span>
          </p>
          <p
            className={`${
              layoutClickChanger
                ? "text-end cursor-pointer mb-0 text-ellipsis-dots"
                : "text-start cursor-pointer mb-0 text-ellipsis-dots"
            } color-blue cursor`}
          >
            {tags}
          </p>
          <p
            className={`${
              layoutClickChanger
                ? "small-paragraph text-end"
                : "small-paragraph text-start"
            }`}
          >
            {stock && stock.symbol ? (
              <span className=" cursor-pointer fw-bold color-blue">
                {getValueOf("Stock")} :
              </span>
            ) : (
              ""
            )}

            <span
              onClick={() =>
                history.push(`/stock/news/${stock ? stock : tags}/stock-tags`)
              }
              className="cursor-pointer fw-bold color-blue"
            >
              {stock && stock.symbol ? stock.symbol : ""}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default RelatedNewsArticlesList;
