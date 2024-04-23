import { Link } from "react-router-dom";

const LocationDetails = () => {
  return (
    <>
      <div className="align-items-center my-1 mt-2  d-flex justify-content-between font-maven">
        <h6 className="">Location Details</h6>
        <Link to="/user/profile/edit?sec=partner-location">Edit</Link>
      </div>
      <div className="user-d-border"></div>
      <div className="row mx-auto basic-info">
        <div className="col-md-6">
          <table className="table font-maven">
            <tbody>
              <tr>
                <td className="text-secondary ">Country living in</td>
                <td>: Bangladesh</td>
              </tr>

              <tr>
                <td className="text-secondary ">State living in</td>
                <td>: Doesn't Matter</td>
              </tr>
              <tr>
                <td className="text-secondary ">City / District</td>
                <td>: Doesn't Matter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LocationDetails;
