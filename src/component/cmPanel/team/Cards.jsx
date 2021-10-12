import React, { useDebugValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeamMemberListAction } from "../../../redux/action/cmPanel/stock";
import "../team/teamcards.css";

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
          {teamList && teamList.length
            ? teamList.map((value, index) => {
                return (
                  <div key={index} className="col-md-4">
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
        </div>
      </div>
    </>
  );
};

export default Cards;
