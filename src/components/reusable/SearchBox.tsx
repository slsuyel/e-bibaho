import { useState } from 'react';
import { Button, Skeleton } from 'antd';
import useAllTools from '../../hooks/useAllTools';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const navigate = useNavigate();
  const { data, loading } = useAllTools();
  const [lookingFor, setLookingFor] = useState(1);
  const [religion, setReligion] = useState('');
  const [marital_status, setMarital_status] = useState('');
  const [age_from, setAge_from] = useState(19);
  const [age_to, setAge_to] = useState(40);

  const handleSearch = () => {
    navigate('/search-res?', {
      state: {
        lookingFor,
        religion,
        marital_status,
        age_from,
        age_to,
      },
    });
  };

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
            <label className="control-label text-white">Looking For</label>
            <select
              name="looking_for"
              id="looking_id"
              className="form-control"
              value={lookingFor}
              onChange={e => setLookingFor(Number(e.target.value))}
            >
              <option value={2}>Bride</option>
              <option value={1}>Groom</option>
            </select>
          </div>
        </div>

        <div className="col-md-2">
          <div className="form-group my-1">
            <label className="control-label text-white">Religion</label>
            <select
              name="religion"
              id="community"
              className="form-control"
              value={religion}
              onChange={e => setReligion(e.target.value)}
            >
              {data?.religions.map(d => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-2">
          <div className="form-group my-1">
            <label className="control-label text-white">Marital Status</label>
            <select
              name="marital"
              id="marital"
              className="form-control"
              value={marital_status}
              onChange={e => setMarital_status(e.target.value)}
            >
              {data?.marital_status.map(d => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-2">
          <div className="form-group my-1">
            <label className="control-label text-white">Age from</label>
            <select
              id="age_from"
              className="form-control"
              value={age_from}
              onChange={e => setAge_from(Number(e.target.value))}
            >
              {[...Array(80 - 19)].map((_, index) => (
                <option key={index + 19} value={index + 19}>
                  {index + 19}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-md-2">
          <div className="form-group my-1">
            <label className="control-label text-white">Age to</label>
            <select
              id="age_to"
              className="form-control"
              value={age_to}
              onChange={e => setAge_to(Number(e.target.value))}
            >
              {[...Array(80 - 19)].map((_, index) => (
                <option key={index + 19} value={index + 19}>
                  {index + 19}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-md-2">
          <br />
          <Button
            style={{ height: '40px' }}
            className="d-flex py-3 text-white align-items-center bg-danger"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
