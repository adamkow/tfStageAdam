import React from "react";
import { useContext } from "react";
export const OrdersContext = React.createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
>(["", () => {}]);

export const useOrdersFilterState = () => {
  const [filter, setFilter] = useContext(OrdersContext) as [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ];

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  return {
    filter,
    setFilter,
    handleFilterChange,
  };
};

export const useRemoveOrdersFilter = () => {
  const [filter, setFilter] = useContext(OrdersContext);

  const handleFilterChange = () => {
    setFilter("");
  };

  return {
    filter,
    handleFilterChange,
  };
};
