import { Card } from "antd";
/* bg-danger-subtle mb-2 p-4 rounded-circle shadow-lg text-warning-emphasis */
const HowWork = () => {
  return (
    <div className="container text-center pb-5">
      <h1 className="font-maven  ">
        How <span className="fw-medium text-info-emphasis ">We Works</span>
      </h1>
      <div className="row mx-auto">
        <div className="col-md-4 my-2 ">
          <Card className="font-maven" hoverable>
            <i className="bg-danger-subtle mb-2 p-4 rounded-circle shadow-lg text-warning-emphasis  fs-1 fa-solid fa-user"></i>
            <h3>Create Your Profile</h3>
            <p className="fw-medium text-info-emphasis">
              Create your detailed profile, add photos, and describe your
              partner preference.
            </p>
          </Card>
        </div>
        <div className="col-md-4 my-2 ">
          <Card className="font-maven" hoverable>
            <i className="bg-danger-subtle mb-2 p-4 rounded-circle shadow-lg text-warning-emphasis  fs-1 fa-solid fa-magnifying-glass"></i>

            <h3>Search Your Partner</h3>
            <p className="fw-medium text-info-emphasis">
              Search your preferred partner by location, education, interests,
              and more.
            </p>
          </Card>
        </div>
        <div className="col-md-4 my-2 ">
          <Card className="font-maven" hoverable>
            <i className="bg-danger-subtle mb-2 p-4 rounded-circle shadow-lg text-warning-emphasis  fs-1 far fa-comments"></i>
            <h3>Start Communication</h3>
            <p className="fw-medium text-info-emphasis">
              Start communication with suitable profiles by sending messages and
              emails.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
