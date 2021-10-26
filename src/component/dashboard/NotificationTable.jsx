import moment from "moment";
import { useSelector } from "react-redux";
import BubblesLoader from "../common/BubblesLoader";
import NotFound from "../../assets/img/notfound.png";
import NoData from "../../assets/img/emptydata.jpg";

const NotificationTable = ({ loading }) => {
  const notificationList = useSelector((state) => state.list.notificationList);
  return (
    <>
      {loading ? (
        <BubblesLoader />
      ) : (
        <>
          {notificationList && notificationList.length !== 0 ? (
            <>
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
                  {notificationList && notificationList.length ? (
                    notificationList.map((value, index) => {
                      return (
                        <tr
                          key={index}
                          className="current-stock-data table-border-bottom sold-stock-data"
                        >
                          <td className="email text-center whitespace">
                            {value.title}
                          </td>
                          <td className="email text-center whitespace">
                            <span className="text-ellipsis-dots-oneline">
                              {value.body}
                            </span>
                          </td>
                          <td className="email text-center whitespace">
                            {moment(value.createdAt).format("DD/MM/YY")}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <td colSpan="3">
                      <img
                        className="w-50 mx-auto d-block"
                        src={NotFound}
                        alt=""
                      />
                    </td>
                  )}
                </tbody>
              </table>
            </>
          ) : (
            <div className="d-flex text-center flex-column">
              <img
                className="nodata-img d-inline-block mx-auto"
                src={NoData}
                alt="NoData"
              />
              <h4 className="fw-bold"> You don't have any payment list</h4>
            </div>
          )}
        </>
      )}
    </>
  );
};
export default NotificationTable;
