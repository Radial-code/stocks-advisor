import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeamMemberListAction } from "../../../redux/action/cmPanel/stock";
import "../team/teamcards.css";
import NoData from "../../../assets/img/emptydata.jpg";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";

const Cards = () => {
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();
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
          {teamList && teamList.length !== 0 ? (
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
                          {layoutClickChanger ? (
                            <p className="text-center  team-dec" dir="ltr">
                              {value.description}
                            </p>
                          ) : (
                            <p className="text-center  team-dec">
                              {value.description}
                            </p>
                          )}
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
              <h4 className="fw-bold">You don't have any Team</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Cards;
