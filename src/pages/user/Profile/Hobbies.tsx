import { Link } from "react-router-dom";

const Hobbies = () => {
  return (
    <>
      <div className="align-items-center my-1 mt-2 d-flex justify-content-between">
        <h6 className="">Hobbies and Interests</h6>
        <Link to="">Edit</Link>
      </div>
      <div className="user-d-border"></div>

      <div className="align-items-center d-flex flex-wrap fw-medium justify-content-around my-2">
        <div className="p-2 px-3 rounded-4 shadow-sm text-dark-emphasis my-1 border">
          <i className="fas fa-blog"></i> Blogging
        </div>
        <div className="p-2 px-3 rounded-4 shadow-sm text-dark-emphasis my-1 border">
          <i className="fas fa-pen"></i> Content creation
        </div>
        <div className="p-2 px-3 rounded-4 shadow-sm text-dark-emphasis my-1 border">
          <i className="fab fa-facebook"></i> Social media
        </div>
        <div className="p-2 px-3 rounded-4 shadow-sm text-dark-emphasis my-1 border">
          <i className="fas fa-running"></i> Running
        </div>
        <div className="p-2 px-3 rounded-4 shadow-sm text-dark-emphasis my-1 border">
          <i className="fas fa-bicycle"></i> Cycling
        </div>
      </div>
    </>
  );
};

export default Hobbies;
