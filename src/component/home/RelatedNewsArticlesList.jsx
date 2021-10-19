import CalenderIcon from "../../assets/img/calendar-icon.png";
import moment from "moment";

export const RelatedNewsArticlesList = ({ news, history }) => {
  const { imagePath, createdAt, title, description, _id, tags, stock } = news;
  return (
    <div className="my-3 ">
      <div className="news-slider-wrapper">
        <img className="w-100 h-100" src={imagePath} alt="newsImg" />
        <div className="news-wrapper-bottom-section">
          <p className="text-end stock-paragraph cursor-pointer">
            <span> {moment(createdAt).format("DD/MMM/YYYY")}</span>
            <img
              className="w-19 h-19 d-inline-block mx-2"
              src={CalenderIcon}
              alt="CalenderIcon"
            />
          </p>

          <h4 className="news-heading-font text-end">
            <span className="text-ellipsis-dots">{title ? title : "N/A"}</span>
          </h4>
          <p className="text-ellipsis-three-line stock-paragraph text-end">
            <span>{description}</span>
          </p>
          <p
            className="text-end cursor-pointer"
            onClick={() => history.push(`/news/details/${_id}`)}
          >
            {" "}
            <span className="read-more ">Read More...</span>
          </p>
          <p className="text-end cursor-pointer mb-0 text-ellipsis-dots">
            {tags}
          </p>
          <p className="small-paragraph text-end">
            <span className=" cursor-pointer fw-bold">Stock :</span>
            <span
              onClick={() =>
                history.push(`/stock/news/${stock._id}/stock-tags`)
              }
              className="cursor-pointer fw-bold"
            >
              {stock.symbol}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default RelatedNewsArticlesList;
