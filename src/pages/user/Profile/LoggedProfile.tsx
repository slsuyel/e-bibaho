import { Button, Card } from 'antd';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../styles/User.css';
import BasicInfoProfile from './BasicInfoProfile';
import ReligiousBackground from './ReligiousBackground';
import FamilyDetails from './FamilyDetails';
import Hobbies from './Hobbies';
import BasicInfoPartner from './PartnerPreferences/BasicInfoPartner';
import LocationDetails from './PartnerPreferences/LocationDetails';
import MyContact from './MyContact';
import EducationCareer from './EducationCareer';
import PersonalityText from './PersonalityText';
import OthersPreferences from './PartnerPreferences/OthersPreferences';

const LoggedProfile = () => {
  return (
    <Container className="col-md-9 mx-auto logged-profile py-5">
      <Card className="py-3">
        <div className="bg-red-500 py-2 ">
          <h1 className="fs-3 ps-2 text-secondary  font-maven fw-bold">
            Suyel Haque
          </h1>
        </div>

        <div className="row font-maven">
          <div className="col-md-3 text-center">
            <div className="my-2">
              <Link to="/user/profile/photos">
                <i className="fas fa-camera"></i> View Album
              </Link>
            </div>
            <img
              width={300}
              style={{ maxHeight: 300 }}
              className="img-fluid img-thumbnail rounded-0 object-fit-cover"
              src="https://pbs.twimg.com/profile_images/1782010160254218240/2SIboym6_400x400.jpg"
              alt="Profile Photo"
            />
          </div>

          <div className="col-md-9 row mt-3 ">
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
                    <Link to={'/user/profile/edit?sec=basic'}>
                      Edit Personal Profile
                    </Link>
                  </li>
                  <li>
                    <Link to={''}>View Profile Stats</Link>
                  </li>
                  <li>
                    <Link to={''}>Set Contact Filters</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to={'/user/profile/edit?sec=partner-basic'}>
                      Edit Partner Profile
                    </Link>
                  </li>
                  <li>
                    <Link to={'/user/profile/photos'}>Add Photos</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to={''}>Hide / Delete Profile</Link>
                  </li>
                  <li>
                    <Link to={'/user/profile/edit?sec=my-contact'}>
                      Edit Contact Details
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="row my-2 mx-auto ">
          <div className="user-d-border font-maven m-0 p-0">
            <Button
              size="middle"
              type="primary"
              className="bg-danger rounded-0 fw-medium ms-0 me-1  font-maven"
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

          {/* Personality, Family Details, Career, Partner Expectations etc */}
          <PersonalityText />

          {/* BasicInfoProfile */}
          <div className="user-d-border "></div>
          <BasicInfoProfile />

          {/* Religious Background*/}
          <div className="user-d-border "></div>
          <ReligiousBackground />

          {/* Education & Career
           */}
          <div className="user-d-border "></div>
          <EducationCareer />

          {/* FamilyDetails */}
          <div className="user-d-border "></div>
          <FamilyDetails />

          <div className="user-d-border "></div>
          <Hobbies />

          {/* Partner Preferences */}

          <div className="user-d-border p-0" id="partner-preferences">
            <div className="bg-red-500 py-2 ">
              <h5 className="m-0 ps-2 text-secondary font-maven">
                {' '}
                Partner Preferences
              </h5>
            </div>
          </div>
          <BasicInfoPartner />
          <LocationDetails />
          <OthersPreferences />
          {/* My Contact detail*/}
          <MyContact />
        </div>
      </Card>
    </Container>
  );
};

export default LoggedProfile;
