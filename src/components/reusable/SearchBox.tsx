import { Button, Skeleton } from 'antd';

import { useNavigate } from 'react-router-dom';
import useAllHooks from '../../hooks/useAllHooks';

const SearchBox = () => {
  const navigate = useNavigate();
  const { data, loading } = useAllHooks();
  if (loading) {
    return <Skeleton style={{ marginTop: 15 }} />;
  }

  return (
    <div
      className="row search-box mx-auto font-maven fw-medium mt-3 "
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <div className="col-md-10 mx-auto py-5 rounded row animation-bg">
        <div className="col-md-2">
          <div className="form-group my-1">
            <input
              type="hidden"
              name="page_name"
              defaultValue="profession_search"
            />
            <label className="control-label text-white ">Looking For</label>
            <select name="looking_for" id="looking_id" className="form-control">
              <option value={0}>Bride</option>
              <option value={1}>Groom</option>
            </select>
          </div>
        </div>

        <div className="col-md-2">
          <div className="form-group my-1">
            <label className="control-label text-white ">Religion</label>
            <select name="religion" id="community" className="form-control">
              {data?.religions.map(d => (
                <option key={d.id}>{d.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-2">
          <div className="form-group my-1">
            <label className="control-label text-white ">Marital Status</label>
            <select name="marital" id="marital" className="form-control">
              {data?.marital_status.map(d => (
                <option key={d.id}>{d.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-2">
          <div className="form-group my-1">
            <label className="control-label text-white ">Age from</label>
            <select id="marital" className="form-control">
              {[...Array(80 - 19)].map((_, index) => (
                <option key={index + 19}>{index + 19}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-md-2">
          <div className="form-group my-1">
            <label className="control-label text-white ">Age to</label>
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
            onClick={() => navigate('/search-res')}
            style={{ height: '40px' }}
            className="d-flex py-3 text-white align-items-center  bg-danger text-white"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
