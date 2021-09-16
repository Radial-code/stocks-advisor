import React from "react";
import Slider from "react-slick";
import HomepageSlider from "../../assets/img/HomepageSlider.png";
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
        <div className="container">
          <div className="row  justify-content-between">
            <div className="col-8">
              <h1 className="profile-heading ">Featured News</h1>
              <div className="profile-box homePageSlider">
                <Slider className="about-slider w-100" {...settings}>
                  {" "}
                  <div className=" my-3">
                    <img className="w-100" src={HomepageSlider} alt="" />
                    <p className="text-end stock-paragraph mt-3">16/07/2021</p>
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
                    <p className="text-end stock-paragraph mt-3">16/07/2021</p>
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
                  </div>
                  <div className=" my-3">
                    <img className="w-100" src={HomepageSlider} alt="" />
                    <p className="text-end stock-paragraph mt-3">16/07/2021</p>
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
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-4">
              <div className="profile-box">
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque fugit officiis deleniti odit laboriosam, vitae, ex
                  adipisci esse a eos, facilis exercitationem quos harum minima
                  quaerat aliquid quasi suscipit velit? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Itaque fugit officiis
                  deleniti odit laboriosam, vitae, ex adipisci esse a eos,
                  facilis exercitationem quos harum minima quaerat aliquid quasi
                  suscipit velit? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Itaque fugit officiis deleniti odit
                  laboriosam, vitae, ex adipisci esse a eos, facilis
                  exercitationem quos harum minima quaerat aliquid quasi
                  suscipit velit? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Itaque fugit officiis deleniti odit
                  laboriosam, vitae, ex adipisci esse a eos, facilis
                  exercitationem quos harum minima quaerat aliquid quasi
                  suscipit velit? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Itaque fugit officiis deleniti odit
                  laboriosam, vitae, ex adipisci esse a eos, facilis
                  exercitationem quos harum minima quaerat aliquid quasi
                  suscipit velit? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Itaque fugit officiis deleniti odit
                  laboriosam, vitae, ex adipisci esse a eos, facilis
                  exercitationem quos harum minima quaerat aliquid quasi
                  suscipit velit? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Itaque fugit officiis deleniti odit
                  laboriosam, vitae, ex adipisci esse a eos, facilis
                  exercitationem quos harum minima quaerat aliquid quasi
                  suscipit velit? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Itaque fugit officiis deleniti odit
                  laboriosam, vitae, ex adipisci esse a eos, facilis
                  exercitationem quos harum minima quaerat aliquid quasi
                  suscipit velit?
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
