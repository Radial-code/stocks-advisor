import React from "react";
import moment from "moment";

const UserListItem = ({ value, history, layoutClickChanger }) => {
  const { phone, createdAt, firstName, lastName, email, plan, _id } = value;

  return (
    <>
      <tr
        className="cursor-pointer"
        onClick={() => history.push(`/content/manager/user/${_id}`)}
      >
        <td
          className={`${
            layoutClickChanger ? "text-end whitespace" : "text-start whitespace"
          }`}
        >
          {moment(createdAt).format("DD/MM/YY")}
        </td>
        <td
          className={`${
            layoutClickChanger ? "text-end whitespace" : "text-start whitespace"
          }`}
          dir="ltr"
        >
          {firstName} {lastName}
        </td>
        <td className="text-end whitespace Ellipse">{phone}</td>
        <td className="text-end whitespace Ellipse" dir="ltr">
          {email}
        </td>
        <td
          className={`${
            layoutClickChanger ? "text-end whitespace" : "text-start whitespace"
          }`}
        >
          {plan}
        </td>
      </tr>
    </>
  );
};

export default UserListItem;
