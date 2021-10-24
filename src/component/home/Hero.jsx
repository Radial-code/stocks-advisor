import BubblesLoader from "../common/BubblesLoader";
import Chart from "./Chart";
import HomePageSlider from "./HomePageSlider";

const Hero = ({ loading, setRelatedLoading }) => {
  return (
    <section className="pt-sm-5 pt-3 mt-100">
      <div className="container p-left-right">
        <div className="row  justify-content-between">
          <div className="col-xl-8 col-lg-7 ">
            <div className="profile-box p-3 h-100  homePageSlider">
              <h1 className="profile-heading  pr-15">Featured News</h1>
              {/* {loading ? (
                <div className="mt-5 d-flex justify-content-center align-items-center">
                  <BubblesLoader />
                </div>
              ) : ( */}
              <HomePageSlider
                loading={loading}
                setRelatedLoading={setRelatedLoading}
              />
              {/* )} */}
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 mt-5 mt-lg-0 ">
            <div className="profile-box pb-5   h-100">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
