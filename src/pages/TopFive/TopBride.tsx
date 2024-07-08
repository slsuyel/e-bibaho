import { Person } from '../../types/types';
import './TopFive.css';
interface PersonProps {
  data: Person[];
}
const TopBride = ({ data }: PersonProps) => {
  return (
    <div className="row mx-auto " style={{ background: '#ADE5F9' }}>
      <div
        className="col-md-10 mx-auto "
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {data.map((people: Person, index: number) => (
          <div
            key={index}
            className={` my-1  res-card mb-3 ${
              ['one', 'two', 'three', 'four'][index % 4]
            }`}
          >
            <div className="br_card">
              <div className="br_img">
                <img
                  src={people.photo}
                  className="img-fluid object-fit-cover"
                />
              </div>
              <div className="br_infos">
                <div className="br_name d-flex justify-content-between">
                  <h2>{people.name}</h2>
                  <h4>20241123</h4>
                </div>
                <p className="br_text">
                  My name is {people.name}. I'm a 32-year-old {people.religion}{' '}
                  woman living in {people.location} . Standing at{' '}
                  {people.height}, I am {people.marital_status} and work as a{' '}
                  {people.occupation}.
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
                <div className="br_links d-flex gap-2 flex-wrap justify-content-between  ">
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
