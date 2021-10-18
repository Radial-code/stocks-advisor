import UserImg from "../../assets/img/team_1.png";
import CalenderIcon from "../../assets/img/calendar-icon.png";

export const SoldStockSlider = ({ soldValue }) => {
  return (
    <>
      <div className="my-3 ">
        <div className="news-slider-wrapper">
          <img className="w-100 h-100" src={UserImg} alt="newsImg" />
          <div className="news-wrapper-bottom-section">
            <p className="text-end stock-paragraph cursor-pointer">
              <img
                className="w-19 h-19 mx-2 d-inline-block"
                src={CalenderIcon}
                alt="CalenderIcon"
              />
              <span>16/02/2021</span>
            </p>

            <h4 className="news-heading-font text-end">
              <span className=" ">Is Netflix basic plan good</span>
            </h4>
            <p className=" stock-paragraph text-end">
              <span>
                Is Netflix basic plan good? If you won't use Netflix much, or
                want to subscribe in tandem with some other streaming services,
                the Basic plan is a sensible bet to save some cash. But if
                you're sharing with{" "}
              </span>
            </p>
            <p className="text-end cursor-pointer">
              {" "}
              <span className="read-more ">Read More...</span>
            </p>
            <p className="text-end cursor-pointer mb-0 text-ellipsis-dots">
              tags1, tags2
            </p>
            <p className="small-paragraph text-end">
              <span className=" cursor-pointer fw-bold">Stock :</span>
              <span className="cursor-pointer fw-bold">plan, load</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
