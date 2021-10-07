import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
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
        <BubblesLoader />
      ) : (
        <Table responsive hover className="">
          <thead>
            <tr className="user-list-panel">
              <th>Join Date</th>
              <th> Name</th>
              <th>Phone</th>
              <th>E-mail</th>
              <th>Subscription Plan Name</th>
            </tr>
          </thead>
          <tbody className="user-details">
            {adminUserList && adminUserList.length
              ? adminUserList.map(() => {
                  return (
                    <tr>
                      <td>15/07/2021</td>
                      <td>Jhone Doe</td>
                      <td>1234567890</td>
                      <td>1234567890@gmail.com</td>
                      <td>Plan 1</td>
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
