import { Card } from 'antd';
import { TUserProfile } from '../../types';
import { Link } from 'react-router-dom';
import Loader from '../../components/ui/Loader';
import { calculateAge } from '../../utils/calculateAge';

interface TData {
  data: TUserProfile[];
  loader: boolean;
}

const SearchResult = ({ data, loader }: TData) => {
  console.log(data);

  if (loader) {
    return <Loader />;
  }

  return (
    <div>
      {data.length > 0 &&
        data.map(d => (
          <div className="mb-4" key={d.id}>
            <Card hoverable>
              <div className="row mx-auto">
                <div className="col-md-4 m-auto text-center">
                  <img
                    width={300}
                    className="img-fluid object-fit-cover"
                    src="https://cdn-icons-png.freepik.com/512/9193/9193915.png"
                    alt=""
                  />
                </div>

                <div className="col-md-8">
                  <div className="d-flex justify-content-between px-2 w-100">
                    <h6>
                      {d.first_name}
                      {''} {d.last_name}
                    </h6>
                    <p className="mb-0">{`ebibah2024${d.id}`}</p>
                  </div>
                  <hr className="mt-1 text-secondary" />

                  <div className="row">
                    <div className="table-responsive col-md-10">
                      <table className="lh-lg table table-bordered  w-100">
                        <tbody>
                          <tr>
                            <td>
                              {calculateAge(d?.date_of_birth)} Years, 5ft 1in
                            </td>
                            <td>Jackson Heights</td>
                          </tr>
                          <tr>
                            <td>{d.religions}</td>
                            <td>{d.maritalStatus}</td>
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
                                I'm an MBBS doctor. Currently living in Uk.
                              </span>
                            </td>
                            <td>
                              <Link to={`/user/search-res/${d.id}`}>
                                <button className="m-0 btn-default">
                                  More
                                </button>
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
        ))}
      {data.length == 0 && (
        <Card className="text-center">
          <h3 className="text-center my-4">No data found</h3>
          <h5>Search again</h5>
          <img
            className="img-fluid"
            draggable={false}
            src="https://i.ibb.co/gF89FTN/no-data.png"
            alt=""
          />
        </Card>
      )}
    </div>
  );
};

export default SearchResult;
