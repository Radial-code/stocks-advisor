import React from "react";
import { Table } from "react-bootstrap";
import { withRouter } from "react-router";
import moment from "moment";
import Sortarrow from "../../assets/img/sortarrow.png";

const SearchTable = ({ history, searchNewsList, searchshow }) => {
  return (
    <Table hover className="mt-sm-0 mt-3">
      <thead className="portfolio-sticky">
        <tr className="user-list-panel">
          <th className="whitespace table-width">
            <img className="ps-1" src={Sortarrow} alt="sort arrow" />
            Date
          </th>
          <th className="whitespace table-width-header">
            <img className="ps-1" src={Sortarrow} alt="sort arrow" />{" "}
            Arabic-Title
          </th>
          <th className="whitespace table-width-header">
            <img className="ps-1" src={Sortarrow} alt="sort arrow" /> Eng-Title
          </th>
          <th className="whitespace table-width-header">
            <img className="ps-1" src={Sortarrow} alt="sort arrow" />{" "}
            Arabic-Tags
          </th>
          <th className="whitespace table-width-header">
            <img className="ps-1" src={Sortarrow} alt="sort arrow" /> Eng-Tags
          </th>
        </tr>
      </thead>
      <tbody className="user-details">
        {searchNewsList && !!searchNewsList.length
          ? searchNewsList.map((value, index) => {
              return (
                <tr
                  key={index}
                  onClick={() => history.push(`/news/details/${value._id}`)}
                >
                  <td className="whitespace Ellipse cursor-pointer">
                    {moment(value.createdAt).format("DD/MM/YY")}
                  </td>
                  <td className="whitespace Ellipse cursor-pointer">
                    {value.atitle}
                  </td>
                  <td className="whitespace Ellipse cursor-pointer">
                    {value.title}
                  </td>
                  <td className="whitespace Ellipse cursor-pointer">
                    {value.atags}
                  </td>
                  <td className="whitespace Ellipse cursor-pointer">
                    {value.tags}
                  </td>
                </tr>
              );
            })
          : "You don't have any news"}
      </tbody>
    </Table>
  );
};
export default withRouter(SearchTable);
