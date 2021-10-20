import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Sortarrow from "../../../assets/img/sortarrow.png";
import { useDispatch, useSelector } from "react-redux";
import BubblesLoader from "../../common/BubblesLoader";
import moment from "moment";
import { getContactListAction } from "../../../redux/action/contact";
import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";

const EnquiryTable = () => {
  const { setLayoutClickChanger, layoutClickChanger } =
    useLayoutChangerProvider();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const contactList = useSelector((state) => state.list.contactList);

  useEffect(() => {
    dispatch(getContactListAction(setLoading));
  }, []);

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
              <th className=" whitespace text-start">
                {" "}
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                Date
              </th>
              <th className=" whitespace text-start">
                <img className="ps-1" src={Sortarrow} alt="sort arrow" /> Name
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
            {contactList && contactList.length ? (
              contactList.map((value, index) => {
                return (
                  <tr key={index}>
                    <td className=" whitespace text-start Ellipse">
                      {moment(value.createdAt).format("MM/ddd")}
                    </td>
                    <td className=" whitespace text-start Ellipse" dir="ltr">
                      {value.name}
                    </td>
                    <td className=" whitespace text-start Ellipse">
                      {value.reason}
                    </td>
                    <td className=" whitespace text-start Ellipse" dir="ltr">
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
            ) : (
              <td colSpan={6} className="table-text text-center">
                You don't have any user
              </td>
            )}
          </tbody>
        </Table>
      )}
    </>
  );
};
export default EnquiryTable;
