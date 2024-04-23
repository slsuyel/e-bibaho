import { Link } from "react-router-dom";

const EducationCareer = () => {
  return (
    <>
      <div className="align-items-center my-1 mt-2  d-flex justify-content-between ">
        <h6 className="">Education & Career</h6>
        <Link to="/user/profile/edit?sec=edu-career">Edit</Link>
      </div>
      <div className="user-d-border"></div>
      <div className="row mx-auto basic-info">
        <div className="col-md-6">
          <table className="table ">
            <tbody>
              <tr>
                <td className="text-secondary">Highest Qualification</td>
                <td>:B.Eng (Hons) - Engineering</td>
              </tr>
              <tr>
                <td className="text-secondary">College(s) / University</td>
                <td>: A K K New Law Academy</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <table className="table ">
            <tbody>
              <tr>
                <td className="text-secondary">Working Sector</td>
                <td>: Private Company</td>
              </tr>
              <tr>
                <td className="text-secondary">Profession </td>
                <td>: Company Secretary</td>
              </tr>
              <tr>
                <td className="text-secondary">Monthly Income</td>
                <td>: 50000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EducationCareer;
