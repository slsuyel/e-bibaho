import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();

  return (
    <div className="row search-box mx-auto font-maven fw-medium">
      <div className="mb-5">
        <div className="bg-white col-md-10 mx-auto p-4  rounded row shadow-lg">
          <h1 className="font-maven mb-4 mt-1 text-center ">
            Find Your
            <span className="fw-medium text-info-emphasis "> Soulmate</span>
          </h1>
          <div className="col-md-2">
            <div className="form-group my-1">
              <input
                type="hidden"
                name="page_name"
                defaultValue="profession_search"
              />
              <label className="control-label text-info-emphasis">
                Looking For
              </label>
              <select
                name="looking_for"
                id="looking_id"
                className="form-control"
              >
                <option value="">looking for</option>
                <option value={0}>Bride</option>
                <option value={1}>Groom</option>
              </select>
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group my-1">
              <label className="control-label text-info-emphasis">
                Religion
              </label>
              <select name="religion" id="community" className="form-control">
                <option value="">Religion</option>
                <option value={1}>Muslim</option>
                <option value={2}>Hindu</option>
                <option value={3}>Christian</option>
                <option value={4}>Buddhist</option>
                <option value={5}>Spiritual</option>
                <option value={6}>Bahai</option>
              </select>
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group my-1">
              <label className="control-label text-info-emphasis">
                Marital Status
              </label>
              <select name="marital[]" id="marital" className="form-control">
                <option value={1}>Never Married</option>
                <option value={2}>Widowed</option>
                <option value={3}>Awaiting Divorce</option>
                <option value={4}>Annulled</option>
                <option value={5}>Divorced</option>
              </select>
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group my-1">
              <label className="control-label text-info-emphasis">Age to</label>
              <select id="marital" className="form-control">
                {[...Array(80 - 19)].map((_, index) => (
                  <option key={index + 19}>{index + 19}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group my-1">
              <label className="control-label text-info-emphasis">Age to</label>
              <select id="marital" className="form-control">
                {[...Array(80 - 19)].map((_, index) => (
                  <option key={index + 19}>{index + 19}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="col-md-2">
            <br />
            <Button
              onClick={() => navigate("/search-res")}
              style={{ height: "40px" }}
              className="d-flex py-3 text-white align-items-center  bg-danger text-white"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
