import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Sortarrow from "../../../assets/img/sortarrow.png";
import { useDispatch, useSelector } from "react-redux";
import { getUserListForAdminAction } from "../../../redux/action/cmPanel/stock";
import BubblesLoader from "../../common/BubblesLoader";
import { useHistory } from "react-router-dom";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import UserListItem from "./UserListItem";
import ReactPaginate from "react-paginate";

const UserListTable = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { layoutClickChanger } = useLayoutChangerProvider();

  const [loading, setLoading] = useState(false);
  const adminUserList = useSelector((state) => state.cmPanel.adminUserList);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getUserListForAdminAction(setLoading, setHasMore, page));
  }, [page]);

  console.log("re render");
  const handleChangePage = (e) => {
    console.log(e);
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
        <Table responsive hover className="">
          <thead className="portfolio-sticky">
            <tr className="user-list-panel">
              <th
                className={`${
                  layoutClickChanger
                    ? "text-end whitespace"
                    : "text-start whitespace"
                }`}
              >
                {" "}
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                Join Date
              </th>
              <th
                className={`${
                  layoutClickChanger
                    ? "text-end whitespace"
                    : "text-start whitespace"
                }`}
              >
                <img className="ps-1" src={Sortarrow} alt="sort arrow" /> Name
              </th>
              <th
                className={`${
                  layoutClickChanger
                    ? "text-end whitespace"
                    : "text-start whitespace"
                }`}
              >
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                Phone
              </th>
              <th
                className={`${
                  layoutClickChanger
                    ? "text-end whitespace"
                    : "text-start whitespace"
                }`}
              >
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                E-mail
              </th>
              <th
                className={`${
                  layoutClickChanger
                    ? "text-end whitespace"
                    : "text-start whitespace"
                }`}
              >
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                Subscription Plan Name
              </th>
            </tr>
          </thead>
          <tbody className="user-details">
            {adminUserList && adminUserList.length ? (
              adminUserList.map((obj, index) => (
                <UserListItem
                  key={index}
                  value={obj}
                  history={history}
                  layoutClickChanger={layoutClickChanger}
                />
              ))
            ) : (
              <td colspan={5} className="text-center h-100 table-text">
                You don't have any user
              </td>
            )}
          </tbody>
        </Table>
      )}

      {adminUserList.length === 0 ? (
        ""
      ) : (
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(13 / 10)}
          marginPagesDisplayed={0}
          pageRangeDisplayed={2}
          onPageChange={handleChangePage}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"activePage"}
          initialPage={page}
        />
      )}
    </>
  );
};
export default UserListTable;
