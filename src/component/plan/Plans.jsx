import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { getPlansListAction } from "../../redux/action/cmPanel/plans";
import BubblesLoader from "../common/BubblesLoader";
import "./Plans.css";

function Plans({ history }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const planList = useSelector((state) => state.list.planList);
  const auth = useSelector((state) => state.auth.auth);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(getPlansListAction(setLoading));
  }, []);

  return (
    <div className="container px-sm-4 px-0">
      <p className="subs-plan-text ff-popins mb-1">Subscription Plans</p>
      <span className="subs-plans-line d-block mb-4"></span>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <BubblesLoader />
        </div>
      ) : (
        <>
          {!!planList && !!planList.length ? (
            planList.map((value, index) => {
              return (
                <div className="subs-plan-scroll">
                  <div
                    key={index}
                    className="subs-border d-flex justify-content-between align-items-center p-3 my-4 "
                  >
                    <div>
                      <p className="ff-popins plan-text mb-0">
                        Plan-{index + 1}
                      </p>
                      <p className="ff-popins mb-0 plan-price-text">
                        ${value.price}
                      </p>
                    </div>
                    <div>
                      {auth && !!token ? (
                        <button
                          type="button"
                          onClick={() => history.push("/our-plan")}
                          className="ff-popins join-now ff-popins "
                        >
                          Buy now
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => history.push("/login")}
                          className="ff-popins join-now ff-popins "
                        >
                          Join Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center fw-bold">You don't have any plan list</p>
          )}
        </>
      )}
    </div>
  );
}
export default withRouter(Plans);
