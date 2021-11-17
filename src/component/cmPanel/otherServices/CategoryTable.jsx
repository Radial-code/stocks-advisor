import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sortarrow from "../../../assets/img/sortarrow.png";
import {
  deleteCategoryAction,
  getCategoryListAction,
} from "../../../redux/action/cmPanel/OurServices";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import BubblesLoader from "../../common/BubblesLoader";
import ReactPaginate from "react-paginate";
import CategoryTableListItem from "./CategoryTableListItem";
import NoData from "../../../assets/img/emptydata.jpg";
import Swal from "sweetalert2";

function CategoryTable({ setShow, setEdit, setUpdateValue }) {
  const dispatach = useDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalCategory, setTotalCategory] = useState(0);
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();

  const categoryList = useSelector((state) => state.cmPanel.categoryList);

  // USEFFECT AGAIN RUN WHEN PAGE VALUE IS CHANGE
  useEffect(() => {
    dispatach(getCategoryListAction(setLoading, page, setTotalCategory));
  }, [page]);

  const deleteCategory = (id) => {
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
          title: `${
            layoutClickChanger
              ? `${getValueOf("? Are You Sure")}`
              : `${getValueOf("Are You Sure ?")}`
          }`,
          text: `${
            layoutClickChanger
              ? `${getValueOf(".You want to delete This Category")}`
              : `${getValueOf("You want to delete This Category.")}`
          }`,
          icon: "Error",
          showCancelButton: true,
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            dispatach(deleteCategoryAction(id));
          }
        });
    }
  };

  const editCategory = (value) => {
    setShow(true);
    setEdit(true);
    setUpdateValue(value);
  };

  // FOR CHANGE PAGE NUMBER TO MAKE AP CALL
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
      ) : categoryList && categoryList.length !== 0 ? (
        <>
          <table className="table table-borderless table-hover mb-3">
            <thead className="portfolio-sticky ">
              <tr className="current-stock-table-head table-border-bottom table-border-top">
                <th
                  scope="col"
                  className="text-end  position-sticky top-0  whitespace "
                >
                  <span>
                    {/* <img className="ps-1" src={Sortarrow} alt="sort arrow" /> */}
                  </span>
                  Date
                </th>

                <th
                  scope="col"
                  className="text-end  position-sticky top-0  whitespace"
                >
                  <span>
                    {/* <img className="ps-1" src={Sortarrow} alt="sort arrow" /> */}
                  </span>
                  Category
                </th>

                <th
                  scope="col"
                  className="text-end  position-sticky top-0  whitespace"
                >
                  <span>
                    {/* <img className="ps-1" src={Sortarrow} alt="sort arrow" /> */}
                  </span>
                  Edit
                </th>
                <th
                  scope="col"
                  className="text-end  position-sticky top-0  whitespace"
                >
                  <span>
                    {/* <img className="ps-1" src={Sortarrow} alt="sort arrow" /> */}
                  </span>
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {categoryList && !!categoryList.length
                ? categoryList.map((obj, index) => (
                    <CategoryTableListItem
                      key={index}
                      value={obj}
                      getValueOf={getValueOf}
                      editCategory={editCategory}
                      deleteCategory={deleteCategory}
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
          <h4 className="fw-bold">You don't have any Category list</h4>
        </div>
      )}

      {totalCategory <= 10 ? (
        ""
      ) : (
        <>
          {layoutClickChanger ? (
            <ReactPaginate
              previousLabel={"Prev"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={Math.ceil(totalCategory / 10)}
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
              {totalCategory <= 10 ? (
                ""
              ) : (
                <ReactPaginate
                  previousLabel={"Prev"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={Math.ceil(totalCategory / 10)}
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
export default CategoryTable;
