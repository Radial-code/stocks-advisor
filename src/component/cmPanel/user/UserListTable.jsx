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
import NoData from "../../../assets/img/emptydata.jpg";

const UserListTable = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { layoutClickChanger, getValueOf } = useLayoutChangerProvider();
  const adminUserList = useSelector((state) => state.cmPanel.adminUserList);
  const [loading, setLoading] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getUserListForAdminAction(setLoading, page, setTotalUsers));
  }, [page]);

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
          {adminUserList && adminUserList.length !== 0 ? (
            <>
              {" "}
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
                      {getValueOf("Join Date")}
                    </th>
                    <th
                      className={`${
                        layoutClickChanger
                          ? "text-end whitespace"
                          : "text-start whitespace"
                      }`}
                    >
                      <img className="ps-1" src={Sortarrow} alt="sort arrow" />{" "}
                      {getValueOf("Name")}
                    </th>
                    <th
                      className={`${
                        layoutClickChanger
                          ? "text-end whitespace"
                          : "text-start whitespace"
                      }`}
                    >
                      <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                      {getValueOf("Phone")}
                    </th>
                    <th
                      className={`${
                        layoutClickChanger
                          ? "text-end whitespace"
                          : "text-start whitespace"
                      }`}
                    >
                      <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                      {getValueOf("E-mail")}
                    </th>
                    <th
                      className={`${
                        layoutClickChanger
                          ? "text-end whitespace"
                          : "text-start whitespace"
                      }`}
                    >
                      <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                      {getValueOf("Subscription Plan Name")}
                    </th>
                  </tr>
                </thead>
                <tbody className="user-details">
                  {adminUserList && adminUserList.length
                    ? adminUserList.map((obj, index) => (
                        <UserListItem
                          key={index}
                          value={obj}
                          history={history}
                          layoutClickChanger={layoutClickChanger}
                        />
                      ))
                    : ""}
                </tbody>
              </Table>
            </>
          ) : (
            <div className="d-flex text-center flex-column">
              <img
                className="nodata-img d-inline-block mx-auto"
                src={NoData}
                alt="NoData"
              />
              <p>{getValueOf("You don't have any user")}</p>
            </div>
          )}
        </>
      )}
      {totalUsers && totalUsers <= 10 ? (
        ""
      ) : (
        <>
          {layoutClickChanger ? (
            <ReactPaginate
              previousLabel={"Prev"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={Math.ceil(totalUsers / 10)}
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
                pageCount={Math.ceil(totalUsers / 10)}
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
  );
};
export default UserListTable;
