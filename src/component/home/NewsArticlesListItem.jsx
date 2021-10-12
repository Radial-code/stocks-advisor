import React from "react";
import NewsSlider from "../../assets/img/newsArticles_1.png";
import img_1 from "../../assets/img/calendar-icon.png";

const NewsArticlesListItem = ({ value }) => {
  return (
    <>
      <div className="d-flex justify-content-center d-md-block pr-15">
        <div className="profile-box mt-5 hover-anim mb-3 p-0 d-flex justify-content-center flex-column">
          <img className="w-100" src={NewsSlider} alt="" />
          <div className="p-3">
            <p className="text-end stock-paragraph">
              {" "}
              <span className="d-flex justify-content-end align-items-center">
                <span className="d-flex justify-content-end px-2">
                  <img className="w-19 h-19" src={img_1} alt="" />
                </span>{" "}
                <span className="cursor-pointer">16/07/2021</span>
              </span>
            </p>
            <h3 className="news-heading-font text-end">
              Duis sed augue eu augue ornare augue ornare porta
            </h3>
            <p className="stock-paragraph text-end">
              Duis venenatis aliquet eros, non feugiat tortor semper sed. In
              diam risus, efficitur sit amet dolor vitae, finibus tristique arcu
              finibus tristique arcu
            </p>
            <p className="read-more text-end cursor-pointer">Read More...</p>
            <p class="small-paragraph text-end">
              <span>tag-1</span>,<span>tag-2</span>,<span>tag-3</span>,
              <span>tag-4</span>,<span>tag-5</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsArticlesListItem;
