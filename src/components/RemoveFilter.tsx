import { Button } from "antd";
import { useRemoveOrdersFilter } from "../context/OrderContext";
import { CloseOutlined } from "@ant-design/icons";
import StatusLabel from "../utils/statusLabel";

export const RemoveFilter = () => {
  const { filter, handleFilterChange } = useRemoveOrdersFilter();

  return filter ? (
    <Button
      onClick={handleFilterChange}
      style={{ display: "flex", alignItems: "center", marginLeft: "50px" }}
    >
      <StatusLabel status={filter} />
      <CloseOutlined style={{ marginLeft: "5px" }} />
    </Button>
  ) : (
    <div />
  );
};
