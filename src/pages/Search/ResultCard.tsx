import { Card } from "antd";
import { Link } from "react-router-dom";

const ResultCard = () => {
  return (
    <div className="my-1">
      <Card hoverable>
        <div className="row mx-auto">
          <div className="col-md-4 m-auto text-center">
            <img
              width={196}
              src="https://www.bdmarriage.com/Photos/Members/l42651/no-photo-female.jpg"
              alt=""
            />
          </div>

          <div className="col-md-8">
            <div className="d-flex justify-content-between px-2 w-100">
              <h6>AWZZ5828</h6>
              <p className="mb-0">Online: Month before</p>
            </div>
            <hr className="mt-1 text-secondary" />

            <div className="row">
              <div className="table-responsive col-md-10">
                <table className="lh-lg table table-bordered  w-100">
                  <tbody>
                    <tr>
                      <td>26 Years, 5ft 1in</td>
                      <td>Dhaka</td>
                    </tr>
                    <tr>
                      <td>Muslim</td>
                      <td>UnMarried</td>
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
                          I'm an MBBS doctor. Currently living in Dhaka.
                        </span>
                      </td>
                      <td>
                        <Link to={"/user/search-res/1"}>
                          <button className="m-0 btn-default">More</button>
                        </Link>
                      </td>
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
    </div>
  );
};

export default ResultCard;
