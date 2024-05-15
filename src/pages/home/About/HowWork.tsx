import { Card } from "antd";
/* bg-danger-subtle mb-2 p-4 rounded-circle shadow-lg text-warning-emphasis */
const HowWork = () => {
  return (
    <div
      className="container text-center my-5 py-5"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h1 className="font-maven  ">
        How <span className="fw-medium text-info-emphasis ">It Works</span>
      </h1>
      <div className="row mx-auto text-capitalize ">
        <div className="col-md-3 my-2 ">
          <Card className="font-maven" hoverable>
            <i className="bg-danger-subtle mb-2 p-4 rounded-circle shadow-lg text-warning-emphasis  fs-3 fa-solid fa-user"></i>
            <h3 className="fs-5">Create Your Profile</h3>
            <p className="fw-medium text-info-emphasis">
              Create your detailed profile, add photos, and describe your
              partner preference.
            </p>
          </Card>
        </div>
        <div className="col-md-3 my-2 ">
          <Card className="font-maven" hoverable>
            <i className="bg-danger-subtle mb-2 p-4 rounded-circle shadow-lg text-warning-emphasis  fs-3 fa-solid fa-magnifying-glass"></i>

            <h3 className="fs-5">Search Your Partner</h3>
            <p className="fw-medium text-info-emphasis">
              Search your preferred partner by location, education, interests,
              and more.
            </p>
          </Card>
        </div>
        <div className="col-md-3 my-2 ">
          <Card className="font-maven" hoverable>
            <i className="bg-danger-subtle mb-2 p-4 rounded-circle shadow-lg text-warning-emphasis  fs-3 far fa-comments"></i>
            <h3 className="fs-5">Start Communication</h3>
            <p className="fw-medium text-info-emphasis">
              Start communication with suitable profiles by sending messages and
              emails.
            </p>
          </Card>
        </div>
        {/* <i class="fa-solid fa-children"></i> */}
        <div className="col-md-3 my-2 ">
          <Card className="font-maven" hoverable>
            <i className="bg-danger-subtle mb-2 p-4 rounded-circle shadow-lg text-warning-emphasis  fs-3 fa-solid fa-children"></i>
            <h3 className="fs-5">Consult with our advisor</h3>
            <p className="fw-medium text-info-emphasis">
              please take our consultation with no additional charge to get
              marriage
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
