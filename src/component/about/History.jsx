import React from "react";
import heroImg from "../../assets/img/aboutUs-hero.png";
const History = () => {
  return (
    <>
      <div className="row justify-content-between align-items-center justify-content-between pt-5 mt-5">
        <div className="col-5">
          <img className="w-100" src={heroImg} alt="" />
        </div>

        <div className="col-6 ">
          <h1 className="section-heading">History</h1>
          <p className="stock-paragraph max-w-625 w-100">
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
