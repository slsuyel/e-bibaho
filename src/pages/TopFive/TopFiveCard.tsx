import { Card } from "antd";
import { Link } from "react-router-dom";
import img from "../../assets/images/dr.-shamma.png";
interface Person {
  name: string;
  photo: string;
  age: string;
  height: string;
  location: string;
  religion: string;
  marital_status: string;
  education: string;
  occupation: string;
  religious_practice: string;
}

interface TopFiveCardProps {
  people: Person;
}

const TopFiveCard = ({ people }: TopFiveCardProps) => {
  return (
    <div className="my-1 border-top border-2 ">
      <Card
        hoverable
        className="rounded-0 success_page"
        style={{ height: "100vh" }}
      >
        <div className="row mx-auto my-auto">
          <div className="col-md-6 m-auto text-center">
            <img
              width={450}
              className="img-fluid "
              src={img}
              // src={people.photo}
              alt={people.name}
            />
          </div>

          <div className="col-md-6  my-auto">
            <div className="d-flex justify-content-between px-2 w-100">
              <h4 className="text-info-emphasis">{people.name}</h4>
            </div>
            <hr className="mt-1 text-secondary" />

            <div className="row">
              <div className="table-responsive col-md-10">
                <table className="lh-lg custom-table table-bordered  w-100">
                  <tbody>
                    <tr>
                      <td>
                        {people.age}, {people.height}
                      </td>
                      <td>{people.location}</td>
                    </tr>
                    <tr>
                      <td>{people.religion}</td>
                      <td>{people.marital_status}</td>
                    </tr>
                    <tr>
                      <td>{people.education}</td>
                      <td>{people.occupation}</td>
                    </tr>
                    <tr>
                      <td>{people.religious_practice}</td>
                      <td>Not Working</td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          I'm an {people.education} doctor. Currently living in{" "}
                          {people.location}.
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

export default TopFiveCard;
