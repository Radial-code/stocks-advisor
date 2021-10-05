import React from "react";
import LogoPhoto from "../../assets/img/Navbar-logo-img.png";

const OtpInputs = () => {
  return (
    <div className="container">
      <form>
        <div className="row height-100vh  justify-content-center align-items-center ">
          <div className="col-12  col-xl-6 col-md-10 otp-box p-3 mt-5 mb-5">
            <div className="row">
              <div className="col justify-content-center d-flex mt-5">
                <img src={LogoPhoto} style={{ width: "40%" }} />
              </div>
            </div>
            <div className="row mt-5 justify-content-center ">
              <div className="col-12 col-md-9 col-xl-10  otp-inputs mb-3 pt-5">
                <label for="exampleInputEmail1" class="form-label">
                  Enter your otp
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="  Enter your otp"
                />

                {/* <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your otp"
                /> */}
              </div>
            </div>
            <div className="d-flex  flex-column flex-sm-row justify-content-center pb-4 mt-3 mb-4">
              <div className="mx-sm-2">
                <button
                  type="button"
                  className="verify-otp px-3  mt-3 verify-otp w-100"
                >
                  Verify OTP
                </button>
              </div>
              <div className="">
                <button type="button" className="resend-otp px-3  mt-3  w-100">
                  Resend OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OtpInputs;
