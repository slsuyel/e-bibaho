import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const UpgrateBtn = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/pricing")}
      className="my-1 rounded-1 fw-medium "
      type="primary"
      icon={<i className="fa-solid fa-crown"></i>}
      size="middle"
    >
      Upgrade Now
    </Button>
  );
};

export default UpgrateBtn;
