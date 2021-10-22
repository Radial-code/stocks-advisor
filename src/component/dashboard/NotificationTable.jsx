import moment from "moment";
import { useSelector } from "react-redux";
import BubblesLoader from "../common/BubblesLoader";

const NotificationTable = ({ loading }) => {
  const notificationList = useSelector((state) => state.list.notificationList);
  return (
    <>
      {loading ? (
        <BubblesLoader />
      ) : (
        <table className="table table-borderless">
          <thead>
            <tr className="current-stock-table-head table-border-bottom table-border-top">
              <th scope="col" className="text-center observations">
                Title
              </th>
              <th scope="col" className="text-center observations">
                Description
              </th>{" "}
              <th scope="col" className="text-center observations">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {notificationList && notificationList.length
              ? notificationList.map((value, index) => {
                  return (
                    <tr
                      key={index}
                      className="current-stock-data table-border-bottom sold-stock-data"
                    >
                      <td className="email text-center whitespace">
                        {value.title}
                      </td>
                      <td className="email text-center whitespace">
                        {value.body}
                      </td>
                      <td className="email text-center whitespace">
                        {moment(value.createdAt).format("DD/MM/YY")}
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      )}
    </>
  );
};
export default NotificationTable;
