import React from "react";
import { Col } from "react-bootstrap";
import UserListTable from "./UserListTable";

const UsersList = () => {
  return (
    <Col className="d-xl-flex justify-content-end ">
      <section className="user-panel-card w-xl-1000 p-md-5 p-2 pt-5">
        <div className="d-flex justify-content-sm-between flex-sm-row flex-column align-items-center pb-3">
          <p className="heading-stock fs-sm-20">Users</p>
          {/* <div>
            <Link to="/content/manager/edit/user">
              <button className="update-btn">Add New</button>
            </Link>
          </div> */}
        </div>
        <div className="h-calc-100vh-331 scroll-bar overflow-auto mt-4">
          <UserListTable />
        </div>
      </section>
    </Col>
  );
};

export default UsersList;
