import { Button } from "antd";
import { useOrdersFilterState } from "../context/OrderContext";

export const FiltersBar = () => {
  const { handleFilterChange } = useOrdersFilterState();

  return (
    <div style={{ display: "flex", alignItems: "center", marginLeft: "40px" }}>
      <h1 style={{ marginRight: "10px", marginTop: "10px" }}>Orders</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button onClick={() => handleFilterChange("accepted")}>Accepted</Button>
        <Button onClick={() => handleFilterChange("inProgress")}>
          In Progress
        </Button>
        <Button onClick={() => handleFilterChange("complete")}>
          Completed
        </Button>
      </div>
    </div>
  );
};
