import { Link } from "react-router-dom";

const FamilyDetails = () => {
  return (
    <>
      <div className="align-items-center my-1 mt-2  d-flex justify-content-between ">
        <h6 className="">Family details</h6>
        <Link to="">Edit</Link>
      </div>
      <div className="user-d-border"></div>
      <div className="row mx-auto basic-info">
        <div className="col-md-6">
          <table className="table ">
            <tbody>
              <tr>
                <td className="text-secondary">Father's Status</td>
                <td>: Not Employed</td>
              </tr>
              <tr>
                <td className="text-secondary">Mother's Status</td>
                <td>: Homemaker</td>
              </tr>
              <tr>
                <td className="text-secondary">Family Location</td>
                <td>: Dhaka, Bangladesh</td>
              </tr>
              <tr>
                <td className="text-secondary">Family Values</td>
                <td>: Not Specified</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <table className="table ">
            <tbody>
              <tr>
                <td className="text-secondary">Native Place</td>
                <td>: Not Specified</td>
              </tr>
              <tr>
                <td className="text-secondary">No. of Brothers</td>
                <td>: 0</td>
              </tr>
              <tr>
                <td className="text-secondary">No. of Sisters</td>
                <td>: 0</td>
              </tr>
              <tr>
                <td className="text-secondary">Family Type</td>
                <td>: Not Specified</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FamilyDetails;