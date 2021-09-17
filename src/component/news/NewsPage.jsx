import React from "react";
import HomepageSlider from "../../assets/img/HomepageSlider.png";
import newsView from "../../assets/img/newsView.png";
const NewsPage = () => (
  <>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-8">
            {" "}
            <div className="profile-box ">
              <div className=" my-3">
                <img className="w-100" src={HomepageSlider} alt="" />

                <h6 className="text-end font-xl heading-stock">
                  Duis sed augue eu augue ornare augue ornare porta
                </h6>

                <p class="small-paragraph text-end">
                  <span>tag-1</span>,<span>tag-2</span>,<span>tag-3</span>,
                  <span>tag-4</span>,<span>tag-5</span>
                </p>
                <p className="text-end stock-paragraph mt-3">16/07/2021</p>
              </div>{" "}
              <div className="row">
                <div className="col-7">
                  {" "}
                  <p className="stock-paragraph m-0 max-w-546">
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
                <div className="col-5">
                  <img
                    className="h-100 w-100"
                    style={{ objectFit: "cover" }}
                    src={newsView}
                    alt="news Image"
                  />
                </div>
                <div className="col-12">
                  <p className="stock-paragraph mt-2">
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
                  <p className="stock-paragraph mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <p className="stock-paragraph mt-2">
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
          <div className="col-4">
            {" "}
            <h1 className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque repellat minus minima facilis, ipsa, molestiae officia
              accusamus magnam fugiat porro voluptas aspernatur laudantium iusto
              at quam perspiciatis eligendi consequatur. Debitis.
            </h1>{" "}
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
