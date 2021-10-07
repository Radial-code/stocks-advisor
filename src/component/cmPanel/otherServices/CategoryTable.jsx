import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sortarrow from "../../../assets/img/sortarrow.png";
import { getCategoryListAction } from "../../../redux/action/cmPanel/OurServices";
import BubblesLoader from "../../common/BubblesLoader";

function CategoryTable() {
  const dispatach = useDispatch();
  const [loading, setLoading] = useState(false);
  const categoryList = useSelector((state) => state.cmPanel.categoryList);

  useEffect(() => {
    dispatach(getCategoryListAction(setLoading));
  }, []);

  return (
    <>
      {loading ? (
        <BubblesLoader />
      ) : (
        <table className="table table-borderless table-hover mb-3">
          <thead className="portfolio-sticky ">
            <tr className="current-stock-table-head table-border-bottom table-border-top">
              <th scope="col" className="text-center position-sticky top-0 ">
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Date
              </th>

              <th scope="col" className="text-center position-sticky top-0 ">
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Category
              </th>

              <th scope="col" className="text-center position-sticky top-0 ">
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Edit
              </th>
              <th scope="col" className="text-center position-sticky top-0 ">
                <span>
                  <img className="ps-1" src={Sortarrow} alt="sort arrow" />
                </span>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {categoryList && !!categoryList.length
              ? categoryList.map((value, index) => {
                  return (
                    <tr
                      key={index}
                      className="current-stock-data table-border-bottom"
                    >
                      <td className="text-center ">
                        {moment(value.createdAt).format("MM/ddd")}
                      </td>
                      <td className="text-center">{value.title}</td>
                      <td className="text-center">
                        <button className="px-3 py-1 edit-button ">Edit</button>
                      </td>
                      <td className="text-center">
                        <button className="px-3 py-1 delete-button">
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              : "You don't have any Category list"}
          </tbody>
        </table>
      )}
    </>
  );
}
export default CategoryTable;
