import moment from "moment";
import { useFilteredOrders } from "../utils/orderFilter";
import "./Orders.css";
import StatusLabel from "../utils/statusLabel";

export const Orders = () => {
  const filteredOrders = useFilteredOrders();

  return (
    <>
      <div className="orderContainer">
        {filteredOrders.map((order) => (
          <div className="orderBox" key={order.id}>
            <div>{order.productName}</div>
            <div className="orderDetails">
              <div>
                Order Date
                <br />
                {moment(order.dateOrdered).format("Do MMMM YYYY")}
              </div>
              <div>
                Order Status
                <br />
                <StatusLabel status={order.orderStatus} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
