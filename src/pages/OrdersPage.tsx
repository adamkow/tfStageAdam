import { useState, useEffect } from "react";
import { Orders } from "../components/Orders";
import { FiltersBar } from "../components/FiltersBar";
import { RemoveFilter } from "../components/RemoveFilter";
import { OrdersContext } from "../context/OrderContext";
import { OrderCount } from "../utils/orderCount";
const OrdersPage = () => {
  const [filter, setFilter] = useState("");
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    document.title = `(${orderCount}) My Orders`;
  }, [orderCount]);

  return (
    <OrdersContext.Provider value={[filter, setFilter]}>
      <FiltersBar />
      <RemoveFilter />
      <OrderCount setOrderCount={setOrderCount} />
      <Orders />
    </OrdersContext.Provider>
  );
};

export default OrdersPage;
