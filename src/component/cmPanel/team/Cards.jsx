import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeamMemberListAction } from "../../../redux/action/cmPanel/stock";
import "../team/teamcards.css";
import NoData from "../../../assets/img/emptydata.jpg";
const Cards = () => {
  const dispatch = useDispatch();
  const teamList = useSelector((state) => state.list.teamList);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getTeamMemberListAction(setLoading));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {teamList === "" ? (
            <>
              {teamList && teamList.length
                ? teamList.map((value, index) => {
                    return (
                      <div key={index} className="col-xl-4 col-md-6">
                        <div className="team-cards p-sm-3 p-1 my-3">
                          <img
                            className="d-block mx-auto cards-image"
                            src={value.profileImagePath}
                            alt="bani-sindhu"
                          />
                          <p className="text-center team-title pt-3 mb-0">
                            {value.name}
                          </p>
                          <p className="text-center team-dec">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    );
                  })
                : null}
            </>
          ) : (
            <div className="d-flex text-center flex-column">
              <img
                className="nodata-img d-inline-block mx-auto"
                src={NoData}
                alt="NoData"
              />
              <p className="fw-bold">You don't have any data</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Cards;
