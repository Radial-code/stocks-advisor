import React from "react";
import BusinessImg from "../../assets/img/chashmalady.png";

const History = () => {
  return (
    <>
      <div className="row justify-content-between align-items-center justify-content-between pt-sm-5 mt-5">
        <div className="col-lg-5 order-lg-1 order-2 ">
          <img className="w-100" src={BusinessImg} alt="" />
        </div>

        <div className="col-lg-6 order-lg-2 order-1 ">
          <h1 className="section-heading fs-sm-22">History</h1>
          <p className="stock-paragraph max-w-625 w-100 mb-3 mb-lg-0 dots-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
};

export default History;
