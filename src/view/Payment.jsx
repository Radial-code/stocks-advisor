import React from "react";

const Payment = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="profile-box">
                <h1>Selected Subscription Plan</h1>
                <div className="d-flex justify-content-between">
                  <span>Plan-1</span>
                  <span>$299.99</span>
                </div>
                <div className="divider"></div>
                <span>:Description </span>
                <p>
                  Duis venenatis aliquot, Eros, non feugiat Tortor semper sed.
                  In diam risus, efficitur Sit amet dolor vitae Finibus
                  tristique Arcu finibus tristique Duis venenatis aliquot, Eros,
                  non feugiat Tortor semper sed.
                </p>
              </div>
            </div>
            <div className="col-6">
              {" "}
              <div className="profile-box">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt accusantium quidem, officia architecto at neque est,
                facere ratione placeat labore assumenda minima iusto possimus?
                Dolore recusandae quidem cum dolor molestias.
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
