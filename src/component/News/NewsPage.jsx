import React from "react";
import HomepageSlider from "../../assets/img/HomepageSlider.png";
import newsView from "../../assets/img/newsView.png";
import Chart from "../home/Chart";
import RelatedArticles from "./RelatedArticles";
import Plans from "../plan/Plans";
const NewsPage = () => (
  <>
    <section>
      <div className="container py-4">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-8  col-lg-10 d-flex justify-content-center d-sm-block">
            {" "}
            <div className="profile-box-2 w-xs-303">
              <div className=" my-3">
                <img className="w-100 h-xs-171" src={HomepageSlider} alt="" />

                <h6 className="text-end section-heading mt-4 fs-sm-18">
                  Duis sed augue eu augue ornare augue ornare porta
                </h6>

                <p className="small-paragraph text-end mt-3 fs-sm-11">
                  <span>tag-1</span>,<span>tag-2</span>,<span>tag-3</span>,
                  <span>tag-4</span>,<span>tag-5</span>
                </p>
                <p className="text-end stock-paragraph mt-4 fs-sm-13">
                  16/07/2021
                </p>
              </div>{" "}
              <div className="row">
                <div className="col-xl-6 col-xxl-7">
                  {" "}
                  <p className="stock-paragraph m-0 max-w-546 fs-sm-14">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum. Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum.
                  </p>
                </div>

                <div className="col-xl-6 col-xxl-5 mt-5 mt-xl-0">
                  <img
                    className=" w-100"
                    style={{ objectFit: "cover" }}
                    src={newsView}
                    alt="news Image"
                  />
                </div>

                <div className="col-12 mt-5 mt-xl-0">
                  <p className="stock-paragraph mt-2 fs-sm-14">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p className="stock-paragraph mt-2 fs-sm-14">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <p className="stock-paragraph mt-2 fs-sm-14">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4  col-lg-10   mt-5 mt-lg-0 d-flex justify-content-center d-sm-block">
            <div className="profile-box">
              <Chart />
              <div className="mt-5">
                <Plans />
              </div>
            </div>
          </div>
          <div className="col-12">
            <RelatedArticles />
          </div>
        </div>
      </div>
    </section>
    <section className="py-5">
      <div className="container"></div>
    </section>
  </>
);

export default NewsPage;
