import { Button, Result } from "antd";
import { ResultStatusType } from "antd/es/result";

import { Link, useNavigate, useRouteError } from "react-router-dom";

interface ErrorpageProps {
  status: ResultStatusType;
}

const Errorpage: React.FC<ErrorpageProps> = ({ status }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const error = useRouteError() as { statusText?: string; message?: string };

  console.error(error);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center ">
          <Result
            className="p-1"
            status={status}
            title={status}
            subTitle={
              <>
                <p>Sorry, an unexpected error has occurred.</p>
                <i>{error.statusText || error.message}</i>
              </>
            }
            extra={
              <Button type="primary" onClick={handleGoBack}>
                Back
              </Button>
            }
          />
          <Link className="btn btn-primary " to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
