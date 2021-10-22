// import React from "react";
// import moment from "moment";
// import { useLayoutChangerProvider } from "../../../redux/LayoutChangerProvider";

// const NewsTableListItem = ({ value, history }) => {
//   const { layoutClickChanger } = useLayoutChangerProvider();
//   return (
//     <tr onClick={() => history.push(`/content/manager/edit/news/${value._id}`)}>
//       <td colspan="3" className="whitespace Ellipse">
//         {" "}
//         {moment(value.createdAt).format("MM/ddd")}
//       </td>
//       <td
//         colspan="3"
//         className={`${
//           layoutClickChanger
//             ? "hitespace Ellipse text-end"
//             : "hitespace Ellipse text-start"
//         }`}
//       >
//         {value.title}
//       </td>
//       <td colspan="3" className="whitespace Ellipse">
//         {value.tags}
//       </td>
//     </tr>
//   );
// };

// export default NewsTableListItem;
