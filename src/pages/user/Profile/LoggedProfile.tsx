import { Button, Card } from "antd";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./../styles/User.css";
import BasicInfoProfile from "./BasicInfoProfile";
import ReligiousBackground from "./ReligiousBackground";
import FamilyDetails from "./FamilyDetails";
import Hobbies from "./Hobbies";
import BasicInfoPartner from "./PartnerPreferences/BasicInfoPartner";
import LocationDetails from "./PartnerPreferences/LocationDetails";
import MyContact from "./MyContact";

const LoggedProfile = () => {
  return (
    <Container className="col-md-9 mx-auto logged-profile">
      <Card className="py-3">
        <div className="bg-red-500 py-2 ">
          <h1 className="fs-3 ps-2 text-secondary  font-maven fw-bold">
            Suyel Haque
          </h1>
        </div>

        <div className="row font-maven">
          <div className="col-md-3 text-center">
            <div className="my-2">
              <Link to="">
                <i className="fas fa-camera"></i> View Album
              </Link>
            </div>
            <img
              className="img-fluid img-thumbnail rounded-0"
              src="https://img3.shaadi.com/2024/02/16/dSH62269192-1708062503871001127-Male.jpg"
              alt="Profile Photo"
            />
          </div>

          <div className="col-md-9 row mt-3">
            <div className="col-md-6">
              <p className="mb-0">Age: 32</p>
              <p className="mb-0">Height: 5' 6"</p>
              <p className="mb-0">Marital Status: Never Married</p>
              <p className="mb-0">Posted by: Self</p>
            </div>
            <div className="col-md-6">
              <p className="mb-0">Religion / Community: Muslim, Sunni Hanafi</p>
              <p className="mb-0">Location: Dhaka</p>
              <p className="mb-0">Mother Tongue: Bengali</p>
            </div>

            <div className="border my-3 opacity-75"></div>

            <div className="border profile-setting">
              <h5 className="text-danger-emphasis  my-2 ">
                Manage your Profile
              </h5>

              <div className="d-flex flex-wrap justify-content-between">
                <ul>
                  <li>
                    <Link to={""}>Edit Personal Profile</Link>
                  </li>
                  <li>
                    <Link to={""}>View Profile Stats</Link>
                  </li>
                  <li>
                    <Link to={""}>Set Contact Filters</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to={""}>Edit Partner Profile</Link>
                  </li>
                  <li>
                    <Link to={""}>Add Photos</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to={""}>Hide / Delete Profile</Link>
                  </li>
                  <li>
                    <Link to={""}>Edit Contact Details</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="row my-2 mx-auto ">
          <div className="user-d-border  m-0 p-0">
            <Button
              size="middle"
              type="primary"
              className="bg-danger rounded-0 fw-medium ms-0"
            >
              About Myself
            </Button>

            <a
              className="rounded-0 border-danger fw-medium rounded-0 text-danger border-top-0"
              href="#partner-preferences"
            >
              <span></span> Partner Preferences
            </a>
          </div>

          <div>
            <div className="align-items-center my-1 mt-2  d-flex justify-content-between ">
              <h6 className="">
                Personality, Family Details, Career, Partner Expectations etc.
              </h6>
              <Link to="">Edit</Link>
            </div>

            <div className="user-d-border "></div>
            <p>
              Allow me to introduce myself. Modern yet traditional, I am deeply
              inclined in our values, ethics and culture. I am looking forward
              to settling down with a partner who shares my values and
              interests, someone with whom I can always be myself. If you find
              yourself having mutual thoughts, feel free to contact me.
            </p>
          </div>

          {/* BasicInfoProfile */}
          <div className="user-d-border "></div>
          <BasicInfoProfile />

          {/* Religious Background*/}
          <div className="user-d-border "></div>
          <ReligiousBackground />

          {/* FamilyDetails */}
          <div className="user-d-border "></div>
          <FamilyDetails />

          <div className="user-d-border "></div>
          <Hobbies />

          {/* Partner Preferences */}

          <div className="user-d-border p-0" id="partner-preferences">
            <div className="bg-red-500 py-2 ">
              <h5 className="m-0 ps-2 text-secondary"> Partner Preferences</h5>
            </div>
          </div>
          <BasicInfoPartner />
          <LocationDetails />

          {/* My Contact detail*/}

          <MyContact />
        </div>
      </Card>
    </Container>
  );
};

export default LoggedProfile;