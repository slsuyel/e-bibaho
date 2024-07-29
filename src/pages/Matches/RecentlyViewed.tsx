import SearchResult from '../Search/SearchResult';

const RecentlyViewed = () => {
  return (
    <div className="container ">
      <h6 className="text-center  mt-4">Recently Viewed Members (7)</h6>

      <div>
        <SearchResult data={[]} loader={false} />
      </div>
    </div>
  );
};

export default RecentlyViewed;
