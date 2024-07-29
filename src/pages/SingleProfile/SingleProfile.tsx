import { Card } from 'antd';
import Details from './Details';
import PartnerPreferences from '../PartnerPreferences/PartnerPreferences';
import BackBtn from '../../components/reusable/BackBtn';
import { useParams } from 'react-router-dom';
import useSingleProfile from '../../hooks/useSingleProfile';

import Loader from '../../components/ui/Loader';
import { calculateAge } from '../../utils/calculateAge';

const SingleProfile = () => {
  const { id } = useParams();
  const { profile, loading } = useSingleProfile(id);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-dark-subtle">
      <div className="row mx-auto container">
        <div className="my-1 mt-4">
          <BackBtn />
          <div className="mt-3"></div>
          <Card hoverable>
            <div className="row mx-auto">
              <div className="col-md-4 m-auto text-center">
                <img
                  width={250}
                  src="https://cdnb.artstation.com/p/assets/images/images/001/372/641/large/hamada-mabrouk-woman-avatar-hijab-3.jpg?1445282460"
                  alt=""
                />
              </div>

              <div className="col-md-8">
                <div className="d-flex justify-content-between px-2 w-100">
                  <h6>
                    {profile?.first_name}
                    {''}
                    {profile?.last_name}
                  </h6>
                  <p className="mb-0">Online: Month before</p>
                </div>
                <hr className="mt-1 text-secondary" />

                <div className="row">
                  <div className="table-responsive col-md-10">
                    <table className="lh-lg table table-bordered  w-100">
                      <tbody>
                        <tr>
                          <td>
                            {calculateAge(profile?.date_of_birth)} Years, 5ft
                            1in
                          </td>
                          <td>Jackson Heights</td>
                        </tr>
                        <tr>
                          <td>{profile?.religions}</td>
                          <td>{profile?.maritalStatus}</td>
                        </tr>
                        <tr>
                          <td>MBBS / BDS</td>
                          <td>Doctor</td>
                        </tr>
                        <tr>
                          <td>Average religious</td>
                          <td>Not Working</td>
                        </tr>
                        <tr>
                          <td>
                            <span>
                              I'm an MBBS doctor. Currently living in germany.
                            </span>
                          </td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-2 p-0">
                    <button className="m-0 mb-3 btn-default">
                      <i className="fa-solid fa-user-plus fs-6"></i>
                    </button>
                    <button className="m-0 mb-3 btn-default">
                      <i className="fa-solid fs-5 fa-phone"></i>
                    </button>
                    <button className="m-0 mb-3 btn-default">
                      <i className="fa-solid fs-5 fa-envelope"></i>
                    </button>
                    <button className="m-0 mb-3 btn-default">
                      <i className="fa-brands fs-4 fa-whatsapp"></i>
                    </button>
                    <button className="m-0 mb-3 btn-default">
                      <i className="fa-solid fs-5 fa-thumbs-up"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="my-4">
            <Card hoverable>
              <div className="row mx-auto">
                <div className="col-md-6">
                  <Details profile={profile} />
                </div>
                <div className="col-md-6">
                  <PartnerPreferences />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProfile;
