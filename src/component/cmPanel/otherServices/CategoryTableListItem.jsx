import moment from "moment";

function CategoryTableListItem({
  value,
  editCategory,
  deleteCategory,
  getValueOf,
}) {
  return (
    <>
      <tr className="current-stock-data table-border-bottom">
        <td className="text-end  whitespace Ellipse">
          {moment(value.createdAt).format("MM/ddd")}
        </td>
        <td className="text-end  whitespace Ellipse">{value.title}</td>
        <td className="text-end  whitespace Ellipse">
          <button
            className="px-3 py-1 edit-button "
            onClick={() => editCategory(value)}
          >
            {getValueOf("Edit")}
          </button>
        </td>
        <td className="text-end  whitespace Ellipse">
          <button
            onClick={() => deleteCategory(value._id)}
            className="px-3 py-1 delete-button"
          >
            {getValueOf("Delete")}
          </button>
        </td>
      </tr>
    </>
  );
}
export default CategoryTableListItem;
