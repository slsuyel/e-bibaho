import { Link } from 'react-router-dom';

const BasicInfoPartner = () => {
  return (
    <>
      <div className="align-items-center my-1 mt-2  d-flex justify-content-between font-maven">
        <h6 className="">Basics & Lifestyle</h6>
        <Link to="/user/profile/edit?sec=partner-basic">Edit</Link>
      </div>
      <div className="user-d-border"></div>
      <div className="row mx-auto basic-info">
        <div className="col-md-6">
          <table className="table font-maven">
            <tbody>
              <tr>
                <td className="text-secondary ">Age</td>
                <td>: 25</td>
              </tr>

              <tr>
                <td className="text-secondary ">Religion / Community</td>
                <td>: Muslim, Sunni Hanafi</td>
              </tr>
              <tr>
                <td className="text-secondary ">Height</td>
                <td>: 5' 6" (167cm)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <table className="table">
            <tbody>
              <tr>
                <td className="text-secondary ">Location</td>
                <td>: Jackson Heights</td>
              </tr>
              <tr>
                <td className="text-secondary ">Mother Tongue</td>
                <td>: Bengali</td>
              </tr>
              <tr>
                <td className="text-secondary ">Marital Status</td>
                <td>: Never Married</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BasicInfoPartner;
