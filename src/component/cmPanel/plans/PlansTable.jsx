import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import Sortarrow from "../../../assets/img/sortarrow.png";
import {
  deletePlansDetailsAction,
  getPlansListAction,
} from "../../../redux/action/cmPanel/plans";
import BubblesLoader from "../../common/BubblesLoader";

function PlansTable({ history }) {
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
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <BubblesLoader />
        </div>
      ) : (
        <table className="table table-borderless table-hover mb-3">
          <thead className="portfolio-sticky ">
            <tr className="current-stock-table-head table-border-bottom table-border-top">
              <th
                scope="col"
                className="text-end position-sticky top-0 whitespace"
              >
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Date{" "}
              </th>

              <th
                scope="col"
                className="text-end position-sticky top-0 whitespace"
              >
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Title
              </th>
              <th
                scope="col"
                className="text-end position-sticky top-0 whitespace"
              >
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Price
              </th>
              <th
                scope="col"
                className="text-end position-sticky top-0 whitespace"
              >
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Type
              </th>
              <th
                scope="col"
                className="text-end position-sticky top-0 whitespace"
              >
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Update
              </th>

              <th
                scope="col"
                className="text-end position-sticky top-0 whitespace"
              >
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
                      <td className="text-end whitespace Ellipse">
                        {moment(value.createdAt).format("MM/ddd")}
                      </td>
                      <td className="text-end whitespace Ellipse" dir="ltr">
                        {value.title}
                      </td>

                      <td className="text-end whitespace Ellipse">
                        ${value.price}
                      </td>
                      <td className="text-end whitespace Ellipse">
                        {value.type}
                      </td>
                      <td className="text-end whitespace Ellipse">
                        <button
                          className="px-3 py-1 edit-button"
                          onClick={() =>
                            history.push(
                              `/content/manager/edit/plan/${value._id}`
                            )
                          }
                        >
                          Edit
                        </button>
                      </td>
                      <td className="text-end whitespace Ellipse">
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
export default withRouter(PlansTable);
