import { Link } from "react-router-dom";

const BasicInfoProfile = () => {
  return (
    <>
      <div className="align-items-center my-1 mt-2  d-flex justify-content-between ">
        <h6 className="">Basics & Lifestyle</h6>
        <Link to="/user/profile/edit?sec=basic">Edit</Link>
      </div>
      <div className="user-d-border"></div>
      <div className="row mx-auto basic-info">
        <div className="col-md-6">
          <table className="table ">
            <tbody>
              <tr>
                <td className="text-secondary ">Age</td>
                <td>: 25</td>
              </tr>
              <tr>
                <td className="text-secondary ">Date of Birth</td>
                <td>: 10-Aug-1998</td>
              </tr>
              <tr>
                <td className="text-secondary ">Marital Status</td>
                <td>: Never Married</td>
              </tr>
              <tr>
                <td className="text-secondary ">Religion / Community</td>
                <td>: Muslim, Sunni Hanafi</td>
              </tr>
              <tr>
                <td className="text-secondary ">Height</td>
                <td>: 5' 6" (167cm)</td>
              </tr>
              <tr>
                <td className="text-secondary ">Birth Place</td>
                <td>: Bangladesh</td>
              </tr>
              {/* <tr>
                <td className="text-secondary ">Diet</td>
                <td>: Veg</td>
              </tr> */}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <table className="table">
            <tbody>
              <tr>
                <td className="text-secondary ">Location</td>
                <td>: Dhaka</td>
              </tr>

              <tr>
                <td className="text-secondary ">Personal Values</td>
                <td>: Will tell you later</td>
              </tr>

              <tr>
                <td className="text-secondary ">Blood Group</td>
                <td>: Enter Now</td>
              </tr>

              <tr>
                <td className="text-secondary ">Disability</td>
                <td>: None</td>
              </tr>
              <tr>
                <td className="text-secondary ">Posted by</td>
                <td>: Self</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BasicInfoProfile;
