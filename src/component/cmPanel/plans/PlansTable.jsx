import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import {
  getPlansListAction,
  updatePlansDetailsAction,
} from "../../../redux/action/cmPanel/plans";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import BubblesLoader from "../../common/BubblesLoader";
import ReactPaginate from "react-paginate";
import NoData from "../../../assets/img/emptydata.jpg";
import Swal from "sweetalert2";

function PlansTable({ history }) {
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeletedLoading] = useState(false);
  const planList = useSelector((state) => state.list.planList);
  const [page, setPage] = useState(0);
  const [planListCount, setPlanListCount] = useState(0);

  // WE PASS LOADING STATE FOR LOADING , PAGE FOR INCREASE PAGE COUNT FOR API CALL AND SETPLANLISTCOUNT FOR GET TOTAL NUMBER OF PLANS IN DATA BASE
  useEffect(() => {
    const limit = 10;
    dispatch(getPlansListAction(setLoading, page, limit, setPlanListCount));
  }, [page, dispatch]);

  const deletePlans = (id, isActive) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-success",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: `${layoutClickChanger ? "? Are You Sure" : "Are You Sure ?"}`,
        text: `${
          layoutClickChanger
            ? !isActive
              ? ".You want to Enable This Plan"
              : ".You want to Disable This Plan"
            : !isActive
            ? "You want to Enable This Plan."
            : "You want to Disable This Plan."
        }`,

        icon: "Error",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          let planDetails = {};
          if (!isActive) {
            planDetails = {
              isActive: true,
            };
          } else {
            planDetails = {
              isActive: false,
            };
          }
          dispatch(
            updatePlansDetailsAction(
              planDetails,
              id,
              setDeletedLoading,
              history,
              "action"
            )
          );
        }
      });
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage);
  };
  return (
    <>
      {loading ? (
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <BubblesLoader />
        </div>
      ) : (
        <>
          {planList && planList.length !== 0 ? (
            <>
              <table className="table table-borderless table-hover mb-3">
                <thead className="portfolio-sticky ">
                  <tr className="current-stock-table-head table-border-bottom table-border-top">
                    <th
                      scope="col"
                      className="text-end position-sticky top-0 whitespace"
                    >
                      {/* <span>
                        <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        />
                      </span> */}
                      Date
                    </th>

                    <th
                      scope="col"
                      className="text-end position-sticky top-0 whitespace"
                    >
                      {/* <span>
                        <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        />
                      </span> */}
                      Title
                    </th>
                    <th
                      scope="col"
                      className="text-end position-sticky top-0 whitespace"
                    >
                      {/* <span>
                        <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        />
                      </span> */}
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-end position-sticky top-0 whitespace"
                    >
                      {/* <span>
                        <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        />
                      </span> */}
                      Type
                    </th>
                    <th
                      scope="col"
                      className="text-end position-sticky top-0 whitespace"
                    >
                      {/* <span>
                        <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        />
                      </span> */}
                      Update
                    </th>

                    <th
                      scope="col"
                      className="text-end position-sticky top-0 whitespace"
                    >
                      {/* <span>
                        <img
                          className="ps-1"
                          src={Sortarrow}
                          alt="sort arrow"
                        />
                      </span> */}
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {planList && planList.length
                    ? planList.map((obj, index) => (
                        <PlansTableListItem
                          key={index}
                          value={obj}
                          history={history}
                          deletePlans={deletePlans}
                          deleteLoading={deleteLoading}
                          getValueOf={getValueOf}
                        />
                      ))
                    : ""}
                </tbody>
              </table>
            </>
          ) : (
            <div className="d-flex text-center flex-column">
              <img
                className="nodata-img d-inline-block mx-auto"
                src={NoData}
                alt="NoData"
              />
              <h4 className="fw-bold">You don't have any Plan List</h4>
            </div>
          )}
        </>
      )}

      {planList && planList.length !== 0 ? (
        <>
          {planListCount && planListCount <= 10 ? (
            ""
          ) : (
            <>
              {layoutClickChanger ? (
                <ReactPaginate
                  previousLabel={"Prev"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={Math.ceil(planListCount / 10)}
                  marginPagesDisplayed={3}
                  pageRangeDisplayed={2}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"activePage"}
                  initialPage={page}
                />
              ) : (
                <div className="react-pagination">
                  <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={Math.ceil(planListCount / 10)}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"activePage"}
                    initialPage={page}
                  />
                </div>
              )}
            </>
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
}
export default withRouter(PlansTable);

export function PlansTableListItem({
  value,
  history,
  deletePlans,
  deleteLoading,
  getValueOf,
}) {
  return (
    <>
      <tr className="current-stock-data table-border-bottom">
        <td className="text-end whitespace Ellipse">
          {moment(value.createdAt).format("DD/MM/YY")}
        </td>
        <td className="text-end whitespace Ellipse" dir="ltr">
          {value.title}
        </td>

        <td className="text-end whitespace Ellipse">${value.price}</td>
        <td className="text-end whitespace Ellipse">{value.type}</td>
        <td className="text-end whitespace Ellipse">
          <button
            className="px-3 py-1 edit-button"
            onClick={() =>
              history.push(`/content/manager/edit/plan/${value._id}`)
            }
          >
            Edit
          </button>
        </td>
        <td className="text-end whitespace Ellipse">
          <button
            type="button"
            disabled={deleteLoading}
            onClick={() => deletePlans(value._id, value.isActive)}
            className="px-3 py-1 delete-button"
          >
            {!value.isActive ? "Enable" : "Disable"}
          </button>
        </td>
      </tr>
    </>
  );
}
