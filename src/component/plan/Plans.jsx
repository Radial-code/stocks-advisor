import React from "react";
import "./Plans.css";
function Plans() {
  return (
    <div className="container">
      <p className="subs-plan-text ff-popins mb-1">Subscription Plans</p>
      <span className="subs-plans-line d-block mb-4"></span>
      <div className="subs-border d-flex justify-content-between align-items-center p-3">
        <div>
          <p className="ff-popins plan-text mb-0">Plan-1</p>
          <p className="ff-popins mb-0 plan-price-text">$299.99</p>
        </div>
        <div>
          <button className="ff-popins join-now ff-popins ">
            Join Now
          </button>
        </div>
      </div>
      <div className="subs-border d-flex justify-content-between align-items-center p-3 my-3">
        <div>
          <p className="ff-popins plan-text mb-0">Plan-1</p>
          <p className="ff-popins mb-0 plan-price-text">$299.99</p>
        </div>
        <div>
          <button className="ff-popins join-now ff-popins ">
            Join Now
          </button>
        </div>
      </div>
      <div className="subs-border d-flex justify-content-between align-items-center p-3">
        <div>
          <p className="ff-popins plan-text mb-0">Plan-1</p>
          <p className="ff-popins mb-0 plan-price-text">$299.99</p>
        </div>
        <div>
          <button className="ff-popins join-now ff-popins ">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plans;
