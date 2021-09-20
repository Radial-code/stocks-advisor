import React from "react";
import Slider from "react-slick";
import HomepageSlider from "../../assets/img/HomepageSlider.png";
import img_1 from "../../assets/img/calendar-icon.png";
import Chart from "./Chart";
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
  };
  return (
    <>
      <section className="py-5">
        <div className="container p-left-right">
          <div className="row  justify-content-between">
            <div className="col-xl-8 col-lg-7 ">
              <div className="profile-box homePageSlider">
                <h1 className="profile-heading  mt-3 pr-15">Featured News</h1>

                <Slider className="hero-slider-2 w-100" {...settings}>
                  {" "}
                  <div className=" my-3">
                    <img className="w-100" src={HomepageSlider} alt="" />
                    <p className="text-end stock-paragraph mt-3">
                      <span className="d-flex justify-content-end align-items-center">
                        <span className="d-flex justify-content-end px-2">
                          <img className="w-19 h-19" src={img_1} alt="" />
                        </span>{" "}
                        <span>16/07/2021</span>
                      </span>
                    </p>
                    <h6 className="text-end heading-stock">
                      Duis sed augue eu augue ornare augue ornare porta
                    </h6>
                    <p className="text-end">
                      Duis venenatis aliquet eros, non feugiat tortor semper
                      sed. In diam risus, efficitur sit amet dolor vitae,
                      finibus tristique arcu finibus tristique arcu finibus
                      tristique arcu finibus tristique arcu. Proin dui erat,
                      pulvinar ac felis eget, mollis rhoncus nunc.
                    </p>
                    <p className="text-end read-more">Read More...</p>
                    <p class="small-paragraph text-end">
                      <span>tag-1</span>,<span>tag-2</span>,<span>tag-3</span>,
                      <span>tag-4</span>,<span>tag-5</span>
                    </p>
                  </div>{" "}
                  <div className=" my-3">
                    <img className="w-100" src={HomepageSlider} alt="" />
                    <p className="text-end stock-paragraph mt-3">
                      <span className="d-flex justify-content-end align-items-center">
                        <span className="d-flex justify-content-end px-2">
                          <img className="w-19 h-19" src={img_1} alt="" />
                        </span>{" "}
                        <span>16/07/2021</span>
                      </span>
                    </p>
                    <h6 className="text-end heading-stock">
                      Duis sed augue eu augue ornare augue ornare porta
                    </h6>
                    <p className="text-end">
                      Duis venenatis aliquet eros, non feugiat tortor semper
                      sed. In diam risus, efficitur sit amet dolor vitae,
                      finibus tristique arcu finibus tristique arcu finibus
                      tristique arcu finibus tristique arcu. Proin dui erat,
                      pulvinar ac felis eget, mollis rhoncus nunc.
                    </p>
                    <p className="text-end read-more">Read More...</p>
                    <p class="small-paragraph text-end">
                      <span>tag-1</span>,<span>tag-2</span>,<span>tag-3</span>,
                      <span>tag-4</span>,<span>tag-5</span>
                    </p>
                  </div>{" "}
                  <div className=" my-3">
                    <img className="w-100" src={HomepageSlider} alt="" />
                    <p className="text-end stock-paragraph mt-3">
                      <span className="d-flex justify-content-end align-items-center">
                        <span className="d-flex justify-content-end px-2">
                          <img className="w-19 h-19" src={img_1} alt="" />
                        </span>{" "}
                        <span>16/07/2021</span>
                      </span>
                    </p>
                    <h6 className="text-end heading-stock">
                      Duis sed augue eu augue ornare augue ornare porta
                    </h6>
                    <p className="text-end">
                      Duis venenatis aliquet eros, non feugiat tortor semper
                      sed. In diam risus, efficitur sit amet dolor vitae,
                      finibus tristique arcu finibus tristique arcu finibus
                      tristique arcu finibus tristique arcu. Proin dui erat,
                      pulvinar ac felis eget, mollis rhoncus nunc.
                    </p>
                    <p className="text-end read-more">Read More...</p>
                    <p class="small-paragraph text-end">
                      <span>tag-1</span>,<span>tag-2</span>,<span>tag-3</span>,
                      <span>tag-4</span>,<span>tag-5</span>
                    </p>
                  </div>{" "}
                  <div className=" my-3">
                    <img className="w-100" src={HomepageSlider} alt="" />
                    <p className="text-end stock-paragraph mt-3">
                      <span className="d-flex justify-content-end align-items-center">
                        <span className="d-flex justify-content-end px-2">
                          <img className="w-19 h-19" src={img_1} alt="" />
                        </span>{" "}
                        <span>16/07/2021</span>
                      </span>
                    </p>
                    <h6 className="text-end heading-stock">
                      Duis sed augue eu augue ornare augue ornare porta
                    </h6>
                    <p className="text-end">
                      Duis venenatis aliquet eros, non feugiat tortor semper
                      sed. In diam risus, efficitur sit amet dolor vitae,
                      finibus tristique arcu finibus tristique arcu finibus
                      tristique arcu finibus tristique arcu. Proin dui erat,
                      pulvinar ac felis eget, mollis rhoncus nunc.
                    </p>
                    <p className="text-end read-more">Read More...</p>
                    <p class="small-paragraph text-end">
                      <span>tag-1</span>,<span>tag-2</span>,<span>tag-3</span>,
                      <span>tag-4</span>,<span>tag-5</span>
                    </p>
                  </div>{" "}
                  <div className=" my-3">
                    <img className="w-100" src={HomepageSlider} alt="" />
                    <p className="text-end stock-paragraph mt-3">
                      <span className="d-flex justify-content-end align-items-center">
                        <span className="d-flex justify-content-end px-2">
                          <img className="w-19 h-19" src={img_1} alt="" />
                        </span>{" "}
                        <span>16/07/2021</span>
                      </span>
                    </p>
                    <h6 className="text-end heading-stock">
                      Duis sed augue eu augue ornare augue ornare porta
                    </h6>
                    <p className="text-end">
                      Duis venenatis aliquet eros, non feugiat tortor semper
                      sed. In diam risus, efficitur sit amet dolor vitae,
                      finibus tristique arcu finibus tristique arcu finibus
                      tristique arcu finibus tristique arcu. Proin dui erat,
                      pulvinar ac felis eget, mollis rhoncus nunc.
                    </p>
                    <p className="text-end read-more">Read More...</p>
                    <p class="small-paragraph text-end">
                      <span>tag-1</span>,<span>tag-2</span>,<span>tag-3</span>,
                      <span>tag-4</span>,<span>tag-5</span>
                    </p>
                  </div>{" "}
                </Slider>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 mt-5 mt-lg-0 ">
              <div className="profile-box p-2">
                <Chart />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
