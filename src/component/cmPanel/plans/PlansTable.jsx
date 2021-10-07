import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sortarrow from "../../../assets/img/sortarrow.png";
import {
  deletePlansDetailsAction,
  getPlansListAction,
} from "../../../redux/action/cmPanel/plans";
import BubblesLoader from "../../common/BubblesLoader";
import Loader from "../../common/Loader";

function PlansTable() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeletedLoading] = useState(false);
  const planList = useSelector((state) => state.list.planList);

  useEffect(() => {
    dispatch(getPlansListAction(setLoading));
  }, []);

  const deletePlans = (id) => {
    dispatch(deletePlansDetailsAction(id, setDeletedLoading));
  };

  return (
    <>
      {loading ? (
        <BubblesLoader />
      ) : (
        <table className="table table-borderless table-hover mb-3">
          <thead className="portfolio-sticky ">
            <tr className="current-stock-table-head table-border-bottom table-border-top">
              <th scope="col" className="text-center position-sticky top-0 ">
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Date{" "}
              </th>

              <th scope="col" className="text-center position-sticky top-0 ">
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Title
              </th>
              <th scope="col" className="text-center position-sticky top-0 ">
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Price
              </th>
              <th scope="col" className="text-center position-sticky top-0 ">
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Type
              </th>
              <th scope="col" className="text-center position-sticky top-0 ">
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Update
              </th>

              <th scope="col" className="text-center position-sticky top-0 ">
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {!!planList && !!planList.length
              ? planList.map((value, index) => {
                  return (
                    <tr
                      key={index}
                      className="current-stock-data table-border-bottom"
                    >
                      <td className="text-center ">
                        {moment(value.createdAt).format("MM/ddd")}
                      </td>
                      <td className="text-center">{value.title}</td>

                      <td className="text-center">{value.price}</td>
                      <td className="text-center">${value.type}</td>
                      <td className="text-center">
                        <button className="px-3 py-1 edit-button ">Edit</button>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          disabled={deleteLoading}
                          onClick={() => deletePlans(value._id)}
                          className="px-3 py-1 delete-button"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              : "You don't have any plan"}
          </tbody>
        </table>
      )}
    </>
  );
}

export default PlansTable;
