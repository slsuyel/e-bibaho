import { useLocation } from 'react-router-dom';
import FilterBox from './FilterBox';
import SearchResult from './SearchResult';
import { useEffect, useState } from 'react';
import { callApi } from '../../utils/functions';

const SearchPage = () => {
  const location = useLocation();
  const { lookingFor, religion, marital_status, age_from, age_to } =
    location.state;
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const res = await callApi(
          'get',
          `/profiles?gender=${lookingFor}&religion=${religion}&marital_status=${marital_status}&age_from=${age_from}&age_to=${age_to}`
        );

        if (res.code == 200) {
          setData(res.data);
          setLoader(false);
        } else if (res.code == 140) {
          setLoader(false);
        }
      } catch (error) {
        setLoader(false);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [lookingFor, religion, marital_status, age_from, age_to]);

  return (
    <div className="bg-body-secondary">
      <div className="row mx-auto container py-5">
        <div className="col-md-4">
          <FilterBox />
        </div>
        <div className="col-md-8 ">
          <SearchResult data={data} loader={loader} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
