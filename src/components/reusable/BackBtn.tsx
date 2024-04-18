import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <button className="btn-default" onClick={handleGoBack}>
      <i className="fa-solid fa-arrow-left"></i> Back
    </button>
  );
};

export default BackBtn;
