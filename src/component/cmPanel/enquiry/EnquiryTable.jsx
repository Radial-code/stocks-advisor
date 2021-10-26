import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Sortarrow from "../../../assets/img/sortarrow.png";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";
import BubblesLoader from "../../common/BubblesLoader";
import moment from "moment";
import ReactPaginate from "react-paginate";
import { getContactListAction } from "../../../redux/action/contact";
import NoData from "../../../assets/img/emptydata.jpg";
const EnquiryTable = () => {
  const { layoutClickChanger } = useLayoutChangerProvider();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalContact, setTotalContact] = useState(0);
  const contactList = useSelector((state) => state.list.contactList);

  useEffect(() => {
    dispatch(getContactListAction(setLoading, page, setTotalContact));
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
        <div>
          {contactList && contactList.length !== 0 ? (
            <>
              <Table responsive hover className="">
                <thead className="portfolio-sticky">
                  <tr className="user-list-panel">
                    <th className=" whitespace text-start">
                      <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                      Date
                    </th>
                    <th className=" whitespace text-start">
                      <img className="ps-1" src={Sortarrow} alt="sort arrow" />{" "}
                      Name
                    </th>
                    <th className=" whitespace text-start">
                      <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                      Reason
                    </th>
                    <th className=" whitespace text-start">
                      <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                      E-mail
                    </th>
                    <th className=" whitespace text-start">
                      <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                      Message
                    </th>
                    <th className=" whitespace text-start">
                      <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="user-details">
                  {contactList && contactList.length
                    ? contactList.map((value, index) => {
                        return (
                          <tr key={index}>
                            <td className=" whitespace text-start Ellipse">
                              {moment(value.createdAt).format("MM/ddd")}
                            </td>
                            <td
                              className=" whitespace text-start Ellipse"
                              dir="ltr"
                            >
                              {value.name}
                            </td>
                            <td className=" whitespace text-start Ellipse">
                              {value.reason}
                            </td>
                            <td
                              className=" whitespace text-start Ellipse"
                              dir="ltr"
                            >
                              {value.email}
                            </td>
                            <td className=" whitespace text-start Ellipse">
                              {value.message}
                            </td>
                            <td className=" whitespace text-start Ellipse">
                              {value.status}
                            </td>
                          </tr>
                        );
                      })
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
              <h4 className="fw-bold">You don't have any Enquiry</h4>
            </div>
          )}
        </div>
      )}
      {contactList && contactList.length !== 0 ? (
        <>
          {totalContact && totalContact <= 10 ? (
            ""
          ) : (
            <>
              {layoutClickChanger ? (
                <ReactPaginate
                  previousLabel={"Prev"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={Math.ceil(totalContact / 10)}
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
                    pageCount={Math.ceil(totalContact / 10)}
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
};
export default EnquiryTable;
