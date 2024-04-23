import { Link } from "react-router-dom";

const MyContact = () => {
  return (
    <>
      <div className="user-d-border p-0" id="partner-preferences">
        <div className="align-items-baseline bg-red-500 d-flex justify-content-between pe-1 py-2">
          <h5 className="m-0 ps-2 text-secondary"> My Contact detail</h5>
          <Link to="/user/profile/edit?sec=my-contact">Edit</Link>
        </div>

        <div className="col-md-6">
          <table className="table ">
            <tbody>
              <tr>
                <td className="text-secondary ">Mobile</td>
                <td>: 01722597565</td>
              </tr>
              <tr>
                <td className="text-secondary ">Email</td>
                <td>: slsuyel@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyContact;
