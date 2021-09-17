import React from "react";
import { Table } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Sortarrow from "../../assets/img/sortarrow.png";

import "../Panel/Panel.css";
const News = () => {
  return (
    <>
      <p className=" mt-2 profile-heading content-manager-none fs-sm-20 pr-15 pb-2 border-b-1">
        Content Manager
      </p>
      <section className="user-panel-card p-4 mt-5 pt-5">
        <div className="d-flex justify-content-between">
          <p className="heading-stock fs-sm-20">All News</p>
          <div>
            <Link to="/content/manager/add/news">
              <button className="update-btn">Add New</button>
            </Link>
          </div>
        </div>
        <div className="h-calc-100vh-331 scroll-bar overflow-auto mt-4">
          <Table responsive hover className="">
            <thead>
              <tr className="user-list-panel">
                <th scope="col">
                  <span>
                    <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                  </span>
                  Date{" "}
                </th>
                <th scope="col">
                  <span>
                    <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                  </span>
                  Title{" "}
                </th>
                <th scope="col">
                  <span>
                    <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                  </span>
                  Tag{" "}
                </th>
              </tr>
            </thead>
            <tbody className="user-details">
              <tr>
                <td>15/07/2021</td>
                <td>
                  Nullam consequat augue eget finibus pretium. Morbi ultrices
                  eget purus et tempus.
                </td>
                <td className="d-flex flex-column">
                  <span>,Tag-1 ,Tag-2</span> <span>Tag-3, Tag-4</span>
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </Table>{" "}
        </div>
      </section>
    </>
  );
};

export default News;
