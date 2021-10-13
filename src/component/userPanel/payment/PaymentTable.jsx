import moment from "moment";
import { useSelector } from "react-redux";
import { DropDownIcon } from "../../common/icons/Icons";

const PaymentTable = () => {
  const paymentList = useSelector((state) => state.list.paymentList);
  return (
    <table className="table white-space-nowrap table-borderless">
      <thead className="portfolio-sticky">
        <tr>
          <th scope="col-5" className="payment-thead">
            <DropDownIcon />
            <span className="me-2">Status</span>
          </th>
          <th scope="col-5" className="payment-thead">
            <DropDownIcon />
            <span className="me-2">Card No</span>
          </th>
          <th scope="col-5" className="payment-thead">
            <DropDownIcon />
            <span className="me-2">Plan</span>
          </th>
          <th scope="col-5" className="payment-thead">
            <DropDownIcon />
            <span className="me-2">Amount</span>
          </th>
          <th scope="col-5" className="payment-thead">
            <DropDownIcon />
            <span className="me-2">Date</span>
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
                  <td className="py-3">{obj.plan.title}</td>
                  <td className="py-3">${obj.amount}</td>
                  <td className="py-3">
                    {moment(obj.createdAt).format("DD/MMM/YYYY")}
                  </td>
                </tr>
              );
            })
          : "You don't have any payment list"}
      </tbody>
    </table>
  );
};
export default PaymentTable;
