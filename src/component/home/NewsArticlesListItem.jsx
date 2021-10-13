import React from "react";

const NewsArticlesListItem = ({ value }) => {
  return (
    <>
      <div className="pr-15">
        <div className="profile-box mt-5 hover-anim mb-3 p-0 d-flex justify-content-center flex-column">
          <img className="w-100" src={value.imagePath} alt="" />
          <div className="p-3">
            <p className="text-end stock-paragraph">
              {" "}
              <span className="d-flex justify-content-end align-items-center">
                <span className="d-flex justify-content-end px-2">
                  <img className="w-19 h-19" src={value.imagePath} alt="" />
                </span>{" "}
                <span className="cursor-pointer">16/07/2021</span>
              </span>
            </p>
            <h3 className="news-heading-font text-end Slider-Ellipse" dir="ltr">
              {value.title}
            </h3>
            <p className="stock-paragraph text-end Slider-Ellipse" dir="ltr">
              {value.description}
            </p>
            <p className="read-more text-end cursor-pointer">Read More...</p>
            <p className="small-paragraph d-none d-lg-block mb-0 cursor-pointer fw-bold">
              <span>{value.tags}</span>
            </p>
            <p className="small-paragraph text-end">
              <span className="ps-1 cursor-pointer fw-bold">Stock</span>
              <span className="cursor-pointer fw-bold">
                {value.stock.symbol}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsArticlesListItem;
