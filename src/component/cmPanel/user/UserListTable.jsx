import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Sortarrow from "../../../assets/img/sortarrow.png";

import { useDispatch, useSelector } from "react-redux";
import { getUserListForAdminAction } from "../../../redux/action/cmPanel/stock";
import BubblesLoader from "../../common/BubblesLoader";

const UserListTable = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const adminUserList = useSelector((state) => state.cmPanel.adminUserList);

  useEffect(() => {
    dispatch(getUserListForAdminAction(setLoading));
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <BubblesLoader />
        </div>
      ) : (
        <Table responsive hover className="">
          <thead className="portfolio-sticky">
            <tr className="user-list-panel">
              <th className="text-center">
                {" "}
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                Join Date{" "}
              </th>
              <th className="text-center">
                {" "}
                <img className="ps-1" src={Sortarrow} alt="sort arrow" /> Name
              </th>
              <th className="text-center">
                {" "}
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                Phone
              </th>
              <th className="text-center">
                {" "}
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                E-mail
              </th>
              <th className="text-center">
                {" "}
                <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                Subscription Plan Name
              </th>
            </tr>
          </thead>
          <tbody className="user-details">
            {adminUserList && adminUserList.length
              ? adminUserList.map(() => {
                  return (
                    <tr>
                      <td className="text-center">15/07/2021</td>
                      <td className="text-center">Jhone Doe</td>
                      <td className="text-center">1234567890</td>
                      <td className="text-center">1234567890@gmail.com</td>
                      <td className="text-center">Plan 1</td>
                    </tr>
                  );
                })
              : "You don't have any user"}
          </tbody>
        </Table>
      )}
    </>
  );
};
export default UserListTable;
