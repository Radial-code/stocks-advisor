import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Sortarrow from "../../../assets/img/sortarrow.png";
import { useDispatch, useSelector } from "react-redux";
import { getUserListForAdminAction } from "../../../redux/action/cmPanel/stock";
import BubblesLoader from "../../common/BubblesLoader";
import moment from "moment";
import { useHistory } from "react-router-dom";

const UserListTable = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [loading, setLoading] = useState(false);
  const adminUserList = useSelector((state) => state.cmPanel.adminUserList);

  useEffect(() => {
    dispatch(getUserListForAdminAction(setLoading));
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
              <th className="text-end whitespace">
                {" "}
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                Join Date
              </th>
              <th className="text-end whitespace">
                <img className="ps-1" src={Sortarrow} alt="sort arrow" /> Name
              </th>
              <th className="text- whitespace">
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                Phone
              </th>
              <th className="text-end whitespace">
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                E-mail
              </th>
              <th className="text-end whitespace">
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                Subscription Plan Name
              </th>
            </tr>
          </thead>
          <tbody className="user-details">
            {adminUserList && adminUserList.length ? (
              adminUserList.map((value, index) => {
                const {
                  phone,
                  createdAt,
                  firstName,
                  lastName,
                  email,
                  plan,
                  _id,
                } = value;
                return (
                  <tr
                    key={index}
                    className="cursor-pointer"
                    onClick={() => history.push(`/content/manager/user/${_id}`)}
                  >
                    <td className="text-end whitespace Ellipse">
                      {moment(createdAt).format("DD/MM/YY")}
                    </td>
                    <td className="text-end whitespace Ellipse" dir="ltr">
                      {firstName} {lastName}
                    </td>
                    <td className="text-end whitespace Ellipse">{phone}</td>
                    <td className="text-end whitespace Ellipse" dir="ltr">
                      {email}
                    </td>
                    <td className="text-end whitespace Ellipse">{plan}</td>
                  </tr>
                );
              })
            ) : (
              <td colspan={5} className="text-center h-100 table-text">
                You don't have any user
              </td>
            )}
          </tbody>
        </Table>
      )}
    </>
  );
};
export default UserListTable;
