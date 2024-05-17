import React, { useEffect } from "react";
import { useFilteredOrders } from "./orderFilter";

interface OrderCountProps {
  setOrderCount: React.Dispatch<React.SetStateAction<number>>;
}

export const OrderCount: React.FC<OrderCountProps> = ({ setOrderCount }) => {
  const filteredOrders = useFilteredOrders();

  useEffect(() => {
    setOrderCount(filteredOrders.length);
  }, [filteredOrders, setOrderCount]);

  return <></>;
};
