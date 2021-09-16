import React from "react";
import Slider from "react-slick";
import NewsSlider from "../../assets/img/newsArticles_1.png";
const NewsArticles = () => {
  const settings = {
    dots: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    rtl: true,

    nextArrow: <Next />,
    prevArrow: <Prev />,
  };
  return (
    <>
      <div className="container">
        <h1 className="profile-heading ">Other News Articles</h1>

        <div className="row ">
          <div className="col-12">
            <Slider
              className="about-slider d-flex align-items-center "
              {...settings}
            >
              <div className="profile-box mt-5 hover-anim mb-3 p-0">
                <img className="w-100" src={NewsSlider} alt="" />
                <div className="p-3">
                  <p className="text-end stock-paragraph">16/07/2021</p>
                  <h3 className="news-heading-font ">
                    Duis sed augue eu augue ornare augue ornare porta
                  </h3>
                  <p className="stock-paragraph text-end">
                    Duis venenatis aliquet eros, non feugiat tortor semper sed.
                    In diam risus, efficitur sit amet dolor vitae, finibus
                    tristique arcu finibus tristique arcu
                  </p>
                  <p className="read-more text-end">Read More...</p>
                  <p class="small-paragraph text-end">
                    <span>tag-1</span>,<span>tag-2</span>,<span>tag-3</span>,
                    <span>tag-4</span>,<span>tag-5</span>
                  </p>
                </div>
              </div>
              <div className="profile-box mt-5 hover-anim mb-3 p-0">
                <img className="w-100" src={NewsSlider} alt="" />
                <div className="p-3">
                  <p className="text-end stock-paragraph">16/07/2021</p>
                  <h3 className="news-heading-font ">
                    Duis sed augue eu augue ornare augue ornare porta
                  </h3>
                  <p className="stock-paragraph text-end">
                    Duis venenatis aliquet eros, non feugiat tortor semper sed.
                    In diam risus, efficitur sit amet dolor vitae, finibus
                    tristique arcu finibus tristique arcu
                  </p>
                  <p className="read-more text-end">Read More...</p>
                  <p class="small-paragraph text-end">
                    <span>tag-1</span>,<span>tag-2</span>,<span>tag-3</span>,
                    <span>tag-4</span>,<span>tag-5</span>
                  </p>
                </div>
              </div>
              <div className="profile-box mt-5 hover-anim mb-3 p-0">
                <img className="w-100" src={NewsSlider} alt="" />
                <div className="p-3">
                  <p className="text-end stock-paragraph">16/07/2021</p>
                  <h3 className="news-heading-font ">
                    Duis sed augue eu augue ornare augue ornare porta
                  </h3>
                  <p className="stock-paragraph text-end">
                    Duis venenatis aliquet eros, non feugiat tortor semper sed.
                    In diam risus, efficitur sit amet dolor vitae, finibus
                    tristique arcu finibus tristique arcu
                  </p>
                  <p className="read-more text-end">Read More...</p>
                  <p class="small-paragraph text-end">
                    <span>tag-1</span>,<span>tag-2</span>,<span>tag-3</span>,
                    <span>tag-4</span>,<span>tag-5</span>
                  </p>
                </div>
              </div>
              <div className="profile-box mt-5 hover-anim mb-3 p-0">
                <img className="w-100" src={NewsSlider} alt="" />
                <div className="p-3">
                  <p className="text-end stock-paragraph">16/07/2021</p>
                  <h3 className="news-heading-font ">
                    Duis sed augue eu augue ornare augue ornare porta
                  </h3>
                  <p className="stock-paragraph text-end">
                    Duis venenatis aliquet eros, non feugiat tortor semper sed.
                    In diam risus, efficitur sit amet dolor vitae, finibus
                    tristique arcu finibus tristique arcu
                  </p>
                  <p className="read-more text-end">Read More...</p>
                  <p class="small-paragraph text-end">
                    <span>tag-1</span>,<span>tag-2</span>,<span>tag-3</span>,
                    <span>tag-4</span>,<span>tag-5</span>
                  </p>
                </div>
              </div>
              <div className="profile-box mt-5 hover-anim mb-3 p-0">
                <img className="w-100" src={NewsSlider} alt="" />
                <div className="p-3">
                  <p className="text-end stock-paragraph">16/07/2021</p>
                  <h3 className="news-heading-font ">
                    Duis sed augue eu augue ornare augue ornare porta
                  </h3>
                  <p className="stock-paragraph text-end">
                    Duis venenatis aliquet eros, non feugiat tortor semper sed.
                    In diam risus, efficitur sit amet dolor vitae, finibus
                    tristique arcu finibus tristique arcu
                  </p>
                  <p className="read-more text-end">Read More...</p>
                  <p class="small-paragraph text-end">
                    <span>tag-1</span>,<span>tag-2</span>,<span>tag-3</span>,
                    <span>tag-4</span>,<span>tag-5</span>
                  </p>
                </div>
              </div>
              <div className="profile-box mt-5 hover-anim mb-3 p-0">
                <img className="w-100" src={NewsSlider} alt="" />
                <div className="p-3">
                  <p className="text-end stock-paragraph">16/07/2021</p>
                  <h3 className="news-heading-font ">
                    Duis sed augue eu augue ornare augue ornare porta
                  </h3>
                  <p className="stock-paragraph text-end">
                    Duis venenatis aliquet eros, non feugiat tortor semper sed.
                    In diam risus, efficitur sit amet dolor vitae, finibus
                    tristique arcu finibus tristique arcu
                  </p>
                  <p className="read-more text-end">Read More...</p>
                  <p class="small-paragraph text-end">
                    <span>tag-1</span>,<span>tag-2</span>,<span>tag-3</span>,
                    <span>tag-4</span>,<span>tag-5</span>
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="d-flex pt-3 pb-5 justify-content-center ">
          <button className="default-btn">View All News</button>
        </div>
      </div>
    </>
  );
};

export default NewsArticles;

const Next = (props) => {
  const { className, style, onClick } = props;
  return (
    <button style={{ ...style }} onClick={onClick} className={`next`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9.681"
        height="16.533"
        viewBox="0 0 9.681 16.533"
      >
        <path
          id="Path_6"
          data-name="Path 6"
          d="M285.935,1334.071l-7.559,7.56,7.559,7.559"
          transform="translate(-276.961 -1333.363)"
          fill="none"
          stroke="#16191e"
          stroke-width="2"
          opacity="0.6"
        />
      </svg>
    </button>
  );
};
const Prev = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="prev d-flex justify-content-center align-items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9.681"
        height="16.533"
        viewBox="0 0 9.681 16.533"
      >
        <path
          id="Path_6"
          data-name="Path 6"
          d="M285.935,1334.071l-7.559,7.56,7.559,7.559"
          transform="translate(-276.961 -1333.363)"
          fill="none"
          stroke="#16191e"
          stroke-width="2"
          opacity="0.6"
        />
      </svg>
    </button>
  );
};
