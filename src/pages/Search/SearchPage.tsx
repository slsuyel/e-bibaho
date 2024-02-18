import FilterBox from "./FilterBox";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className="bg-body-secondary">
      <div className="row mx-auto container py-5">
        <div className="col-md-4">
          <FilterBox />
        </div>
        <div className="col-md-8 ">
          <SearchResult />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
