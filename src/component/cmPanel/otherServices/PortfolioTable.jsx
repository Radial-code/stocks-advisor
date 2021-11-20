import moment from "moment";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import Sortarrow from "../../../assets/img/sortarrow.png";
import {
  DeletePortfolioDetailsAction,
  getPortfolioListAction,
} from "../../../redux/action/cmPanel/OurServices";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import BubblesLoader from "../../common/BubblesLoader";
import NoData from "../../../assets/img/emptydata.jpg";
import Swal from "sweetalert2";

function PortfolioTable({ setShow, setEdit, setUpdateValue }) {
  const dispatach = useDispatch();
  const { layoutClickChanger } = useLayoutChangerProvider();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPortfolios, setTotalPortfolios] = useState(0);
  const portfolioList = useSelector((state) => state.cmPanel.portfolioList);

  useEffect(() => {
    dispatach(getPortfolioListAction(setLoading, page, setTotalPortfolios));
  }, [page]);

  const deletePortfolios = (id) => {
    if (id) {
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
              ? ".You want to delete This Portfolios"
              : "You want to delete This Portfolios."
          }`,
          icon: "Error",
          showCancelButton: true,
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            dispatach(DeletePortfolioDetailsAction(id));
          }
        });
    }
  };

  const editPortfolios = (value) => {
    setShow(true);
    setEdit(true);
    setUpdateValue(value);
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage);
  };
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <BubblesLoader />
        </div>
      ) : (
        <>
          {portfolioList && portfolioList.length !== 0 ? (
            <>
              <table className="table table-borderless table-hover mb-3">
                <thead className="portfolio-sticky ">
                  <tr className="current-stock-table-head table-border-bottom table-border-top">
                    <th
                      scope="col"
                      className="text-end position-sticky top-0 whitespace "
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
                      Portfolio
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
                      Edit
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
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {portfolioList && !!portfolioList.length
                    ? portfolioList.map((value, index) => {
                        return (
                          <tr
                            key={index}
                            className="current-stock-data table-border-bottom"
                          >
                            <td className="text-end whitespace Ellipse">
                              {moment(value.createdAt).format("MM/ddd")}
                            </td>
                            <td className="text-end whitespace Ellipse">
                              {layoutClickChanger
                                ? value.atitle
                                  ? value.atitle
                                  : "N/A"
                                : value.title
                                ? value.title
                                : "N/A"}
                            </td>
                            <td className="text-end whitespace Ellipse">
                              <button
                                className="px-3 py-1 edit-button "
                                onClick={() => editPortfolios(value)}
                                type="button"
                              >
                                Edit
                              </button>
                            </td>
                            <td className="text-end whitespace Ellipse">
                              <button
                                onClick={() => deletePortfolios(value._id)}
                                type="button"
                                className="px-3 py-1 delete-button"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })
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
              <h4 className="fw-bold">"You don't have any Portfolio list</h4>
            </div>
          )}
        </>
      )}
      {totalPortfolios <= 10 ? (
        ""
      ) : (
        <>
          {layoutClickChanger ? (
            <ReactPaginate
              previousLabel={"Prev"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={Math.ceil(totalPortfolios / 10)}
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
              {totalPortfolios <= 10 ? (
                ""
              ) : (
                <ReactPaginate
                  previousLabel={"Prev"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={Math.ceil(totalPortfolios / 10)}
                  marginPagesDisplayed={3}
                  pageRangeDisplayed={2}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"activePage"}
                  initialPage={page}
                />
              )}
            </div>
          )}
        </>
      )}
    </>
  );
}
export default PortfolioTable;
