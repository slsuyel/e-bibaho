import { Card } from "antd";
import img from "../../assets/images/dr.-shamma.png";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Emma",
    photo: "https://example.com/emma.jpg",
    age: "32 Years",
    height: "5ft 3in",
    location: "Dhaka",
    religion: "Muslim",
    marital_status: "Married",
    education: "MBBS",
    occupation: "Doctor",
    religious_practice: "Moderate",
  },
  {
    name: "Olivia",
    photo: "https://example.com/olivia.jpg",
    age: "28 Years",
    height: "5ft 2in",
    location: "Dhaka",
    religion: "Muslim",
    marital_status: "Single",
    education: "BDS",
    occupation: "Dentist",
    religious_practice: "Occasional",
  },
  {
    name: "Ava",
    photo: "https://example.com/ava.jpg",
    age: "30 Years",
    height: "5ft 1in",
    location: "Dhaka",
    religion: "Muslim",
    marital_status: "Single",
    education: "MBBS",
    occupation: "Doctor",
    religious_practice: "Occasional",
  },
  {
    name: "Sophia",
    photo: "https://example.com/sophia.jpg",
    age: "29 Years",
    height: "5ft 5in",
    location: "Dhaka",
    religion: "Muslim",
    marital_status: "Married",
    education: "MBBS",
    occupation: "Doctor",
    religious_practice: "Frequent",
  },
  {
    name: "Isabella",
    photo: "https://example.com/isabella.jpg",
    age: "31 Years",
    height: "5ft 4in",
    location: "Dhaka",
    religion: "Muslim",
    marital_status: "Single",
    education: "MBBS",
    occupation: "Doctor",
    religious_practice: "Frequent",
  },
];

const TopBride = () => {
  return (
    <div className="top_five_container">
      {data.map((people, index) => (
        <Card
          hoverable
          key={index}
          className={`rounded-0 why_us_page my-1 border-top border-2 res-card ${
            ["one", "two", "three", "four"][index % 4]
          }`}
        >
          <div className="row mx-auto my-auto">
            <div className="col-md-6 m-auto text-center">
              <img
                width={450}
                className="img-fluid "
                src={img}
                // src={people.photo}
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
                            I'm an {people.education} doctor. Currently living
                            in {people.location}.
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
      ))}
    </div>
  );
};

export default TopBride;
