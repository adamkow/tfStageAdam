import { useEffect, useState, useContext } from "react";
import { OrdersContext } from "../context/OrderContext";
import ordersData from "../orders.json";

interface Order {
  id: string;
  productName: string;
  dateOrdered: string;
  orderStatus: string;
}

export const useFilteredOrders = (): Order[] => {
  const [filter] = useContext(OrdersContext);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);

  const orderStatusFilter = (orders: Order[], orderStatus: string): Order[] => {
    return orders.filter((order) => order.orderStatus === orderStatus);
  };

  useEffect(() => {
    let filtered: Order[];
    if (filter === "") {
      filtered = ordersData;
    } else {
      filtered = orderStatusFilter(ordersData, filter);
    }
    setFilteredOrders(filtered);
  }, [filter]);

  return filteredOrders;
};
