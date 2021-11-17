import moment from "moment";
import { useSelector } from "react-redux";
import { DropDownIcon } from "../../common/icons/Icons";
import NoData from "../../../assets/img/emptydata.jpg";

const PaymentTable = ({ getValueOf }) => {
  const paymentList = useSelector((state) => state.list.paymentList);
  return (
    <>
      {paymentList && paymentList.length !== 0 ? (
        <>
          <table className="table white-space-nowrap table-borderless">
            <thead className="portfolio-sticky">
              <tr>
                <th scope="col-5" className="payment-thead">
                  {/* <DropDownIcon /> */}
                  <span className="me-2">{getValueOf("Status")}</span>
                </th>
                <th scope="col-5" className="payment-thead">
                  {/* <DropDownIcon /> */}
                  <span className="me-2">{getValueOf("Card No")}</span>
                </th>
                <th scope="col-5" className="payment-thead">
                  {/* <DropDownIcon /> */}
                  <span className="me-2">{getValueOf("Plan")}</span>
                </th>
                <th scope="col-5" className="payment-thead">
                  {/* <DropDownIcon /> */}
                  <span className="me-2">{getValueOf("Amount")}</span>
                </th>
                <th scope="col-5" className="payment-thead">
                  {/* <DropDownIcon /> */}
                  <span className="me-2">{getValueOf("Date")}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentList && paymentList.length
                ? paymentList.map((obj, index) => {
                    return (
                      <tr key={index} className="tb-text border-b-1">
                        <td className="py-3">{obj.status}</td>
                        <td className="py-3">{obj.card}*******</td>
                        <td className="py-3">
                          {obj && obj.plan && obj.plan.title
                            ? obj.plan.title
                            : "N/A"}
                        </td>
                        <td className="py-3">${obj.amount}</td>
                        <td className="py-3">
                          {moment(obj.createdAt).format("DD/MMM/YYYY")}
                        </td>
                      </tr>
                    );
                  })
                : ""}
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
          <h4 className="fw-bold">
            {getValueOf("You don't have any payment list")}
          </h4>
        </div>
      )}
    </>
  );
};
export default PaymentTable;
