import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import heroImg from "../../assets/img/aboutUs-hero.png";
import Team from "../../assets/img/team_1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Home = () => {
  const settings = {
    dots: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-between align-items-center justify-content-between">
          <div className="col-6">
            <h2 className="stock-heading">
              Quisque maximus, orci at{" "}
              <span className="text-5CBD4C">pharetra </span> feugiat de
            </h2>
            <button className="default-btn mt-4">Know More</button>
          </div>
          <div className="col-6">
            <img className="w-100" src={heroImg} alt="" />
          </div>
        </div>
      </div>
      <section className="bg-f9f9f9 py-5">
        <div className="container">
          <div className="row justify-content-between align-items-center justify-content-between pt-5 mt-5">
            <div className="col-7">
              <h1 className="section-heading ">About Us</h1>
              <p className="stock-paragraph max-w-665 w-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </div>

            <div className="col-5">
              <img className="w-100" src={heroImg} alt="" />
            </div>
          </div>
          <div className="row justify-content-between align-items-center justify-content-between pt-5 mt-5">
            <div className="col-5">
              <img className="w-100" src={heroImg} alt="" />
            </div>

            <div className="col-6 ">
              <h1 className="section-heading">History</h1>
              <p className="stock-paragraph max-w-625 w-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </div>
          </div>
          <h1 className="mt-5 section-heading">Team</h1>
          <Slider className="about-slider" {...settings}>
            <div className="  profile-box">
              <div className="d-flex justify-content-end   align-items-center ">
                <img className="w-126 order-2" src={Team} alt="" />{" "}
                <div className="me-3 d-flex order-1  flex-column">
                  <h4 className="profile-heading">Jhone Doe</h4>
                  <p className="profile-heading font-xs text-end">Manager</p>
                </div>
              </div>
              <p className="stock-paragraph text-end   mt-3">
                Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu
                enim. Praesent mauris diam, sollicitudin id rutrum ut, sagittis
                eu enim. Praesent mauris diam, sollicitudin id rutrum ut,
                sagittis eu enim.
              </p>
            </div>
            <div className="  profile-box">
              <div className="d-flex justify-content-end   align-items-center ">
                <img className="w-126 order-2" src={Team} alt="" />{" "}
                <div className="me-3 d-flex order-1  flex-column">
                  <h4 className="profile-heading">Jhone Doe</h4>
                  <p className="profile-heading font-xs text-end">Manager</p>
                </div>
              </div>
              <p className="stock-paragraph text-end   mt-3">
                Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu
                enim. Praesent mauris diam, sollicitudin id rutrum ut, sagittis
                eu enim. Praesent mauris diam, sollicitudin id rutrum ut,
                sagittis eu enim.
              </p>
            </div>
            <div className="  profile-box">
              <div className="d-flex justify-content-end   align-items-center ">
                <img className="w-126 order-2" src={Team} alt="" />{" "}
                <div className="me-3 d-flex order-1  flex-column">
                  <h4 className="profile-heading">Jhone Doe</h4>
                  <p className="profile-heading font-xs text-end">Manager</p>
                </div>
              </div>
              <p className="stock-paragraph text-end   mt-3">
                Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu
                enim. Praesent mauris diam, sollicitudin id rutrum ut, sagittis
                eu enim. Praesent mauris diam, sollicitudin id rutrum ut,
                sagittis eu enim.
              </p>
            </div>
            <div className="  profile-box">
              <div className="d-flex justify-content-end   align-items-center ">
                <img className="w-126 order-2" src={Team} alt="" />{" "}
                <div className="me-3 d-flex order-1  flex-column">
                  <h4 className="profile-heading">Jhone Doe</h4>
                  <p className="profile-heading font-xs text-end">Manager</p>
                </div>
              </div>
              <p className="stock-paragraph text-end   mt-3">
                Praesent mauris diam, sollicitudin id rutrum ut, sagittis eu
                enim. Praesent mauris diam, sollicitudin id rutrum ut, sagittis
                eu enim. Praesent mauris diam, sollicitudin id rutrum ut,
                sagittis eu enim.
              </p>
            </div>
          </Slider>
          <h2>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            voluptatibus doloremque necessitatibus, ut commodi nisi maxime autem
            harum velit libero ratione delectus, minus est totam! Possimus amet
            sit cumque distinctio?{" "}
          </h2>
        </div>
      </section>
    </>
  );
};

export default Home;
