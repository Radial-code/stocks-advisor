import React from "react";
import moment from "moment";

const StockListItem = ({ value, history, layoutClickChanger }) => {
  return (
    <>
      <tr
        onClick={() => history.push(`/content/manager/edit/stock/${value._id}`)}
        className="current-stock-data table-border-bottom "
      >
        <td
          className={`${
            layoutClickChanger
              ? "text-end whitespace Ellipse"
              : "text-start whitespace Ellipse"
          }`}
        >
          {moment(value.joinDate).format("DD/MM/YY")}
        </td>
        <td
          className={`${
            layoutClickChanger
              ? "text-end whitespace Ellipse"
              : "text-start whitespace Ellipse"
          } text-primary cursor-pointer`}
        >
          {value && value.symbol ? value.symbol : "N/A"}
        </td>

        <td
          className={`${
            layoutClickChanger
              ? "text-end whitespace Ellipse"
              : "text-start whitespace Ellipse"
          }`}
        >
          {value.isSold ? "Sold" : "No Sold"}
        </td>
        <td
          className={`${
            layoutClickChanger
              ? "text-end whitespace Ellipse"
              : "text-start whitespace Ellipse"
          }`}
        >
          ${value.joinPrice ? value.joinPrice : "0"}
        </td>
        <td
          className={`${
            layoutClickChanger
              ? "text-end whitespace Ellipse"
              : "text-start whitespace Ellipse"
          }`}
        >
          {value.soldPrice ? `$${value.soldPrice}` : "N/A"}
        </td>
        <td
          className={`${
            layoutClickChanger
              ? "text-end whitespace Ellipse"
              : "text-start whitespace Ellipse"
          }`}
        >
          {value.soldDate ? moment(value.soldDate).format("DD/MM/YY") : "N/A"}
        </td>
        <td
          className={`${
            layoutClickChanger
              ? "text-end whitespace Ellipse"
              : "text-start whitespace Ellipse"
          }`}
        >
          {value && value.category ? value.category.title : "N/A"}
        </td>
        <td
          className={`${
            value.profitOrLoss.status === 0
              ? "profit-zero-color"
              : value.profitOrLoss.status === 1
              ? "text-green-profite"
              : "text-danger"
          } ${
            layoutClickChanger
              ? "text-end whitespace Ellipse"
              : "text-start whitespace Ellipse"
          } `}
        >
          {value && value.profitOrLoss && value.profitOrLoss.percentage
            ? value.profitOrLoss.percentage
            : "N/A"}
        </td>
      </tr>
    </>
  );
};

export default StockListItem;
