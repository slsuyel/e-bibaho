import { useLocation } from 'react-router-dom';
import FilterBox from './FilterBox';
import SearchResult from './SearchResult';

import useFilterData from '../../hooks/useFilterData';

const SearchPage = () => {
  const location = useLocation();
  const {
    lookingFor = '2',
    religion = '',
    marital_status = '',
    age_from = '',
    age_to = '',
  } = location.state || {};

  const { data, loader } = useFilterData(
    lookingFor,
    religion,
    marital_status,
    age_from,
    age_to
  );

  return (
    <div className="bg-body-secondary">
      <div className="row mx-auto container py-5">
        <div className="col-md-4">
          <FilterBox />
        </div>
        <div className="col-md-8 ">
          <SearchResult data={data || []} loader={loader} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
