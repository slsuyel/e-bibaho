import useIsMobile from '../../../../hooks/useIsMobile';
import { DataWhyUS } from '../../../../types/types';

const Card = ({ data }: { data: DataWhyUS }) => {
  const isMobile = useIsMobile();

  return (
    <section
      className={`hr-content justify-content-between d-flex align-items-center why-contents ${
        isMobile ? 'stack__card ' : ''
      }`}
    >
      <div className=" row mx-auto py-5">
        <div className="col-md-6 py-3 position-relative ">
          <div className="pt-5 px-5">
            <h2 className="my-3 px-1 fw-bold">{data.title}</h2>
            <p className="ps-4" style={{ fontSize: '20px' }}>
              {data.description}
            </p>
          </div>
        </div>

        <div className="col-md-6 py-3  text-center">
          <img
            width={450}
            className="myImg img-fluid "
            src={data.img}
            alt="Heart-shaped image"
          />
        </div>
      </div>
    </section>
  );
};

export default Card;
