import { Link } from "react-router-dom";
import { VerifiedOutlined } from "@ant-design/icons";
import { Card } from "antd";

const UserDashboard = () => {
  return (
    <div className="container-fluid  my-4 font-maven">
      <div className="row mx-auto">
        <div className="col-md-3">
          <div className="shadow p-3">
            <div
              className="text-center position-relative"
              style={{ height: "210px" }}
            >
              <img
                className="img-thumbnail rounded-0"
                style={{
                  display: "block",
                  width: "100%",
                  height: "210px",
                }}
                src="https://img3.shaadi.com/2024/02/16/dSH62269192-1708062503871001127-Male.jpg"
                alt="Profile Photo"
              />
            </div>

            <div className="align-items-center my-1 mt-2 d-flex justify-content-between mb-3 ">
              <div>
                <h6>Suyel Haque</h6>
                <p className="mb-0">SH62269192</p>
              </div>

              <Link to="">Edit</Link>
            </div>

            <div className="align-items-center my-1 mt-2 d-flex justify-content-between mb-3 ">
              <div>
                <h6>Account Type</h6>
                <p className="mb-0">Free Membership</p>
              </div>
              <Link to="">Upgrade</Link>
            </div>

            <div className="align-items-center my-1 mt-2 d-flex justify-content-between mb-3 ">
              <div>
                <h6> Mobile no. is verified</h6>
                <p className="mb-0">Verify your ID</p>
              </div>
              <Link to="">
                <VerifiedOutlined />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h6 className="my-3">Your Activity Summary</h6>

          <div className="activity-summary--list card my-3 p-2 row">
            <div className="activity-summary--list--item reset-link-style count-card col-md-4">
              <div className="count-card--number">
                <span className="count-card--number--value count-card--number--value__zero">
                  0
                </span>
              </div>
              <div className="count-card--label">No Pending Invitations</div>
            </div>
            <a className="col-md-4" target="" title="" href="">
              <div className="count-card--number">
                <span className="count-card--number--value">6</span>
                <div className="count-card--flag">3 New</div>
              </div>
              <div className="count-card--label">Accepted Invitations</div>
            </a>
            <a className="col-md-4" target="" title="" href="">
              <div className="count-card--number">
                <span className="count-card--number--value">3</span>
                <div className="count-card--flag">3 New</div>
              </div>
              <div className="count-card--label">Recent Visitors</div>
            </a>
          </div>

          <div className="activity-summary--list card my-3 p-2 row">
            <div className="activity-summary--list--item reset-link-style count-card col-md-4">
              <div className="count-card--text">
                Only Premium Members can avail these benefits
              </div>
            </div>
            <a
              className="activity-summary--list--item reset-link-style count-card count-card__hoverable col-md-4"
              target=""
              title=""
              href=""
            >
              <div className="count-card--number">
                <span className="count-card--number--value">6</span>
                <div className="count-card--flag">3 New</div>
              </div>
              <div className="count-card--label">Accepted Invitations</div>
            </a>
            <a className=" col-md-4" target="" title="" href="">
              <div className="count-card--number">
                <span className="count-card--number--value">3</span>
                <div className="count-card--flag">3 New</div>
              </div>
              <div className="count-card--label">Recent Visitors</div>
            </a>
          </div>

          <Card className="card row shadow-lg ">
            <div>
              <h6 className="my-3">Profile Updated</h6>
            </div>

            <p>
              Your Profile is how your Matches see you. Thanks for improving it
              Go ahead, check out your Matches
            </p>
          </Card>
        </div>

        <div className="col-md-3">
          <div className="banner--box banner--box__default">
            <img
              src="https://img.shaadi.com/imgs/promo_strategy/web_regular_promo_220324_55.png"
              alt=""
              title=""
              aria-label=""
              className="banner--box__default--image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
