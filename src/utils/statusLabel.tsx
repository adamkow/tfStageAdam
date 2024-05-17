import React from "react";

interface OrderStatusLabels {
  [key: string]: { label: string; color: string };
}

const orderStatusLabels: OrderStatusLabels = {
  accepted: { label: "Accepted", color: "blue" },
  inProgress: { label: "In Progress", color: "orange" },
  complete: { label: "Completed", color: "green" },
};

const StatusLabel: React.FC<{ status: string }> = ({ status }) => {
  const { label, color } = orderStatusLabels[status] || {
    label: status,
    color: "black",
  };

  return <div style={{ color }}>{label}</div>;
};

export default StatusLabel;
