import { Skeleton } from 'antd';

const Loader = () => {
  return (
    <div>
      <Skeleton className="my-5" />
      <Skeleton className="my-5" />
      <Skeleton className="my-5" />
    </div>
  );
};

export default Loader;
