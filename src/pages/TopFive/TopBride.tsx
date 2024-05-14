import { Person } from "../../types/types";
import "./TopFive.css";
interface PersonProps {
  data: Person[];
}
const TopBride = ({ data }: PersonProps) => {
  return (
    <div className="row mx-auto " style={{ background: "#ADE5F9" }}>
      <div
        className="col-md-10 mx-auto "
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {data.map((people: Person, index: number) => (
          <div
            key={index}
            className={` my-1  res-card mb-3 ${
              ["one", "two", "three", "four"][index % 4]
            }`}
          >
            <div className="br_card">
              <div className="br_img">
                <img src={people.photo} />
              </div>
              <div className="br_infos">
                <div className="br_name">
                  <h2>{people.name}</h2>
                  <h4>20241123</h4>
                </div>
                <p className="br_text">
                  My name is Emma. I'm a 32-year-old Muslim woman living in
                  Dhaka. Standing at 5 feet 3 inches, I am married and work as a
                  doctor. I hold a degree in MBBS and practice medicine with
                  dedication and compassion. My religious practice is moderate,
                  guiding my life and actions.
                </p>
                <div className="table-responsive col-md-10">
                  <table className="lh-lg table">
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
                    </tbody>
                  </table>
                </div>
                <div className="br_links d-flex gap-2">
                  <button className="m-0 mb-3 ">
                    <i className="fa-solid fs-5 fa-phone"></i>
                  </button>
                  <button className="m-0 mb-3 ">
                    <i className="fa-solid fs-5 fa-envelope"></i>
                  </button>
                  <button className="m-0 mb-3 ">
                    <i className="fa-brands fs-5 fa-whatsapp"></i>
                  </button>
                  <button className="m-0 mb-3 ">
                    <i className="fa-solid fs-5 fa-thumbs-up"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBride;
