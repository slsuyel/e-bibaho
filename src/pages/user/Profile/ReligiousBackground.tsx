import { Link } from "react-router-dom";

const ReligiousBackground = () => {
  return (
    <>
      <div className="align-items-center my-1 mt-2  d-flex justify-content-between ">
        <h6 className="">Basics & Lifestyle</h6>
        <Link to="">Edit</Link>
      </div>
      <div className="user-d-border"></div>
      <div className="row mx-auto basic-info">
        <div className="col-md-6">
          <table className="table ">
            <tbody>
              <tr>
                <td className="text-secondary ">Religion</td>
                <td>: Muslim</td> {/* Updated Religion */}
              </tr>
              <tr>
                <td className="text-secondary ">Community</td>
                <td>: Sunni Hanafi</td> {/* Updated Community */}
              </tr>
              <tr>
                <td className="text-secondary ">Sub Community</td>
                <td>: Not Specified</td> {/* Added Sub Community */}
              </tr>
              <tr>
                <td className="text-secondary ">Mother Tongue</td>
                <td>: Bengali</td> {/* Added Mother Tongue */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ReligiousBackground;
