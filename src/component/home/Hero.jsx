import BubblesLoader from "../common/BubblesLoader";
import Chart from "./Chart";
import HomePageSlider from "./HomePageSlider";

const Hero = ({ loading, setRelatedLoading }) => {
  return (
    <section className="py-sm-5 py-3">
      <div className="container p-left-right">
        <div className="row  justify-content-between">
          <div className="col-xl-8 col-lg-7 ">
            <div className="profile-box p-3 homePageSlider">
              <h1 className="profile-heading  mt-3 pr-15">Featured News</h1>
              {loading ? (
                <div className="d-flex justify-content-center align-items-center">
                  <BubblesLoader />
                </div>
              ) : (
                <HomePageSlider
                  loading={loading}
                  setRelatedLoading={setRelatedLoading}
                />
              )}
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
  );
};
export default Hero;
