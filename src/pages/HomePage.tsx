import { Link } from "react-router-dom";
import { Button } from "antd";

const HomePage = () => {
  return (
    <div style={{ padding: "40px" }}>
      <Link to="/orders">
        <Button type="primary">View Orders</Button>
      </Link>
    </div>
  );
};

export default HomePage;
