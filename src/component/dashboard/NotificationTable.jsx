import moment from "moment";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import BubblesLoader from "../common/BubblesLoader";
import NotFound from "../../assets/img/notfound.png";
import NoData from "../../assets/img/emptydata.jpg";

const NotificationTable = ({
  loading,
  getValueOf,
  totalNotification,
  layoutClickChanger,
  setPage,
  page,
}) => {
  const notificationList = useSelector((state) => state.list.notificationList);
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage);
  };
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          {" "}
          <BubblesLoader />
        </div>
      ) : (
        <>
          {notificationList && notificationList.length !== 0 ? (
            <>
              <table className="table table-borderless">
                <thead>
                  <tr className="current-stock-table-head table-border-bottom table-border-top">
                    <th scope="col" className="text-start observations">
                      {getValueOf("Title")}
                    </th>
                    <th
                      scope="col"
                      className="text-start observations description-width"
                    >
                      {getValueOf("Description")}
                    </th>
                    <th scope="col" className="text-start observations">
                      {getValueOf("Date")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {notificationList && notificationList.length ? (
                    notificationList.map((value, index) => {
                      return (
                        <tr
                          key={index}
                          className="current-stock-data table-border-bottom sold-stock-data"
                        >
                          <td className="email text-start whitespace">
                            {value.title}
                          </td>
                          <td className="email text-start ">
                            <span>{value.body}</span>
                          </td>
                          <td className="email text-start whitespace">
                            {moment(value.createdAt).format("DD/MM/YY")}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <td colSpan="3">
                      <img
                        className="w-50 mx-auto d-block"
                        src={NotFound}
                        alt=""
                      />
                    </td>
                  )}
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
              <h4 className="fw-bold">
                {getValueOf("You don't have any payment list")}
              </h4>
            </div>
          )}
          {totalNotification <= 10 ? (
            ""
          ) : (
            <>
              {layoutClickChanger ? (
                <ReactPaginate
                  previousLabel={"Prev"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={Math.ceil(totalNotification / 10)}
                  marginPagesDisplayed={3}
                  pageRangeDisplayed={2}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"activePage"}
                  initialPage={page}
                />
              ) : (
                <div className="react-pagination  ">
                  {totalNotification <= 10 ? (
                    ""
                  ) : (
                    <ReactPaginate
                      previousLabel={"Prev"}
                      nextLabel={"Next"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={Math.ceil(totalNotification / 10)}
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
      )}
    </>
  );
};
export default NotificationTable;
